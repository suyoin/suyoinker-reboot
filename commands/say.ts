import axios from "axios";
import {
	APIInteraction,
	ApplicationCommandInteractionDataOptionString,
	InteractionResponseType,
	InteractionType,
	MessageFlags,
} from "../discord-api-types/v9";
import { endpoint } from "../constant";

export const execute = async (interaction: APIInteraction) => {
	if (interaction.type !== InteractionType.ApplicationCommand) {
		return;
	}

	const messageOption = interaction.data!.options!.find((obj) => {
		return obj.name === "message";
	}) as ApplicationCommandInteractionDataOptionString;

	let text = messageOption.value;
	text = text.replace("@everyone", "");

	await axios({
		method: "POST",
		url: `${endpoint}/interactions/${interaction.id}/${interaction.token}/callback`,
		data: {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: "placeholder",
				flags: MessageFlags.Ephemeral,
			},
		},
	});

	await axios({
		method: "POST",
		url: `${endpoint}/webhooks/${process.env.CLIENT_ID}/${interaction.token}`,
		data: {
			content: text,
		},
	});

	await axios({
		method: "DELETE",
		url: `${endpoint}/webhooks/${process.env.CLIENT_ID}/${interaction.token}/messages/@original`,
	});
};
