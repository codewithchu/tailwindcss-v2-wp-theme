const colors = require('tailwindcss/colors');
module.exports = {
	purge: {
		mode: 'layers',
		content: ['./*.php', './inc/**/*.php', './template-parts/**/*.php', './assets/**/*.js'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
