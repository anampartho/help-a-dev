module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: true,
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	tabWidth: 2,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
