import {
	APIInteraction,
	APIInteractionResponseChannelMessageWithSource,
	ApplicationCommandInteractionDataOptionString,
	ButtonStyle,
	ComponentType,
	InteractionResponseType,
	InteractionType,
} from "../discord-api-types/v9";

export const execute = async (interaction: APIInteraction) => {
	if (interaction.type !== InteractionType.ApplicationCommand) {
		return;
	}

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
							emoji: { id: null, name: "👍" },
							custom_id: "poll_vote:yes",
						},
						{
							type: ComponentType.Button,
							style: ButtonStyle.Danger,
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
