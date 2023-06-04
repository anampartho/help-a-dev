/** @type {import('tailwindcss').Config}*/
import path from 'path';
import SkeletonUI from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		path.join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [...SkeletonUI()]
};

module.exports = config;
