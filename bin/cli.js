#!/usr/bin/env node

process.removeAllListeners("warning");

import { spawn as _spawn } from "node:child_process";
import { stat, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";

export const args = parseArgs({
	options: {
		"dry-run": {
			default: false,
			short: "d",
			type: "boolean",
		},
	},
});
const dryRun = args.values["dry-run"];

function spawn(cmd, args) {
	return new Promise((resolve, reject) => {
		const error = [];
		const stdout = [];

		const cp = _spawn(cmd, args.filter(Boolean));
		cp.stdout.on("data", (data) => {
			stdout.push(data.toString());
		});
		cp.on("error", (e) => {
			error.push(e.toString());
		});
		cp.on("close", () => {
			if (error.length) {
				reject(error.join(""));
			} else {
				resolve(stdout.join(""));
			}
		});
	});
}

await spawn(
	"npm",
	["install", "--save-dev", dryRun ? "--dry-run" : undefined, "@chr33s/config"],
	{},
);

const configs = {
	browserslist: "browserslist.js",
	eslint: "eslint.config.js",
	postcss: "postcss.config.js",
	prettier: "prettier.config.js",
	stylelint: "stylelint.config.js",
	svgo: "svgo.config.js",
	tailwind: "tailwind.config.js",
	vite: "vite.config.js",
	vitest: "vitest.config.js",
};

async function write({ file, config, template }) {
	const exists = await stat(file).then(
		() => true,
		() => false,
	);
	if (exists) {
		console.log(file, "exists");
		return;
	}

	const tpl = template.replace("{config}", config);
	if (dryRun) {
		console.log(file, tpl);
		return;
	}
	await writeFile(file, tpl);
	console.log(file, "created");
}

await Promise.all(
	Object.entries(configs).map(([config, file]) =>
		write({
			config,
			file,
			template: /* javascript */ `
import config from "@chr33s/config/{config}";
export default [...config];
			`,
		}),
	),
);

await write({
	config: "typescript",
	file: "tsconfig.json",
	template: /* json */ `{
	"extends": ["@chr33s/config/{config}"],
	"include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
}`,
});
