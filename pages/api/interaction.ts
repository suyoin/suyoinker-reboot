import { APIInteraction, InteractionResponseType, InteractionType } from "../../discord-api-types/v9";
import { readdirSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import parseBody from "../../util/parseBody";
import verifyInteraction from "../../util/verifyInteraction";
import { getRootCustomId } from "../../util/customId";

const { PUBLIC_KEY } = process.env;

const commandFiles = readdirSync(path.join(process.cwd(), "commands")).filter((file) => {
	return !file.startsWith("commandDefinitions");
});

const componentFiles = readdirSync(path.join(process.cwd(), "components")).filter((file) => {
	return file;
});

const commands = new Map<string, CommandExport>();
commandFiles.forEach((file) => {
	commands.set(file.replace(".ts", ""), require(`../../commands/${file}`));
});

const components = new Map<string, ComponentExport>();
componentFiles.forEach((file) => {
	components.set(file.replace(".ts", ""), require(`../../components/${file}`));
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const parseBodyResult = await parseBody(req);
	if (!parseBodyResult) {
		res.status(400).end("[interaction]: Parse body failed");
		return;
	}

	const { parsedBody, rawBody } = parseBodyResult;

	const interaction = parsedBody as APIInteraction;
	const timestamp = (req.headers["x-signature-timestamp"] || "") as string;
	const signature = (req.headers["x-signature-ed25519"] || "") as string;

	if (!verifyInteraction(rawBody as string, signature, timestamp, PUBLIC_KEY as string)) {
		res.status(401).end("[interaction]: Invalid signature");
		return;
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	if (interaction.type === InteractionType.Ping) {
		res.status(200).send({ type: InteractionResponseType.Pong });
		return;
	}

	if (!interaction.data) {
		res.status(400).end("[interaction]: Interaction body is invalid");
		return;
	}

	if (interaction.type === InteractionType.ApplicationCommand) {
		if (!commands.has(interaction.data.name)) {
			console.log(`${interaction.data.name} command does not have a handler file.`);
			res.status(400).end("[interaction]: Command does not exist");
			return;
		}

		const commandResponse = await commands.get(interaction.data.name)!.execute(interaction);
		res.status(200);
		if (commandResponse) {
			res.send(commandResponse);
		}
	} else if (interaction.type === InteractionType.MessageComponent) {
		const id = getRootCustomId(interaction.data.custom_id);
		if (!components.has(id)) {
			console.log(`${id} component does not have a handler file.`);
			res.status(400).end("[interaction]: Component handler does not exist");
			return;
		}

		const componentResponse = await components.get(id)!.execute(interaction);
		res.status(200);
		if (componentResponse) {
			res.send(componentResponse);
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
	},
};
