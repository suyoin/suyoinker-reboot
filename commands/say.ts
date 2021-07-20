import {
	APIInteraction,
	ApplicationCommandInteractionDataOptionString,
	InteractionResponseType,
	InteractionType,
} from "discord-api-types";

export const execute = (interaction: APIInteraction) => {
	if (interaction.type !== InteractionType.ApplicationCommand) {
		return;
	}

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
