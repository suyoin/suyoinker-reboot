require("dotenv").config();

const { getCommands } = require("./index");
const { endpoint } = require("../constant");
(async () => {
	let existingGlobalCommands = await getCommands(
		`${endpoint}/applications/${process.env.CLIENT_ID}/guilds/511732563761561613/commands`,
	);

	existingGlobalCommands.forEach(async (existingDefinition) => {
		console.log(existingDefinition.name);
	});
})();
