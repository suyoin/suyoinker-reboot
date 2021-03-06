import { APIMessageComponentDMInteraction, APIMessageComponentGuildInteraction, APIMessageComponentInteraction } from './_interactions/messageComponents';
import { APIApplicationCommandDMInteraction, APIApplicationCommandGuildInteraction, APIApplicationCommandInteraction } from './_interactions/slashCommands';
export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/responses';
export * from './_interactions/slashCommands';
export declare type APIInteraction = APIApplicationCommandInteraction | APIMessageComponentInteraction;
export declare type APIDMInteraction = APIApplicationCommandDMInteraction | APIMessageComponentDMInteraction;
export declare type APIGuildInteraction = APIApplicationCommandGuildInteraction | APIMessageComponentGuildInteraction;
//# sourceMappingURL=interactions.d.ts.map