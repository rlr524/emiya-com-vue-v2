const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				cyan: colors.cyan,
				emiyablue: "#1E44A9",
				emiyablue80: "#5177DC",
				emiyagold: "#FBD77B",
				emiyablack: "#414141",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
};
