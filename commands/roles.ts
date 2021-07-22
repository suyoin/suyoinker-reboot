import axios, { AxiosResponse } from "axios";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { authorizationHeader, endpoint } from "../constant";
import roleColors from "../data/roleColors";
import {
	APIInteractionResponseChannelMessageWithSource,
	APIMessageComponentInteraction,
	APIRole,
	APISelectMenuOption,
	ComponentType,
	InteractionResponseType,
} from "../discord-api-types/v9";
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

export const execute = async (interaction: APIMessageComponentInteraction) => {
	const app = await getApp();
	const db = await getDatabase(app);

	const roles = await getDoc(doc(collection(db, "guilds"), interaction.guild_id!));
	if (roles.exists()) {
		return;
	}

	const roleNameToId: { [key in keyof typeof roleColors]?: string } = {};
	for (const colorName in roleColors) {
		roleNameToId[colorName as keyof typeof roleColors] = await createGuildRole(
			interaction.guild_id!,
			colorName,
			roleColors[colorName as keyof typeof roleColors].colorValue,
		);
		pause(0.1);
	}

	setDoc(doc(collection(db, "guilds"), interaction.guild_id!), { roles: roleNameToId });

	const menuOptions: APISelectMenuOption[] = Object.keys(roleColors).map((value) => {
		return {
			label: value,
			value: roleNameToId[value as keyof typeof roleColors]!,
			emoji: { id: roleColors[value as keyof typeof roleColors].emojiId as `${bigint}`, name: value },
		};
	});

	const response: APIInteractionResponseChannelMessageWithSource = {
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
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
};