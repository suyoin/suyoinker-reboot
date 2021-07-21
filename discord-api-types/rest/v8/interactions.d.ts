import type { APIApplicationCommand, APIApplicationCommandPermission, APIGuildApplicationCommandPermissions, APIInteractionResponse } from '../../payloads/v8/index';
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-global-application-commands
 */
export declare type RESTGetAPIApplicationCommandsResult = APIApplicationCommand[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-global-application-command
 */
export declare type RESTGetAPIApplicationCommandResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command
 */
export declare type RESTPostAPIApplicationCommandsJSONBody = Omit<APIApplicationCommand, 'id' | 'application_id'>;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command
 */
export declare type RESTPostAPIApplicationCommandsResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-global-application-command
 */
export declare type RESTPatchAPIApplicationCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-global-application-command
 */
export declare type RESTPatchAPIApplicationCommandResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands
 */
export declare type RESTPutAPIApplicationCommandsJSONBody = RESTPostAPIApplicationCommandsJSONBody[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands
 */
export declare type RESTPutAPIApplicationCommandsResult = APIApplicationCommand[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-commands
 */
export declare type RESTGetAPIApplicationGuildCommandsResult = APIApplicationCommand[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-command
 */
export declare type RESTGetAPIApplicationGuildCommandResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-guild-application-command
 */
export declare type RESTPostAPIApplicationGuildCommandsJSONBody = RESTPostAPIApplicationCommandsJSONBody;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-guild-application-command
 */
export declare type RESTPostAPIApplicationGuildCommandsResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-guild-application-command
 */
export declare type RESTPatchAPIApplicationGuildCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-guild-application-command
 */
export declare type RESTPatchAPIApplicationGuildCommandResult = APIApplicationCommand;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands
 */
export declare type RESTPutAPIApplicationGuildCommandsJSONBody = RESTPostAPIApplicationCommandsJSONBody[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#bulk-overwrite-global-application-commands
 */
export declare type RESTPutAPIApplicationGuildCommandsResult = APIApplicationCommand[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-interaction-response
 */
export declare type RESTPostAPIInteractionCallbackJSONBody = APIInteractionResponse;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#create-interaction-response
 */
export declare type RESTPostAPIInteractionCallbackFormDataBody = {
    /**
     * JSON stringified message body
     */
    payload_json?: string;
    /**
     * The file contents
     */
    file: unknown;
} | (RESTPostAPIInteractionCallbackJSONBody & {
    /**
     * The file contents
     */
    file: unknown;
});
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-guild-application-command-permissions
 */
export declare type RESTGetAPIGuildApplicationCommandsPermissionsResult = APIGuildApplicationCommandPermissions[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#get-application-command-permissions
 */
export declare type RESTGetAPIApplicationCommandPermissionsResult = APIGuildApplicationCommandPermissions;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-application-command-permissions
 */
export interface RESTPutAPIApplicationCommandPermissionsJSONBody {
    permissions: APIApplicationCommandPermission[];
}
/**
 * https://discord.com/developers/docs/interactions/slash-commands#edit-application-command-permissions
 */
export declare type RESTPutAPIApplicationCommandPermissionsResult = APIGuildApplicationCommandPermissions;
/**
 * https://discord.com/developers/docs/interactions/slash-commands#batch-edit-application-command-permissions
 */
export declare type RESTPutAPIGuildApplicationCommandsPermissionsJSONBody = Pick<APIGuildApplicationCommandPermissions, 'id' | 'permissions'>[];
/**
 * https://discord.com/developers/docs/interactions/slash-commands#batch-edit-application-command-permissions
 */
export declare type RESTPutAPIGuildApplicationCommandsPermissionsResult = APIGuildApplicationCommandPermissions[];
//# sourceMappingURL=interactions.d.ts.map