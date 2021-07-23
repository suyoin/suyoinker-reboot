/** Preserve the keys of an object literal but enforce a shape for the values */
const TypedObjectLiteral = <TShape>() => {
	return <T extends { [key in keyof T]: TShape }>(args: T) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return args;
	};
};

export interface ColorDefinition {
	priority?: number; //higher is better
	emojiId: string;
	colorValue: number;
	animated?: boolean;
}

export default TypedObjectLiteral<ColorDefinition>()({
	aqua: { emojiId: "865778039928651818", colorValue: 1752220, animated: true },
	green: { emojiId: "865778039928651818", colorValue: 3066993, animated: true },
	blue: { emojiId: "865778039928651818", colorValue: 3447003, animated: true },
	purple: { emojiId: "865778039928651818", colorValue: 10181046, animated: true },
	gold: { emojiId: "865778039928651818", colorValue: 15844367, animated: true },
	orange: { emojiId: "865778039928651818", colorValue: 15105570, animated: true },
	red: { emojiId: "865778039928651818", colorValue: 15158332, animated: true },
	navy: { emojiId: "865778039928651818", colorValue: 3426654, animated: true },
	yellow: { emojiId: "865778039928651818", colorValue: 16776960, animated: true },
});
