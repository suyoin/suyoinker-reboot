import {
	ApplicationCommandInteractionDataOptionString,
	InteractionResponseType,
	InteractionType,
} from "discord-api-types/v9";

export const execute = (interaction: LocalAPIInteraction) => {
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
