import { APIInteraction, InteractionResponseType, InteractionType } from "discord-api-types/v9";
import { readdirSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import parseBody from "../../util/parseBody";
import verifyInteraction from "../../util/verifyInteraction";

const { PUBLIC_KEY } = process.env;

const commandFiles = readdirSync(join(__dirname, "..", "commands")).filter((file) => {
	return !file.startsWith("commandDefinitions") && file.endsWith(".ts");
});

const commands = new Map<string, CommandExport>();
commandFiles.forEach((file) => {
	commands.set(file, require(`../commands/${file}`));
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const parseBodyResult = await parseBody(req);
	if (!parseBodyResult) {
		res.status(400).end("[interaction]: Parse body failed");
		return;
	}

	const { parsedBody, rawBody } = parseBodyResult;

	const interaction = parsedBody as APIInteraction;
	if (!interaction.data) {
		res.status(400).end("[interaction]: Interaction body is invalid");
		return;
	}

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

	if (interaction.type === InteractionType.ApplicationCommand) {
		if (!commands.has(interaction.data.name)) {
			res.status(400).end("[interaction]: Command does not exist");
			return;
		}

		const commandResponse = await commands.get(interaction.data.name)!.execute(interaction);
		res.status(200);
		if (commandResponse) {
			res.send(commandResponse);
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
	},
};