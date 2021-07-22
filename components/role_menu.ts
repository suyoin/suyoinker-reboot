import axios from "axios";
import { authorizationHeader, endpoint } from "../constant";
import {
	APIInteractionResponseChannelMessageWithSource,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	InteractionResponseType,
	MessageFlags,
} from "../discord-api-types/v9";

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
