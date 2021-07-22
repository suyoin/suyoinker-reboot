import {
	APIApplicationCommandInteraction,
	APIInteractionResponseChannelMessageWithSource,
	ApplicationCommandInteractionDataOptionString,
	ButtonStyle,
	ComponentType,
	InteractionResponseType,
} from "../discord-api-types/v9";

export const execute = async (interaction: APIApplicationCommandInteraction) => {
	const pollMessage = interaction.data.options!.find((obj) => {
		return obj.name === "message";
	})! as ApplicationCommandInteractionDataOptionString;

	const response: APIInteractionResponseChannelMessageWithSource = {
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			embeds: [
				{
					title: `:bar_chart: ${pollMessage.value}`,
					color: 11410530,
					timestamp: new Date().toISOString(),
				},
			],
			components: [
				{
					type: ComponentType.ActionRow,
					components: [
						{
							type: ComponentType.Button,
							style: ButtonStyle.Success,
							label: "0",
							emoji: { id: null, name: "👍" },
							custom_id: "poll_vote:yes",
						},
						{
							type: ComponentType.Button,
							style: ButtonStyle.Danger,
							label: "0",
							emoji: { id: null, name: "👎" },
							custom_id: "poll_vote:no",
						},
					],
				},
			],
		},
	};

	return response;
};
