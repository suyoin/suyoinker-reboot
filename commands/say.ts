import axios from "axios";
import {
	ApplicationCommandInteractionDataOptionString,
	InteractionResponseType,
	InteractionType,
} from "discord-api-types/v9";
import { endpoint } from "../constant";

export const execute = async (interaction: LocalAPIInteraction) => {
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
				content: "",
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
