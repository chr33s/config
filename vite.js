import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import svgoConfig from "./svgo.js";

/** @type {import('vite').UserConfig} */
export default {
	clearScreen: false,
	plugins: [
		svgr({
			svgrOptions: {
				plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
				svgoConfig,
			},
		}),
		tsconfigPaths(),
	],
	server: { port: 8080 },
	test: { watch: false },
};
