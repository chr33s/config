import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";

/** @type {import('postcss-load-config').Config} */
export default {
	plugins: [postcssImport(), tailwindcss(), autoprefixer(), postcssPresetEnv()],
	sourceMap: true,
};
