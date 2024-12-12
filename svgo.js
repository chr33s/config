/** @type {import('svgo').Config} */
export default {
	floatPrecision: 2,
	plugins: [
		{
			name: "preset-default",
			params: {
				overrides: {
					removeViewBox: false,
				},
			},
		},
	],
};
