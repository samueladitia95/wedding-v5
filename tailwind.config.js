import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				"mj-button-disabled": "#948C83",
				"mj-button-disabled-text": "#716969",
				"mj-black": "#272727",
				"mj-gray": "#4C4C4C",
				"mj-beige": "#E8E5DE",
				"mj-dark-sand": "#988B7D",
				"mj-medium-sand": "#A5998A",
				"mj-sand": "#B6ACA0",
				"mj-sand2": "#A5998A",
				"mj-brown": "#574735",
				"mj-light-brown": "#90816F",
				"mj-light-brown2": "#A18168",
				"mj-medium-brown": "#7B6954",
				"mj-dark-brown": "#594F47",
				"mj-error": "#D81515",
			},
			fontFamily: {
				gordita: ["gordita", ...defaultTheme.fontFamily.sans],
				timesNewRoman: ["timesNewRoman", ...defaultTheme.fontFamily.sans] 
			}
		}
	},
	plugins: []
};
