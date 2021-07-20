import FormData from "@discordjs/form-data";
import { ReadStream } from "fs";

type ReadStreamObject = {
	[key: string]: ReadStream;
};

export const createFormData = (fileStream: ReadStream | ReadStreamObject | null): FormData => {
	const formData = new FormData();

	if (fileStream) {
		if (Array.isArray(fileStream)) {
			for (const entryName in fileStream) {
				formData.append(entryName, fileStream[entryName]);
			}
		} else {
			formData.append("files", fileStream);
		}
	}

	return formData;
};
