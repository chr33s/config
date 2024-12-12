# @chr33s/config

> Typescript/Javascript config

## Setup

```sh
npm install --save-dev @chr33s/config
```

## Usage

`browserslist.js`

```js
import config from "@chr33s/config/browserslist";

/** @type {import("browserslist").browserslist.Options} */
export default { ...config };
```

`eslint.config.js`

```js
import config from "@chr33s/config/eslint";

/** @type {import("eslint").Linter.Config} */
export default [...config];
```

`postcss.config.js`

```js
import config from "@chr33s/config/postcss";

/** @type {import("postcss").Config} */
export default {
	...config,
};
```

`.prettierrc.js`

```js
import config from "@chr33s/config/prettier";

/** @type {import("prettier").Options} */
export default {
	...config,
};
```

`stylelint.config.js`

```js
import config from "@chr33s/config/stylelint";

/** @type {import("stylelint").Config} */
export default {
	...config,
};
```

`svgo.config.js`

```js
import config from "@chr33s/config/svgo";

/** @type {import('svgo').Config} */
export default {
	...config,
};
```

`tsconfig.json`

```json
{
	"extends": ["@chr33s/config/typescript"],
	"include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
	"compilerOptions": {
		"paths": {
			"~/*": ["./*"]
		}
	}
}
```

`vite.config.js`

```js
import config from "@chr33s/config/vite";

/** @type {import("vite").UserConfig} */
export default {
	...config,
};
```
