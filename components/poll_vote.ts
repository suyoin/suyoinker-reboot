import {
	APIButtonComponent,
	APIInteractionResponseUpdateMessage,
	APIMessageComponentInteraction,
	ButtonStyle,
	ComponentType,
	InteractionResponseType,
} from "../discord-api-types/v9";
import { getValueFromCustomId } from "../util/customId";

export const execute = async (interaction: APIMessageComponentInteraction) => {
	const value = getValueFromCustomId(interaction.data.custom_id);

	const yesValue = parseInt((interaction.message.components![0].components[0] as APIButtonComponent).label!) || 0;
	const noValue = parseInt((interaction.message.components![0].components[1] as APIButtonComponent).label!) || 0;

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
							label: `${value === "yes" ? yesValue + 1 : yesValue}`,
							emoji: { id: null, name: "👍" },
							custom_id: "poll_vote:yes",
						},
						{
							type: ComponentType.Button,
							style: ButtonStyle.Danger,
							label: `${value === "no" ? noValue + 1 : noValue}`,
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
