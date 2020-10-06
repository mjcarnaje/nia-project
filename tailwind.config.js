module.exports = {
	purge: [
		'src/**/*.js',
		'src/**/*.jsx',
		'src/**/*.ts',
		'src/**/*.tsx',
		'public/**/*.html',
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', 'sans-serif'],
				berkshire: ['"Berkshire\\ Swash"', 'serif'],
				montserrat: ['"Montserrat"', 'sans-serif'],
				inter: ['"Inter"', 'sans-serif'],
			},
			boxShadow: {
				bottom:
					'0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
			},
		},
	},
	variants: {},
	plugins: [],
};
