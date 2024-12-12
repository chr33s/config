/** @type {import("prettier").Config} */
export default {
	overrides: [
		{
			files: "*.svg",
			options: {
				parser: "html",
			},
		},
	],
	plugins: ["prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
	tailwindFunctions: ["classNameMerge", "clsx", "twMerge"],
};
