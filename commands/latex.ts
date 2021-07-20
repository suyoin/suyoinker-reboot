import axios from "axios";
import { InteractionResponseType, InteractionType } from "discord-api-types/v9";
import { endpoint } from "../constant";
import { createFormData } from "../util/createFormData";

export const execute = async (interaction: LocalAPIInteraction) => {
	if (interaction.type !== InteractionType.ApplicationCommand) {
		return;
	}

	const latexInput = interaction.data.options!.find((obj) => {
		return obj.name === "string";
	});

	const response = await axios({
		method: "POST",
		url: "http://latex2png.com/api/convert",
		headers: {
			"Content-type": "application/x-www-form-urlencoded",
		},
		data: {
			auth: {
				user: "guest",
				password: "guest",
			},
			latex: latexInput,
			resolution: 300,
			color: interaction.data.options!.find((obj) => {
				return obj.name === "black";
			})
				? "000000"
				: "ffffff",
		},
	});

	const imageResponse = await axios({
		method: "GET",
		url: `http://latex2png.com${response.data.url}`,
		responseType: "stream",
	});

	await axios({
		method: "POST",
		url: `${endpoint}/interactions/${interaction.id}/${interaction.token}/callback`,
		data: {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `Fetching latex for \`${latexInput}\`...`,
			},
		},
	});

	const formData = createFormData(imageResponse.data);
	await axios({
		method: "POST",
		url: `${endpoint}/webhooks/${process.env.CLIENT_ID}/${interaction.token}`,
		headers: formData.getHeaders(),
		data: formData,
	});
};
