/** Preserve the keys of an object literal but enforce a shape for the values */
export const TypedObjectLiteral = <TShape>() => {
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
	purple: { emojiId: "865778039928651818", colorValue: 10181046, animated: true },
	blue: { emojiId: "865778039928651818", colorValue: 3447003, animated: true },
});
