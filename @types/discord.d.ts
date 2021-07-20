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
