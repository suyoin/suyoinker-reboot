import { APIRole, APIUser } from '../index';
import { Permissions, Snowflake } from '../../../globals';
import { APIPartialChannel } from '../channel';
import { APIGuildMember } from '../guild';
import { APIBaseInteraction, APIDMInteractionWrapper, APIGuildInteractionWrapper } from './base';
import { InteractionType } from './responses';
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-object
 */
export interface APIApplicationCommand {
    /**
     * Unique id of the command
     */
    id: Snowflake;
    /**
     * Unique id of the parent application
     */
    application_id: Snowflake;
    /**
     * Guild id of the command, if not global
     */
    guild_id?: Snowflake;
    /**
     * 1-32 character name matching `^[\w-]{1,32}$`
     */
    name: string;
    /**
     * 1-100 character description
     */
    description: string;
    /**
     * The parameters for the command
     */
    options?: APIApplicationCommandOption[];
    /**
     * Whether the command is enabled by default when the app is added to a guild
     *
     * If missing, this property should be assumed as `true`
     */
    default_permission?: boolean;
}
interface APIApplicationCommandOptionBase {
    type: ApplicationCommandOptionType.Boolean | ApplicationCommandOptionType.User | ApplicationCommandOptionType.Channel | ApplicationCommandOptionType.Role | ApplicationCommandOptionType.Mentionable;
    name: string;
    description: string;
    default?: boolean;
    required?: boolean;
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-structure
 */
export declare type APIApplicationCommandOption = APIApplicationCommandArgumentOptions | APIApplicationCommandSubCommandOptions | APIApplicationCommandOptionBase;
/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * If the option is a `SUB_COMMAND` or `SUB_COMMAND_GROUP` type, this nested options will be the parameters
 */
export interface APIApplicationCommandSubCommandOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
    type: ApplicationCommandOptionType.SubCommand | ApplicationCommandOptionType.SubCommandGroup;
    options?: APIApplicationCommandOption[];
}
/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions`, these types cannot have an `options` array,
 * but they can have a `choices` one
 */
export interface APIApplicationCommandArgumentOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
    type: ApplicationCommandOptionType.String | ApplicationCommandOptionType.Integer;
    choices?: APIApplicationCommandOptionChoice[];
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-type
 */
export declare const enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIApplicationCommandOptionChoice {
    name: string;
    value: string | number;
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-object-interaction-structure
 */
export interface APIApplicationCommandInteractionData {
    id: Snowflake;
    name: string;
    options?: APIApplicationCommandInteractionDataOption[];
    resolved?: {
        users?: Record<Snowflake, APIUser>;
        roles?: Record<Snowflake, APIRole>;
        members?: Record<Snowflake, APIInteractionDataResolvedGuildMember>;
        channels?: Record<Snowflake, APIInteractionDataResolvedChannel>;
    };
}
/**
 * https://discord.com/developers/docs/resources/channel#channel-object
 */
export interface APIInteractionDataResolvedChannel extends Required<APIPartialChannel> {
    permissions: Permissions;
}
/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionDataResolvedGuildMember extends Omit<APIGuildMember, 'user' | 'deaf' | 'mute'> {
    permissions: Permissions;
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-object-application-command-interaction-data-option-structure
 */
export declare type APIApplicationCommandInteractionDataOption = ApplicationCommandInteractionDataOptionSubCommand | ApplicationCommandInteractionDataOptionSubCommandGroup | APIApplicationCommandInteractionDataOptionWithValues;
export interface ApplicationCommandInteractionDataOptionSubCommand {
    name: string;
    type: ApplicationCommandOptionType.SubCommand;
    options: APIApplicationCommandInteractionDataOptionWithValues[];
}
export interface ApplicationCommandInteractionDataOptionSubCommandGroup {
    name: string;
    type: ApplicationCommandOptionType.SubCommandGroup;
    options: ApplicationCommandInteractionDataOptionSubCommand[];
}
export declare type APIApplicationCommandInteractionDataOptionWithValues = ApplicationCommandInteractionDataOptionString | ApplicationCommandInteractionDataOptionRole | ApplicationCommandInteractionDataOptionChannel | ApplicationCommandInteractionDataOptionUser | ApplicationCommandInteractionDataOptionMentionable | ApplicationCommandInteractionDataOptionInteger | ApplicationCommandInteractionDataOptionBoolean;
export declare type ApplicationCommandInteractionDataOptionString = InteractionDataOptionBase<ApplicationCommandOptionType.String, string>;
export declare type ApplicationCommandInteractionDataOptionRole = InteractionDataOptionBase<ApplicationCommandOptionType.Role, Snowflake>;
export declare type ApplicationCommandInteractionDataOptionChannel = InteractionDataOptionBase<ApplicationCommandOptionType.Channel, Snowflake>;
export declare type ApplicationCommandInteractionDataOptionUser = InteractionDataOptionBase<ApplicationCommandOptionType.User, Snowflake>;
export declare type ApplicationCommandInteractionDataOptionMentionable = InteractionDataOptionBase<ApplicationCommandOptionType.Mentionable, Snowflake>;
export declare type ApplicationCommandInteractionDataOptionInteger = InteractionDataOptionBase<ApplicationCommandOptionType.Integer, number>;
export declare type ApplicationCommandInteractionDataOptionBoolean = InteractionDataOptionBase<ApplicationCommandOptionType.Boolean, boolean>;
interface InteractionDataOptionBase<T extends ApplicationCommandOptionType, D = unknown> {
    name: string;
    type: T;
    value: D;
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export interface APIGuildApplicationCommandPermissions {
    /**
     * The id of the command
     */
    id: Snowflake;
    /**
     * The id of the application the command belongs to
     */
    application_id: Snowflake;
    /**
     * The id of the guild
     */
    guild_id: Snowflake;
    /**
     * The permissions for the command in the guild
     */
    permissions: APIApplicationCommandPermission[];
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#application-command-permissions-object-application-command-permissions-structure
 */
export interface APIApplicationCommandPermission {
    /**
     * The id of the role or user
     */
    id: Snowflake;
    /**
     * Role or user
     */
    type: ApplicationCommandPermissionType;
    /**
     * `true` to allow, `false`, to disallow
     */
    permission: boolean;
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissiontype
 */
export declare const enum ApplicationCommandPermissionType {
    Role = 1,
    User = 2
}
export declare type APIApplicationCommandInteraction = APIBaseInteraction<InteractionType.ApplicationCommand, APIApplicationCommandInteractionData> & Required<Pick<APIBaseInteraction<InteractionType.ApplicationCommand, APIApplicationCommandInteractionData>, 'channel_id' | 'data'>>;
export declare type APIApplicationCommandDMInteraction = APIDMInteractionWrapper<APIApplicationCommandInteraction>;
export declare type APIApplicationCommandGuildInteraction = APIGuildInteractionWrapper<APIApplicationCommandInteraction>;
export {};
//# sourceMappingURL=slashCommands.d.ts.map