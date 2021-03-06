import type { Snowflake } from '../../globals';
export * from '../common';
export * from './auditLog';
export * from './channel';
export * from './emoji';
export * from './gateway';
export * from './guild';
export * from './interactions';
export * from './invite';
export * from './oauth2';
export * from './stageInstance';
export * from './sticker';
export * from './template';
export * from './user';
export * from './voice';
export * from './webhook';
export declare const APIVersion = "8";
export declare const Routes: {
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/audit-logs`
     */
    guildAuditLog(guildID: Snowflake): `/guilds/${bigint}/audit-logs`;
    /**
     * Route for:
     * - GET    `/channels/{channel.id}`
     * - PATCH  `/channels/{channel.id}`
     * - DELETE `/channels/{channel.id}`
     */
    channel(channelID: Snowflake): `/channels/${bigint}`;
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/messages`
     * - POST `/channels/{channel.id}/messages`
     */
    channelMessages(channelID: Snowflake): `/channels/${bigint}/messages`;
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}`
     * - PATCH  `/channels/{channel.id}/messages/{message.id}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}`
     */
    channelMessage(channelID: Snowflake, messageID: Snowflake): `/channels/${bigint}/messages/${bigint}`;
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
     */
    channelMessageCrosspost(channelID: Snowflake, messageID: Snowflake): `/channels/${bigint}/messages/${bigint}/crosspost`;
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageOwnReaction(channelID: Snowflake, messageID: Snowflake, emoji: string): `/channels/${bigint}/messages/${bigint}/reactions/${string}/@me`;
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageUserReaction(channelID: Snowflake, messageID: Snowflake, emoji: string, userID: Snowflake): `/channels/${bigint}/messages/${bigint}/reactions/${string}/${bigint}`;
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageReaction(channelID: Snowflake, messageID: Snowflake, emoji: string): `/channels/${bigint}/messages/${bigint}/reactions/${string}`;
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
     */
    channelMessageAllReactions(channelID: Snowflake, messageID: Snowflake): `/channels/${bigint}/messages/${bigint}/reactions`;
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/bulk-delete`
     */
    channelBulkDelete(channelID: Snowflake): `/channels/${bigint}/messages/bulk-delete`;
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
     * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
     */
    channelPermission(channelID: Snowflake, overwriteID: Snowflake): `/channels/${bigint}/permissions/${bigint}`;
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/invites`
     * - POST `/channels/{channel.id}/invites`
     */
    channelInvites(channelID: Snowflake): `/channels/${bigint}/invites`;
    /**
     * Route for:
     * - POST `/channels/{channel.id}/followers`
     */
    channelFollowers(channelID: Snowflake): `/channels/${bigint}/followers`;
    /**
     * Route for:
     * - POST `/channels/{channel.id}/typing`
     */
    channelTyping(channelID: Snowflake): `/channels/${bigint}/typing`;
    /**
     * Route for:
     * - GET `/channels/{channel.id}/pins`
     */
    channelPins(channelID: Snowflake): `/channels/${bigint}/pins`;
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/pins/{message.id}`
     * - DELETE `/channels/{channel.id}/pins/{message.id}`
     */
    channelPin(channelID: Snowflake, messageID: Snowflake): `/channels/${bigint}/pins/${bigint}`;
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/recipients/{user.id}`
     * - DELETE `/channels/{channel.id}/recipients/{user.id}`
     */
    channelRecipient(channelID: Snowflake, userID: Snowflake): `/channels/${bigint}/recipients/${bigint}`;
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/emojis`
     * - POST `/guilds/{guild.id}/emojis`
     */
    guildEmojis(guildID: Snowflake): `/guilds/${bigint}/emojis`;
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
     * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
     * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
     */
    guildEmoji(guildID: Snowflake, emojiID: Snowflake): `/guilds/${bigint}/emojis/${bigint}`;
    /**
     * Route for:
     * - POST `/guilds`
     */
    guilds(): "/guilds";
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}`
     * - PATCH  `/guilds/{guild.id}`
     * - DELETE `/guilds/{guild.id}`
     */
    guild(guildID: Snowflake): `/guilds/${bigint}`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/preview`
     */
    guildPreview(guildID: Snowflake): `/guilds/${bigint}/preview`;
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/channels`
     * - POST  `/guilds/{guild.id}/channels`
     * - PATCH `/guilds/{guild.id}/channels`
     */
    guildChannels(guildID: Snowflake): `/guilds/${bigint}/channels`;
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/members/{user.id}`
     * - PUT    `/guilds/{guild.id}/members/{user.id}`
     * - PATCH  `/guilds/{guild.id}/members/{user.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}`
     */
    guildMember(guildID: Snowflake, userID: Snowflake): `/guilds/${bigint}/members/${bigint}`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members`
     */
    guildMembers(guildID: Snowflake): `/guilds/${bigint}/members`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members/search`
     */
    guildMembersSearch(guildID: Snowflake): `/guilds/${bigint}/members/search`;
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/members/@me/nick`
     */
    guildCurrentMemberNickname(guildID: Snowflake): `/guilds/${bigint}/members/@me/nick`;
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     */
    guildMemberRole(guildID: Snowflake, memberID: Snowflake, roleID: Snowflake): `/guilds/${bigint}/members/${bigint}/roles/${bigint}`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/bans`
     */
    guildBans(guildID: Snowflake): `/guilds/${bigint}/bans`;
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/bans/{user.id}`
     * - PUT    `/guilds/{guild.id}/bans/{user.id}`
     * - DELETE `/guilds/{guild.id}/bans/{user.id}`
     */
    guildBan(guildID: Snowflake, userID: Snowflake): `/guilds/${bigint}/bans/${bigint}`;
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/roles`
     * - POST  `/guilds/{guild.id}/roles`
     * - PATCH `/guilds/{guild.id}/roles`
     */
    guildRoles(guildID: Snowflake): `/guilds/${bigint}/roles`;
    /**
     * Route for:
     * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/roles/{role.id}`
     */
    guildRole(guildID: Snowflake, roleID: Snowflake): `/guilds/${bigint}/roles/${bigint}`;
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/prune`
     * - POST `/guilds/{guild.id}/prune`
     */
    guildPrune(guildID: Snowflake): `/guilds/${bigint}/prune`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/regions`
     */
    guildVoiceRegions(guildID: Snowflake): `/guilds/${bigint}/regions`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/invites`
     */
    guildInvites(guildID: Snowflake): `/guilds/${bigint}/invites`;
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/integrations`
     */
    guildIntegrations(guildID: Snowflake): `/guilds/${bigint}/integrations`;
    /**
     * Route for:
     * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
     */
    guildIntegration(guildID: Snowflake, integrationID: Snowflake): `/guilds/${bigint}/integrations/${bigint}`;
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/widget`
     * - PATCH `/guilds/{guild.id}/widget`
     */
    guildWidgetSettings(guildID: Snowflake): `/guilds/${bigint}/widget`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.json`
     */
    guildWidgetJSON(guildID: Snowflake): `/guilds/${bigint}/widget.json`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/vanity-url`
     */
    guildVanityUrl(guildID: Snowflake): `/guilds/${bigint}/vanity-url`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.png`
     */
    guildWidgetImage(guildID: Snowflake): `/guilds/${bigint}/widget.png`;
    /**
     * Route for:
     * - GET    `/invites/{invite.code}`
     * - DELETE `/invites/{invite.code}`
     */
    invite(code: string): `/invites/${string}`;
    /**
     * Route for:
     * - GET  `/guilds/templates/{template.code}`
     * - POST `/guilds/templates/{template.code}`
     */
    template(code: string): `/guilds/templates/${string}`;
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/templates`
     * - POST `/guilds/{guild.id}/templates`
     */
    guildTemplates(guildID: Snowflake): `/guilds/${bigint}/templates`;
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/templates/{template.code}`
     * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
     * - DELETE `/guilds/{guild.id}/templates/{template.code}`
     */
    guildTemplate(guildID: Snowflake, code: string): `/guilds/${bigint}/templates/${string}`;
    /**
     * Route for:
     * - GET   `/users/@me`
     * - GET   `/users/{user.id}`
     * - PATCH `/users/@me`
     *
     * @param [userID='@me'] The user ID, defaulted to `@me`
     */
    user(userID?: Snowflake | '@me'): `/users/${bigint}` | "/users/@me";
    /**
     * Route for:
     * - GET `/users/@me/guilds`
     */
    userGuilds(): "/users/@me/guilds";
    /**
     * Route for:
     * - DELETE `/users/@me/guilds/{guild.id}`
     */
    userGuild(guildID: Snowflake): `/users/@me/guilds/${bigint}`;
    /**
     * Route for:
     * - POST `/users/@me/channels`
     */
    userChannels(): "/users/@me/channels";
    /**
     * Route for:
     * - GET `/users/@me/connections`
     */
    userConnections(): "/users/@me/connections";
    /**
     * Route for:
     * - GET `/voice/regions`
     */
    voiceRegions(): "/voice/regions";
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/webhooks`
     * - POST `/channels/{channel.id}/webhooks`
     */
    channelWebhooks(channelID: Snowflake): `/channels/${bigint}/webhooks`;
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/webhooks`
     */
    guildWebhooks(guildID: Snowflake): `/guilds/${bigint}/webhooks`;
    /**
     * Route for:
     * - GET    `/webhooks/{webhook.id}`
     * - GET    `/webhooks/{webhook.id}/{webhook.token}`
     * - PATCH  `/webhooks/{webhook.id}`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
     * - DELETE `/webhooks/{webhook.id}`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
     * - POST   `/webhooks/{webhook.id}/{webhook.token}`
     *
     * - POST   `/webhooks/{application.id}/{interaction.token}`
     */
    webhook(webhookID: Snowflake, webhookToken?: string | undefined): `/webhooks/${bigint}` | `/webhooks/${bigint}/${string}`;
    /**
     * Route for:
     * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
     * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
     *
     * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
     * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
     * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
     *
     * @param [messageID='@original'] The message ID to change, defaulted to `@original`
     */
    webhookMessage(webhookID: Snowflake, webhookToken: string, messageID?: Snowflake | '@original'): `/webhooks/${bigint}/${string}/messages/${bigint}` | `/webhooks/${bigint}/${string}/messages/@original`;
    /**
     * Route for:
     * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
     * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
     */
    webhookPlatform(webhookID: Snowflake, webhookToken: string, platform: 'github' | 'slack'): `/webhooks/${bigint}/${string}/github` | `/webhooks/${bigint}/${string}/slack`;
    /**
     * Route for:
     * - GET `/gateway`
     */
    gateway(): "/gateway";
    /**
     * Route for:
     * - GET `/gateway/bot`
     */
    gatewayBot(): "/gateway/bot";
    /**
     * Route for:
     * - GET `/oauth2/applications/@me`
     */
    oauth2CurrentApplication(): "/oauth2/applications/@me";
    /**
     * Route for:
     * - GET `/oauth2/@me`
     */
    oauth2CurrentAuthorization(): "/oauth2/@me";
    /**
     * Route for:
     * - GET  `/applications/{application.id}/commands`
     * - PUT  `/applications/{application.id}/commands`
     * - POST `/applications/{application.id}/commands`
     */
    applicationCommands(applicationID: Snowflake): `/applications/${bigint}/commands`;
    /**
     * Route for:
     * - GET    `/applications/{application.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/commands/{command.id}`
     */
    applicationCommand(applicationID: Snowflake, commandID: Snowflake): `/applications/${bigint}/commands/${bigint}`;
    /**
     * Route for:
     * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
     */
    applicationGuildCommands(applicationID: Snowflake, guildID: Snowflake): `/applications/${bigint}/guilds/${bigint}/commands`;
    /**
     * Route for:
     * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     */
    applicationGuildCommand(applicationID: Snowflake, guildID: Snowflake, commandID: Snowflake): `/applications/${bigint}/guilds/${bigint}/commands/${bigint}`;
    /**
     * Route for:
     * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
     */
    interactionCallback(interactionID: Snowflake, interactionToken: string): `/interactions/${bigint}/${string}/callback`;
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/member-verification`
     * - PATCH `/guilds/{guild.id}/member-verification`
     */
    guildMemberVerification(guildID: Snowflake): `/guilds/${bigint}/member-verification`;
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/voice-states/@me`
     * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
     */
    guildVoiceState(guildID: Snowflake, userID?: Snowflake | '@me'): `/guilds/${bigint}/voice-states/${bigint}` | `/guilds/${bigint}/voice-states/@me`;
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     */
    guildApplicationCommandsPermissions(applicationID: Snowflake, guildID: Snowflake): `/applications/${bigint}/guilds/${bigint}/commands/permissions`;
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     */
    applicationCommandPermissions(applicationID: Snowflake, guildID: Snowflake, commandID: Snowflake): `/applications/${bigint}/guilds/${bigint}/commands/${bigint}/permissions`;
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/welcome-screen`
     * - PATCH `/guilds/{guild.id}/welcome-screen`
     */
    guildWelcomeScreen(guildID: Snowflake): `/guilds/${bigint}/welcome-screen`;
    /**
     * Route for:
     * - POST `/stage-instances`
     */
    stageInstances(): "/stage-instances";
    /**
     * Route for:
     * - GET `/stage-instances/{channel.id}`
     * - PATCH `/stage-instances/{channel.id}`
     * - DELETE `/stage-instances/{channel.id}`
     */
    stageInstance(channelID: Snowflake): `/stage-instances/${bigint}`;
    /**
     * Route for:
     * - GET `/stickers/{sticker.id}`
     */
    sticker(stickerID: Snowflake): `/stickers/${bigint}`;
    /**
     * Route for:
     * - GET `/sticker-packs`
     */
    nitroStickerPacks(): "/sticker-packs";
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/stickers`
     * - POST `/guilds/{guild.id}/stickers`
     */
    guildStickers(guildID: Snowflake): `/guilds/${bigint}/stickers`;
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
     * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
     * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
     */
    guildSticker(guildID: Snowflake, stickerID: Snowflake): `/guilds/${bigint}/stickers/${bigint}`;
};
export declare const RouteBases: {
    readonly api: "https://discord.com/api/v8";
    readonly cdn: "https://cdn.discordapp.com";
    readonly invite: "https://discord.gg";
    readonly template: "https://discord.new";
    readonly gift: "https://discord.gift";
};
export declare const OAuth2Routes: {
    readonly authorizationURL: "https://discord.com/api/v8/oauth2/authorize";
    readonly tokenURL: "https://discord.com/api/v8/oauth2/token";
    /**
     * See https://tools.ietf.org/html/rfc7009
     */
    readonly tokenRevocationURL: "https://discord.com/api/v8/oauth2/token/revoke";
};
export interface DiscordErrorFieldInformation {
    code: string;
    message: string;
}
export interface DiscordErrorGroupWrapper {
    _errors: DiscordError[];
}
export declare type DiscordErrorData = DiscordErrorGroupWrapper | DiscordErrorFieldInformation | {
    [k: string]: DiscordErrorData;
} | string;
/**
 * https://discord.com/developers/docs/reference#error-messages
 */
export interface DiscordError {
    code: number;
    message: string;
    errors?: DiscordErrorData;
}
//# sourceMappingURL=index.d.ts.map