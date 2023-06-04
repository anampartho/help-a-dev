module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	globals: {
		NodeJS: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.cjs']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	rules: {
		'import/no-unresolved': 'error',
		'import/prefer-default-export': 0,
		'no-param-reassign': 0,
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
		'import/no-extraneous-dependencies': 0,
		'global-require': 0,
		'@typescript-eslint/no-var-requires': 0
	}
};
