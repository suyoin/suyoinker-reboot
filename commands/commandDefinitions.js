const { ApplicationCommandOptionType } = require("discord-api-types/v8");

module.exports = {
	ping: {
		name: "ping",
		description: "wake up",
	},
	poggies: {
		name: "poggies",
		description: "poggy woggy",
	},
	mrkrabs: {
		name: "mrkrabs",
		description: "oioioi",
	},
	say: {
		name: "say",
		description: "say some gamer words",
		options: [
			{
				type: ApplicationCommandOptionType.STRING,
				name: "message",
				description: "say this",
				required: true,
			},
		],
	},
	translate: {
		name: "translate",
		description: "translate a message",
		options: [
			{
				type: ApplicationCommandOptionType.STRING,
				name: "id",
				description: "message id",
				required: true,
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "to",
				description: "language to translate to",
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "from",
				description: "language to translate from",
			},
		],
	},
	embed: {
		name: "embed",
		description: "make an embed",
		options: [
			{
				type: ApplicationCommandOptionType.STRING,
				name: "title",
				description: "the title",
				required: true,
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "description",
				description: "the body",
			},
			{
				type: ApplicationCommandOptionType.USER,
				name: "author",
				description: "the author",
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "thumbnail",
				description: "the small image",
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "image",
				description: "the big image",
			},
			{
				type: ApplicationCommandOptionType.STRING,
				name: "message",
				description: "the message to go above the embed",
			},
		],
	},
	poll: {
		name: "poll",
		description: "start a poll",
		options: [
			{
				type: ApplicationCommandOptionType.STRING,
				name: "message",
				description: "the poll message",
				required: true,
			},
		],
	},
	latex: {
		name: "latex",
		description: "generate a latex image",
		options: [
			{
				type: ApplicationCommandOptionType.STRING,
				name: "string",
				description: "the latex markup",
				required: true,
			},
			{
				type: ApplicationCommandOptionType.BOOLEAN,
				name: "black",
				description: "why though",
			},
		],
	},
	search: {
		name: "search",
		description: "search for things",
		options: [
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "anime",
				description: "search for anime",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "title",
						description: "search for title",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "urban",
				description: "search for definitions",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "term",
						description: "search for term",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "tenor",
				description: "search for gif",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "query",
						description: "search query",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "track",
				description: "search for track",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "name",
						description: "track to search for",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "artist",
				description: "search for artist",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "name",
						description: "artist to search for",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "youtube",
				description: "search for a video",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "query",
						description: "the video to search for",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND_GROUP,
				name: "mc",
				description: "search minecraft stats",
				options: [
					{
						type: ApplicationCommandOptionType.SUB_COMMAND,
						name: "hypixel",
						description: "hypixel stats",
						options: [
							{
								type: ApplicationCommandOptionType.STRING,
								name: "username",
								description: "the player to search for",
								required: true,
							},
						],
					},
					{
						type: ApplicationCommandOptionType.SUB_COMMAND,
						name: "bedwars",
						description: "hypixel bedwars stats",
						options: [
							{
								type: ApplicationCommandOptionType.STRING,
								name: "username",
								description: "the player to search for",
								required: true,
							},
						],
					},
					{
						type: ApplicationCommandOptionType.SUB_COMMAND,
						name: "skyblock",
						description: "hypixel skyblock stats",
						options: [
							{
								type: ApplicationCommandOptionType.STRING,
								name: "username",
								description: "the player to search for",
								required: true,
							},
						],
					},
				],
			},
		],
	},
	image: {
		name: "image",
		description: "edit image",
		options: [
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "caption",
				description: "caption an image",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id or image url",
						required: true,
					},
					{
						type: ApplicationCommandOptionType.STRING,
						name: "text",
						description: "the text",
						required: true,
					},
					{
						type: ApplicationCommandOptionType.BOOLEAN,
						name: "overlay",
						description: "overlay onto image",
					},
					{
						type: ApplicationCommandOptionType.STRING,
						name: "position",
						description: "the position",
						choices: [
							{
								name: "top",
								value: "top",
							},
							{
								name: "center",
								value: "center",
							},
							{
								name: "bottom",
								value: "bottom",
							},
						],
					},
					{
						type: ApplicationCommandOptionType.STRING,
						name: "textcolor",
						description: "6 character hex color code",
					},
					{
						type: ApplicationCommandOptionType.STRING,
						name: "background",
						description: "background color if overlay is false",
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "pixelate",
				description: "pixelate an image",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id",
						required: true,
					},
					{
						type: ApplicationCommandOptionType.INTEGER,
						name: "intensity",
						description: "intensity of the pixelation",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "blur",
				description: "blur an image",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id",
						required: true,
					},
					{
						type: ApplicationCommandOptionType.INTEGER,
						name: "radius",
						description: "pixel radius of the blur",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "grayscale",
				description: "no more colors",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "deepfry",
				description: "fries",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id",
						required: true,
					},
				],
			},
			{
				type: ApplicationCommandOptionType.SUB_COMMAND,
				name: "rotate",
				description: "rotate an image",
				options: [
					{
						type: ApplicationCommandOptionType.STRING,
						name: "id",
						description: "message id",
						required: true,
					},
					{
						type: ApplicationCommandOptionType.INTEGER,
						name: "angle",
						description: "rotate by this amount of degrees",
						required: true,
					},
				],
			},
		],
	},
	prune: {
		name: "prune",
		description: "prune chat",
		options: [
			{
				type: ApplicationCommandOptionType.INTEGER,
				name: "amount",
				description: "2-100",
				required: true,
			},
		],
	},
	typing: {
		name: "typing",
		description: "make the bot look like it is typing",
	},
};
