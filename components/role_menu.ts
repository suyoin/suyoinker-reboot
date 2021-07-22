import axios from "axios";
import { authorizationHeader, endpoint } from "../constant";
import {
	APIInteractionResponseUpdateMessage,
	APIMessageComponentInteraction,
	APIMessageSelectMenuInteractionData,
	InteractionResponseType,
} from "../discord-api-types/v9";

export const execute = async (interaction: APIMessageComponentInteraction) => {
	const roleId = (interaction.data as APIMessageSelectMenuInteractionData).values[0];

	await axios({
		method: "PUT",
		url: `${endpoint}/guilds/${interaction.guild_id!}/members/${interaction.member!.user.id}/roles/${roleId}`,
		headers: { Authorization: authorizationHeader },
	});

	const response: APIInteractionResponseUpdateMessage = {
		type: InteractionResponseType.UpdateMessage,
		data: interaction.message,
	};

	return response;
};
