import axios, { AxiosResponse } from "axios";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { authorizationHeader, endpoint } from "../constant";
import roleColors from "../data/roleColors";
import {
	APIInteractionResponseChannelMessageWithSource,
	APIInteractionResponseDeferredChannelMessageWithSource,
	APIMessageComponentInteraction,
	APIRole,
	APISelectMenuOption,
	ComponentType,
	InteractionResponseType,
} from "../discord-api-types/v9";
import { rolesCache } from "../lib/cache";
import { getApp, getDatabase } from "../lib/firebase";
import pause from "../util/pause";

const createGuildRole = async (guildId: string, colorName: string, colorValue: number) => {
	const response: AxiosResponse<APIRole> = await axios({
		method: "POST",
		url: `${endpoint}/guilds/${guildId}/roles`,
		headers: { "Content-Type": "application/json", Authorization: authorizationHeader },
		data: {
			name: colorName,
			color: colorValue,
		},
	});

	return response.data.id;
};

const constructMenuOptionsFromCachedValue = (guildId: string): APISelectMenuOption[] => {
	const cachedValue = rolesCache.get(guildId)!;

	return Object.keys(cachedValue).map((value) => {
		const definition = roleColors[value as keyof typeof roleColors];
		return {
			label: value,
			value: cachedValue[value as keyof typeof roleColors],
			emoji: { id: definition.emojiId as `${bigint}`, name: value, animated: definition.animated },
		};
	});
};

export const execute = async (interaction: APIMessageComponentInteraction) => {
	let deferred = false;
	let menuOptions: APISelectMenuOption[];
	if (rolesCache.get(interaction.guild_id!)) {
		menuOptions = constructMenuOptionsFromCachedValue(interaction.guild_id!);
		console.log("options in cache");
	} else {
		const app = await getApp();
		const db = await getDatabase(app);
		const guildDoc = await getDoc(doc(collection(db, "guilds"), interaction.guild_id!));

		if (!guildDoc.get("roles")) {
			deferred = true;

			const deferredResponse: APIInteractionResponseDeferredChannelMessageWithSource = {
				type: InteractionResponseType.DeferredChannelMessageWithSource,
			};

			await axios({
				method: "POST",
				url: `${endpoint}/interactions/${interaction.id}/${interaction.token}/callback`,
				data: deferredResponse,
			});

			const roleNameToId: Partial<RolesField> = {};
			for (const colorName in roleColors) {
				roleNameToId[colorName as keyof typeof roleColors] = await createGuildRole(
					interaction.guild_id!,
					colorName,
					roleColors[colorName as keyof typeof roleColors].colorValue,
				);
				pause(0.1);
			}

			//TODO figure out if this completely overwrites the entire doc
			await setDoc(doc(collection(db, "guilds"), interaction.guild_id!), { roles: roleNameToId });
			rolesCache.set(interaction.guild_id!, roleNameToId as RolesField);
		} else {
			const rolesField = (await guildDoc.get("roles")) as RolesField;
			rolesCache.set(interaction.guild_id!, rolesField);
		}

		menuOptions = constructMenuOptionsFromCachedValue(interaction.guild_id!);
	}

	if (!deferred) {
		const response: APIInteractionResponseChannelMessageWithSource = {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: "Choose a role:",
				components: [
					{
						type: ComponentType.ActionRow,
						components: [
							{
								type: ComponentType.SelectMenu,
								custom_id: "role_menu",
								options: menuOptions,
							},
						],
					},
				],
			},
		};

		return response;
	} else {
		await axios({
			method: "PATCH",
			url: `${endpoint}/webhooks/${process.env.CLIENT_ID}/${interaction.token}/messages/@original`,
			data: {
				content: "Choose a role:",
				components: [
					{
						type: ComponentType.ActionRow,
						components: [
							{
								type: ComponentType.SelectMenu,
								custom_id: "role_menu",
								options: menuOptions,
							},
						],
					},
				],
			},
		});

		return;
	}
};
