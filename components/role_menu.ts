import axios from "axios";
import { collection, doc, getDoc } from "firebase/firestore";
import { authorizationHeader, endpoint } from "../constant";
import {
	APIInteractionResponseChannelMessageWithSource,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	InteractionResponseType,
	MessageFlags,
} from "../discord-api-types/v9";
import { rolesCache } from "../lib/cache";
import { getApp, getDatabase } from "../lib/firebase";

export const execute = async (interaction: APIMessageComponentInteraction) => {
	const roleId = (interaction.data as APIMessageSelectMenuInteractionData).values[0];

	//already has the role
	if (interaction.member!.roles.indexOf(roleId as `${bigint}`) !== -1) {
		const response: APIInteractionResponseChannelMessageWithSource = {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: "You already have this role!",
				flags: MessageFlags.Ephemeral,
			},
		};

		return response;
	}

	if (!rolesCache.get(interaction.guild_id!)) {
		const app = await getApp();
		const db = await getDatabase(app);
		rolesCache.set(
			interaction.guild_id!,
			(await (await getDoc(doc(collection(db, "guilds"), interaction.guild_id!))).get("roles")) as RolesField,
		);
	} else {
		console.log("roles in cache");
	}

	const roleIdMap = new Map<string, true>();
	for (const v of Object.values(rolesCache.get(interaction.guild_id!)!)) {
		roleIdMap.set(v, true);
	}

	for (const v of Object.values(interaction.member!.roles)) {
		if (roleIdMap.has(v)) {
			await axios({
				method: "DELETE",
				url: `${endpoint}/guilds/${interaction.guild_id!}/members/${interaction.member!.user.id}/roles/${v}`,
				headers: { Authorization: authorizationHeader },
			});
		}
	}

	await axios({
		method: "PUT",
		url: `${endpoint}/guilds/${interaction.guild_id!}/members/${interaction.member!.user.id}/roles/${roleId}`,
		headers: { Authorization: authorizationHeader },
	});

	const response: APIInteractionResponseChannelMessageWithSource = {
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			content: "Role grant successful.",
			flags: MessageFlags.Ephemeral,
		},
	};

	return response;
};
