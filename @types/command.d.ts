type CommandExport = {
	execute: (interaction: import("../discord-api-types/v9").APIApplicationCommandInteraction) => Promise<unknown>;
};

type ComponentExport = {
	execute: (interaction: import("../discord-api-types/v9").APIMessageComponentInteraction) => Promise<unknown>;
};
