/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes
 */
export declare const enum RPCErrorCodes {
    UnknownError = 1000,
    InvalidPayload = 4000,
    InvalidCommand = 4002,
    InvalidGuild = 4003,
    InvalidEvent = 4004,
    InvalidChannel = 4005,
    InvalidPermissions = 4006,
    InvalidClientID = 4007,
    InvalidOrigin = 4008,
    InvalidToken = 4009,
    InvalidUser = 4010,
    OAuth2Error = 5000,
    SelectChannelTimedOut = 5001,
    GetGuildTimedOut = 5002,
    SelectVoiceForceRequired = 5003,
    CaptureShortcutAlreadyListening = 5004
}
/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes
 */
export declare const enum RPCCloseEventCodes {
    InvalidClientID = 4000,
    InvalidOrigin = 4001,
    RateLimited = 4002,
    TokenRevoked = 4003,
    InvalidVersion = 4004,
    InvalidEncoding = 4005
}
//# sourceMappingURL=v9.d.ts.map