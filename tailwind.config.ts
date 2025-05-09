import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config = {
	// ... other properties
	plugins: [
		// ...other plugins
		aspectRatio,
		addVariablesForColors
	]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}