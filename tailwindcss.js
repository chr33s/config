import aspectRatio from "@tailwindcss/aspect-ratio";
import plugin from "tailwindcss/plugin";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["**/*.{js,jsx,ts,tsx}"],
	plugins: [
		forms(),
		aspectRatio(),
		typography(),
		plugin(({ addUtilities, matchUtilities, theme }) => {
			addUtilities({
				".scrollbar-none::-webkit-scrollbar": {
					display: "none",
				},
				".scrollbar-none": {
					"-ms-overflow-style": "none" /* IE and Edge */,
					"scrollbar-width": "none" /* Firefox */,
				},
			});
			matchUtilities(
				{
					"animation-delay": (value) => ({
						"animation-delay": value,
					}),
				},
				{ values: theme("transitionDelay") },
			);
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") },
			);
			matchUtilities(
				{
					"text-rendering": (value) => ({
						"text-rendering": value,
					}),
				},
				{
					values: {
						auto: "auto",
						legibility: "optimizeLegibility",
						precision: "geometricPrecision",
						speed: "optimizeSpeed",
					},
				},
			);
		}),
	],
	theme: {
		extend: {
			animation: {
				spinner: "spinner 1.4s infinite ease-in-out both",
			},
			colors: {
				theme: {},
			},
			fontFamily: {
				sans: ["Helvetica Neue", "Helvetica", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				spinner: {
					"0%, 80%, 100%": { transform: "scale(0)" },
					"40%": { transform: "scale(1)" },
				},
			},
		},
	},
};
