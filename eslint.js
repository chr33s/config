import eslint from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import * as regexp from "eslint-plugin-regexp";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	prettier,
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		plugins: {
			react,
			"react-hooks": reactHooks,
		},
		rules: {
			...react.configs["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		...regexp.configs["flat/recommended"],
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		languageOptions: {
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
	},
);
