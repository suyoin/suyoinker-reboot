import type { APIInteraction } from "discord-api-types/v9";

declare global {
	type LocalAPIInteraction = APIInteraction;
}
