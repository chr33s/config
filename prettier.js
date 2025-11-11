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
	plugins: ["prettier-plugin-embed", "prettier-plugin-pkg", "prettier prettier-plugin-sh", "prettier-plugin-sql", "prettier-plugin-tailwindcss"],
	tailwindFunctions: ["classNameMerge", "clsx", "twMerge"],
};
