import {
	InteractionResponseType,
	APIInteraction,
	ApplicationCommandInteractionDataOptionString,
	APIInteractionResponseChannelMessageWithSource,
} from "discord-api-types/v8";

export const execute = (interaction: APIInteraction): APIInteractionResponseChannelMessageWithSource => {
	const messageOption = interaction.data!.options!.find((obj) => {
		return obj.name === "message";
	}) as ApplicationCommandInteractionDataOptionString;

	let text = messageOption.value;
	text = text.replace("@everyone", "");

	return {
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			content: text,
		},
	};
};
