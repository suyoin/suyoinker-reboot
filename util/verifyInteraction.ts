//https://github.com/discord/discord-interactions-js/blob/main/src/index.ts

import nacl from "tweetnacl";
const LocalTextEncoder = typeof TextEncoder === "undefined" ? require("util").TextEncoder : TextEncoder;

/**
 * The type of interaction this request is.
 */
enum InteractionType {
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
enum InteractionResponseType {
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
enum InteractionResponseFlags {
	/**
	 * Show the message only to the user that performed the interaction. Message
	 * does not persist between sessions.
	 */
	EPHEMERAL = 1 << 6,
}

/**
 * Converts different types to Uint8Array.
 *
 * @param value - Value to convert. Strings are parsed as hex.
 * @param format - Format of value. Valid options: 'hex'. Defaults to utf-8.
 * @returns Value in Uint8Array form.
 */
function valueToUint8Array(value: Uint8Array | ArrayBuffer | Buffer | string, format?: string): Uint8Array {
	if (value == null) {
		return new Uint8Array();
	}
	if (typeof value === "string") {
		if (format === "hex") {
			const matches = value.match(/.{1,2}/g);
			if (matches == null) {
				throw new Error("Value is not a valid hex string");
			}
			const hexVal = matches.map((byte: string) => parseInt(byte, 16));
			return new Uint8Array(hexVal);
		} else {
			return new LocalTextEncoder("utf-8").encode(value);
		}
	}
	try {
		if (Buffer.isBuffer(value)) {
			const arrayBuffer = value.buffer.slice(value.byteOffset, value.byteOffset + value.length);
			return new Uint8Array(value);
		}
	} catch (ex) {
		// Runtime doesn't have Buffer
	}
	if (value instanceof ArrayBuffer) {
		return new Uint8Array(value);
	}
	if (value instanceof Uint8Array) {
		return value;
	}
	throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array");
}

/**
 * Merge two arrays.
 *
 * @param arr1 - First array
 * @param arr2 - Second array
 * @returns Concatenated arrays
 */
function concatUint8Arrays(arr1: Uint8Array, arr2: Uint8Array): Uint8Array {
	const merged = new Uint8Array(arr1.length + arr2.length);
	merged.set(arr1);
	merged.set(arr2, arr1.length);
	return merged;
}

/**
 * Validates a payload from Discord against its signature and key.
 *
 * @param rawBody - The raw payload data
 * @param signature - The signature from the `X-Signature-Ed25519` header
 * @param timestamp - The timestamp from the `X-Signature-Timestamp` header
 * @param clientPublicKey - The public key from the Discord developer dashboard
 * @returns Whether or not validation was successful
 */
export default (
	body: Uint8Array | ArrayBuffer | Buffer | string,
	signature: Uint8Array | ArrayBuffer | Buffer | string,
	timestamp: Uint8Array | ArrayBuffer | Buffer | string,
	clientPublicKey: Uint8Array | ArrayBuffer | Buffer | string,
): boolean => {
	try {
		const timestampData = valueToUint8Array(timestamp);
		const bodyData = valueToUint8Array(body);
		const message = concatUint8Arrays(timestampData, bodyData);

		const signatureData = valueToUint8Array(signature, "hex");
		const publicKeyData = valueToUint8Array(clientPublicKey, "hex");
		return nacl.sign.detached.verify(message, signatureData, publicKeyData);
	} catch (ex) {
		console.error("[discord-interactions]: Invalid verifyKey parameters", ex);
		return false;
	}
};
