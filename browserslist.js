/** @type {import("eslint").Linter.Config} */
export default {
	production: ["> 1%", "not dead"],
	modern: ["last 1 version"],
	ssr: ["node 20"],
};
