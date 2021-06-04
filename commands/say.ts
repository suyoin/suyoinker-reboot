import { APIInteraction, ApplicationCommandInteractionDataOptionString } from "discord-api-types/v8";
const { APIInteractionResponseType } = require("discord-api-types/v8");

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
