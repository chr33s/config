declare module "*.css" {
	const content: Record<string, string>;
	export default content;
}

declare module "eslint-plugin-import";
declare module "eslint-plugin-jsx-a11y";
declare module "eslint-plugin-react";
declare module "eslint-plugin-react-hooks";
