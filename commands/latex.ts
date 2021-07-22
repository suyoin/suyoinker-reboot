import axios from "axios";
import {
	APIApplicationCommandInteraction,
	ApplicationCommandOptionType,
	InteractionResponseType,
	MessageFlags,
} from "../discord-api-types/v9";
import { authorizationHeader, endpoint } from "../constant";
import { createFormData } from "../util/createFormData";

export const execute = async (interaction: APIApplicationCommandInteraction) => {
	const latexInput = interaction.data.options!.find((obj) => {
		return obj.name === "string";
	})!;
	if (latexInput.type === ApplicationCommandOptionType.String) {
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
				latex: latexInput.value,
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
					content: `Fetching latex for \`${latexInput.value}\`...`,
					flags: MessageFlags.Ephemeral,
				},
			},
		});

		const formData = createFormData(imageResponse.data);
		await axios({
			method: "POST",
			url: `${endpoint}/channels/${interaction.channel_id}/messages`,
			headers: {
				"Content-Type": "application/json",
				...formData.getHeaders(),
				Authorization: authorizationHeader,
			},
			data: formData,
		});
	}
};
