"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Routes = exports.RouteBases = exports.Routes = exports.APIVersion = void 0;
__exportStar(require("../common"), exports);
__exportStar(require("./auditLog"), exports);
__exportStar(require("./channel"), exports);
__exportStar(require("./emoji"), exports);
__exportStar(require("./gateway"), exports);
__exportStar(require("./guild"), exports);
__exportStar(require("./interactions"), exports);
__exportStar(require("./invite"), exports);
__exportStar(require("./oauth2"), exports);
__exportStar(require("./stageInstance"), exports);
__exportStar(require("./sticker"), exports);
__exportStar(require("./template"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./voice"), exports);
__exportStar(require("./webhook"), exports);
exports.APIVersion = '9';
exports.Routes = {
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/audit-logs`
     */
    guildAuditLog(guildID) {
        return `/guilds/${guildID}/audit-logs`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}`
     * - PATCH  `/channels/{channel.id}`
     * - DELETE `/channels/{channel.id}`
     */
    channel(channelID) {
        return `/channels/${channelID}`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/messages`
     * - POST `/channels/{channel.id}/messages`
     */
    channelMessages(channelID) {
        return `/channels/${channelID}/messages`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}`
     * - PATCH  `/channels/{channel.id}/messages/{message.id}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}`
     */
    channelMessage(channelID, messageID) {
        return `/channels/${channelID}/messages/${messageID}`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
     */
    channelMessageCrosspost(channelID, messageID) {
        return `/channels/${channelID}/messages/${messageID}/crosspost`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageOwnReaction(channelID, messageID, emoji) {
        return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/@me`;
    },
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageUserReaction(channelID, messageID, emoji, userID) {
        return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}/${userID}`;
    },
    /**
     * Route for:
     * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
     *
     * **Note**: You need to URL encode the emoji yourself
     */
    channelMessageReaction(channelID, messageID, emoji) {
        return `/channels/${channelID}/messages/${messageID}/reactions/${emoji}`;
    },
    /**
     * Route for:
     * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
     */
    channelMessageAllReactions(channelID, messageID) {
        return `/channels/${channelID}/messages/${messageID}/reactions`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/messages/bulk-delete`
     */
    channelBulkDelete(channelID) {
        return `/channels/${channelID}/messages/bulk-delete`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
     * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
     */
    channelPermission(channelID, overwriteID) {
        return `/channels/${channelID}/permissions/${overwriteID}`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/invites`
     * - POST `/channels/{channel.id}/invites`
     */
    channelInvites(channelID) {
        return `/channels/${channelID}/invites`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/followers`
     */
    channelFollowers(channelID) {
        return `/channels/${channelID}/followers`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/typing`
     */
    channelTyping(channelID) {
        return `/channels/${channelID}/typing`;
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/pins`
     */
    channelPins(channelID) {
        return `/channels/${channelID}/pins`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/pins/{message.id}`
     * - DELETE `/channels/{channel.id}/pins/{message.id}`
     */
    channelPin(channelID, messageID) {
        return `/channels/${channelID}/pins/${messageID}`;
    },
    /**
     * Route for:
     * - PUT    `/channels/{channel.id}/recipients/{user.id}`
     * - DELETE `/channels/{channel.id}/recipients/{user.id}`
     */
    channelRecipient(channelID, userID) {
        return `/channels/${channelID}/recipients/${userID}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/emojis`
     * - POST `/guilds/{guild.id}/emojis`
     */
    guildEmojis(guildID) {
        return `/guilds/${guildID}/emojis`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
     * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
     * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
     */
    guildEmoji(guildID, emojiID) {
        return `/guilds/${guildID}/emojis/${emojiID}`;
    },
    /**
     * Route for:
     * - POST `/guilds`
     */
    guilds() {
        return '/guilds';
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}`
     * - PATCH  `/guilds/{guild.id}`
     * - DELETE `/guilds/{guild.id}`
     */
    guild(guildID) {
        return `/guilds/${guildID}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/preview`
     */
    guildPreview(guildID) {
        return `/guilds/${guildID}/preview`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/channels`
     * - POST  `/guilds/{guild.id}/channels`
     * - PATCH `/guilds/{guild.id}/channels`
     */
    guildChannels(guildID) {
        return `/guilds/${guildID}/channels`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/members/{user.id}`
     * - PUT    `/guilds/{guild.id}/members/{user.id}`
     * - PATCH  `/guilds/{guild.id}/members/{user.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}`
     */
    guildMember(guildID, userID) {
        return `/guilds/${guildID}/members/${userID}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members`
     */
    guildMembers(guildID) {
        return `/guilds/${guildID}/members`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/members/search`
     */
    guildMembersSearch(guildID) {
        return `/guilds/${guildID}/members/search`;
    },
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/members/@me/nick`
     */
    guildCurrentMemberNickname(guildID) {
        return `/guilds/${guildID}/members/@me/nick`;
    },
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
     */
    guildMemberRole(guildID, memberID, roleID) {
        return `/guilds/${guildID}/members/${memberID}/roles/${roleID}`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/bans`
     */
    guildBans(guildID) {
        return `/guilds/${guildID}/bans`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/bans/{user.id}`
     * - PUT    `/guilds/{guild.id}/bans/{user.id}`
     * - DELETE `/guilds/{guild.id}/bans/{user.id}`
     */
    guildBan(guildID, userID) {
        return `/guilds/${guildID}/bans/${userID}`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/roles`
     * - POST  `/guilds/{guild.id}/roles`
     * - PATCH `/guilds/{guild.id}/roles`
     */
    guildRoles(guildID) {
        return `/guilds/${guildID}/roles`;
    },
    /**
     * Route for:
     * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
     * - DELETE `/guilds/{guild.id}/roles/{role.id}`
     */
    guildRole(guildID, roleID) {
        return `/guilds/${guildID}/roles/${roleID}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/prune`
     * - POST `/guilds/{guild.id}/prune`
     */
    guildPrune(guildID) {
        return `/guilds/${guildID}/prune`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/regions`
     */
    guildVoiceRegions(guildID) {
        return `/guilds/${guildID}/regions`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/invites`
     */
    guildInvites(guildID) {
        return `/guilds/${guildID}/invites`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/integrations`
     */
    guildIntegrations(guildID) {
        return `/guilds/${guildID}/integrations`;
    },
    /**
     * Route for:
     * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
     */
    guildIntegration(guildID, integrationID) {
        return `/guilds/${guildID}/integrations/${integrationID}`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/widget`
     * - PATCH `/guilds/{guild.id}/widget`
     */
    guildWidgetSettings(guildID) {
        return `/guilds/${guildID}/widget`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.json`
     */
    guildWidgetJSON(guildID) {
        return `/guilds/${guildID}/widget.json`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/vanity-url`
     */
    guildVanityUrl(guildID) {
        return `/guilds/${guildID}/vanity-url`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/widget.png`
     */
    guildWidgetImage(guildID) {
        return `/guilds/${guildID}/widget.png`;
    },
    /**
     * Route for:
     * - GET    `/invites/{invite.code}`
     * - DELETE `/invites/{invite.code}`
     */
    invite(code) {
        return `/invites/${code}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/templates/{template.code}`
     * - POST `/guilds/templates/{template.code}`
     */
    template(code) {
        return `/guilds/templates/${code}`;
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/templates`
     * - POST `/guilds/{guild.id}/templates`
     */
    guildTemplates(guildID) {
        return `/guilds/${guildID}/templates`;
    },
    /**
     * Route for:
     * - PUT    `/guilds/{guild.id}/templates/{template.code}`
     * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
     * - DELETE `/guilds/{guild.id}/templates/{template.code}`
     */
    guildTemplate(guildID, code) {
        return `/guilds/${guildID}/templates/${code}`;
    },
    /**
     * Route for:
     * - POST `/channels/{channel.id}/threads`
     * - POST `/channels/{channel.id}/messages/{message.id}/threads`
     */
    threads(parentID, messageID) {
        const parts = ['', 'channels', parentID];
        if (messageID)
            parts.push('messages', messageID);
        parts.push('threads');
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/threads/active`
     * - GET `/channels/{channel.id}/threads/archived/public`
     * - GET `/channels/{channel.id}/threads/archived/private`
     */
    channelThreads(channelID, archived) {
        const parts = ['', 'channels', channelID, 'threads'];
        if (archived)
            parts.push('archived', archived);
        else
            parts.push('active');
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET `/channels/{channel.id}/users/@me/threads/archived/prviate`
     */
    channelJoinedArhivedThreads(channelID) {
        return `/channels/${channelID}/users/@me/threads/archived/private`;
    },
    /**
     * Route for:
     * - GET    `/channels/{thread.id}/thread-members`
     * - PUT    `/channels/{thread.id}/thread-members/@me`
     * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
     * - DELETE `/channels/{thread.id}/thread-members/@me`
     * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
     */
    threadMembers(threadID, userID) {
        const parts = ['', 'channels', threadID, 'thread-members'];
        if (userID)
            parts.push(userID);
        return parts.join('/');
    },
    /**
     * Route for:
     * - GET   `/users/@me`
     * - GET   `/users/{user.id}`
     * - PATCH `/users/@me`
     *
     * @param [userID='@me'] The user ID, defaulted to `@me`
     */
    user(userID = '@me') {
        return `/users/${userID}`;
    },
    /**
     * Route for:
     * - GET `/users/@me/guilds`
     */
    userGuilds() {
        return `/users/@me/guilds`;
    },
    /**
     * Route for:
     * - DELETE `/users/@me/guilds/{guild.id}`
     */
    userGuild(guildID) {
        return `/users/@me/guilds/${guildID}`;
    },
    /**
     * Route for:
     * - POST `/users/@me/channels`
     */
    userChannels() {
        return `/users/@me/channels`;
    },
    /**
     * Route for:
     * - GET `/users/@me/connections`
     */
    userConnections() {
        return `/users/@me/connections`;
    },
    /**
     * Route for:
     * - GET `/voice/regions`
     */
    voiceRegions() {
        return `/voice/regions`;
    },
    /**
     * Route for:
     * - GET  `/channels/{channel.id}/webhooks`
     * - POST `/channels/{channel.id}/webhooks`
     */
    channelWebhooks(channelID) {
        return `/channels/${channelID}/webhooks`;
    },
    /**
     * Route for:
     * - GET `/guilds/{guild.id}/webhooks`
     */
    guildWebhooks(guildID) {
        return `/guilds/${guildID}/webhooks`;
    },
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
    webhook(webhookID, webhookToken) {
        const parts = ['', 'webhooks', webhookID];
        if (webhookToken)
            parts.push(webhookToken);
        return parts.join('/');
    },
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
    webhookMessage(webhookID, webhookToken, messageID = '@original') {
        return `/webhooks/${webhookID}/${webhookToken}/messages/${messageID}`;
    },
    /**
     * Route for:
     * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
     * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
     */
    webhookPlatform(webhookID, webhookToken, platform) {
        return `/webhooks/${webhookID}/${webhookToken}/${platform}`;
    },
    /**
     * Route for:
     * - GET `/gateway`
     */
    gateway() {
        return `/gateway`;
    },
    /**
     * Route for:
     * - GET `/gateway/bot`
     */
    gatewayBot() {
        return `/gateway/bot`;
    },
    /**
     * Route for:
     * - GET `/oauth2/applications/@me`
     */
    oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
    },
    /**
     * Route for:
     * - GET `/oauth2/@me`
     */
    oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
    },
    /**
     * Route for:
     * - GET  `/applications/{application.id}/commands`
     * - PUT  `/applications/{application.id}/commands`
     * - POST `/applications/{application.id}/commands`
     */
    applicationCommands(applicationID) {
        return `/applications/${applicationID}/commands`;
    },
    /**
     * Route for:
     * - GET    `/applications/{application.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/commands/{command.id}`
     */
    applicationCommand(applicationID, commandID) {
        return `/applications/${applicationID}/commands/${commandID}`;
    },
    /**
     * Route for:
     * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
     * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
     */
    applicationGuildCommands(applicationID, guildID) {
        return `/applications/${applicationID}/guilds/${guildID}/commands`;
    },
    /**
     * Route for:
     * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
     */
    applicationGuildCommand(applicationID, guildID, commandID) {
        return `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}`;
    },
    /**
     * Route for:
     * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
     */
    interactionCallback(interactionID, interactionToken) {
        return `/interactions/${interactionID}/${interactionToken}/callback`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/member-verification`
     * - PATCH `/guilds/{guild.id}/member-verification`
     */
    guildMemberVerification(guildID) {
        return `/guilds/${guildID}/member-verification`;
    },
    /**
     * Route for:
     * - PATCH `/guilds/{guild.id}/voice-states/@me`
     * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
     */
    guildVoiceState(guildID, userID = '@me') {
        return `/guilds/${guildID}/voice-states/${userID}`;
    },
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
     */
    guildApplicationCommandsPermissions(applicationID, guildID) {
        return `/applications/${applicationID}/guilds/${guildID}/commands/permissions`;
    },
    /**
     * Route for:
     * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
     */
    applicationCommandPermissions(applicationID, guildID, commandID) {
        return `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions`;
    },
    /**
     * Route for:
     * - GET   `/guilds/{guild.id}/welcome-screen`
     * - PATCH `/guilds/{guild.id}/welcome-screen`
     */
    guildWelcomeScreen(guildID) {
        return `/guilds/${guildID}/welcome-screen`;
    },
    /**
     * Route for:
     * - POST `/stage-instances`
     */
    stageInstances() {
        return `/stage-instances`;
    },
    /**
     * Route for:
     * - GET `/stage-instances/{channel.id}`
     * - PATCH `/stage-instances/{channel.id}`
     * - DELETE `/stage-instances/{channel.id}`
     */
    stageInstance(channelID) {
        return `/stage-instances/${channelID}`;
    },
    /**
     * Route for:
     * - GET `/stickers/{sticker.id}`
     */
    sticker(stickerID) {
        return `/stickers/${stickerID}`;
    },
    /**
     * Route for:
     * - GET `/sticker-packs`
     */
    nitroStickerPacks() {
        return '/sticker-packs';
    },
    /**
     * Route for:
     * - GET  `/guilds/{guild.id}/stickers`
     * - POST `/guilds/{guild.id}/stickers`
     */
    guildStickers(guildID) {
        return `/guilds/${guildID}/stickers`;
    },
    /**
     * Route for:
     * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
     * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
     * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
     */
    guildSticker(guildID, stickerID) {
        return `/guilds/${guildID}/stickers/${stickerID}`;
    },
};
exports.RouteBases = {
    api: `https://discord.com/api/v${exports.APIVersion}`,
    cdn: 'https://cdn.discordapp.com',
    invite: 'https://discord.gg',
    template: 'https://discord.new',
    gift: 'https://discord.gift',
};
// Freeze bases object
Object.freeze(exports.RouteBases);
exports.OAuth2Routes = {
    authorizationURL: `https://discord.com/api/v${exports.APIVersion}/oauth2/authorize`,
    tokenURL: `https://discord.com/api/v${exports.APIVersion}/oauth2/token`,
    /**
     * See https://tools.ietf.org/html/rfc7009
     */
    tokenRevocationURL: `https://discord.com/api/v${exports.APIVersion}/oauth2/token/revoke`,
};
// Freeze OAuth2 route object
Object.freeze(exports.OAuth2Routes);
//# sourceMappingURL=index.js.map