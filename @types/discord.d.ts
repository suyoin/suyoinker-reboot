/**
 * The type of interaction this request is.
 */
declare enum InteractionType {
	/**
	 * A ping.
	 */
	PING = 1,
	/**
	 * A command invocation.
	 */
	APPLICATION_COMMAND = 2,
	/**
	 * Usage of a message's component.
	 */
	MESSAGE_COMPONENT = 3,
}

/**
 * The type of response that is being sent.
 */
declare enum InteractionResponseType {
	/**
	 * Acknowledge a `PING`.
	 */
	PONG = 1,
	/**
	 * Respond with a message, showing the user's input.
	 */
	CHANNEL_MESSAGE_WITH_SOURCE = 4,
	/**
	 * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
	 */
	DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
	/**
	 * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
	 */
	DEFERRED_UPDATE_MESSAGE = 6,
	/**
	 * Edit the message the component was attached to.
	 */
	UPDATE_MESSAGE = 7,
}

/**
 * Flags that can be included in an Interaction Response.
 */
declare enum InteractionResponseFlags {
	/**
	 * Show the message only to the user that performed the interaction. Message
	 * does not persist between sessions.
	 */
	EPHEMERAL = 1 << 6,
}
