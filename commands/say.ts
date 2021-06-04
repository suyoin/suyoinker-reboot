import { APIInteraction, ApplicationCommandInteractionDataOptionString } from "discord-api-types";
const { APIInteractionResponseType, ApplicationCommandOptionType } = require("discord-api-types");

export const execute = (interaction: APIInteraction) => {
	const messageOption = interaction.data!.options!.find((obj) => {
		return obj.name === "message";
	}) as ApplicationCommandInteractionDataOptionString;

	let text = messageOption.value;
	text = text.replace("@everyone", "");

	return {
		type: APIInteractionResponseType.ChannelMessageWithSource,
		data: {
			content: text,
		},
	};
};
