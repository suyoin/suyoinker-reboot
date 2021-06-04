require("dotenv").config();

const { getCommands, deleteCommand } = require("./index");
const { endpoint } = require("../constant");
(async () => {
	let existingGlobalCommands = await getCommands(
		`${endpoint}/applications/${process.env.CLIENT_ID}/guilds/762384147544801311/commands`,
	);

	existingGlobalCommands.forEach(async (existingDefinition) => {
		await deleteCommand(
			existingDefinition.id,
			`${endpoint}/applications/${process.env.CLIENT_ID}/guilds/762384147544801311/commands`,
			existingDefinition,
		);

		console.log(`| delete global ${existingDefinition.name} ✔ |`);
	});
})();
