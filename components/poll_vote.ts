import {
	APIButtonComponent,
	APIInteraction,
	APIInteractionResponseUpdateMessage,
	ButtonStyle,
	ComponentType,
	InteractionResponseType,
	InteractionType,
} from "../discord-api-types/v9";
import { getValueFromCustomId } from "../util/customId";

export const execute = async (interaction: APIInteraction) => {
	if (interaction.type !== InteractionType.MessageComponent) {
		return;
	}

	const value = getValueFromCustomId(interaction.data.custom_id);

	const yesValue = interaction.message.components![0].components[0] as APIButtonComponent;
	const noValue = interaction.message.components![0].components[1] as APIButtonComponent;

	const response: APIInteractionResponseUpdateMessage = {
		type: InteractionResponseType.UpdateMessage,
		data: {
			embeds: interaction.message.embeds,
			components: [
				{
					type: ComponentType.ActionRow,
					components: [
						{
							type: ComponentType.Button,
							style: ButtonStyle.Success,
							label: `${value === "yes" ? yesValue.label! + 1 : yesValue.label}`,
							emoji: { id: null, name: "👍" },
							custom_id: "poll_vote:yes",
						},
						{
							type: ComponentType.Button,
							style: ButtonStyle.Danger,
							label: `${value === "no" ? noValue.label! + 1 : noValue.label}`,
							emoji: { id: null, name: "👎" },
							custom_id: "poll_voteL:no",
						},
					],
				},
			],
		},
	};

	return response;
};
