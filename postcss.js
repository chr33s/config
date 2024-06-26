import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import postcssPresetEnv from "postcss-preset-env";

/** @type {import('postcss-load-config').Config} */
export default {
	plugins: [postcssImport(), tailwindcss(), autoprefixer(), postcssPresetEnv()],
	sourceMap: true,
};
