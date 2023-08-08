const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				orange: {
					600: "#fb6302",
				},
				gray: {
					800: "#1e1f22",
					900: "#141517",
				},
			},
			backgroundImage: {
				"gradient-orange":
					"linear-gradient(120deg, #e65c00 60%, #F9D423 100%);",
			},
			fontFamily: {
				sans: ["Aeonik", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
