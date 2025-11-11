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

`prettier.config.js`

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

`tailwind.config.js`

```js
import config from "@chr33s/config/tailwindcss";

/** @type {import('tailwindcss').Config} */
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

`vitest.config.js`

```js
import config from "@chr33s/config/vitest";

/** @type {import("vitest").UserConfig} */
export default {
	...config,
};
```

## Legal

Copyright (c) 2025 chr33s. See LICENSE for further details.
