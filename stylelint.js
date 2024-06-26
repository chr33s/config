/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-prettier/recommended"],
	plugins: ["stylelint-order"],
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
				],
			},
		],
		"no-descending-specificity": null,
		"order/order": ["custom-properties", "declarations"],
		"order/properties-alphabetical-order": true,
	},
};
