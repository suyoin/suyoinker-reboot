export const getRootCustomId = (customId: string) => {
	return customId.replace(/:\w+$/, "");
};

export const getValueFromCustomId = (customId: string) => {
	return customId.replace(/^\w+:/, "");
};
