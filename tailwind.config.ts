import type { Config } from "tailwindcss";

const config: Config = {
	// Enable class-based dark mode so <html class="dark"> toggles the palette.
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Brand palette derived from 育人教育学院's social media posts.
				// primary (brand red) — headlines, frames, CTAs. 500 = #BF391F from the
				// DigitalColorMeter reading of their post frame.
				primary: {
					50: "#fef3f0",
					100: "#fde2dc",
					200: "#facabb",
					300: "#f5a38a",
					400: "#ed7a5b",
					500: "#bf391f",
					600: "#a82f19",
					700: "#8a2514",
					800: "#6b1c0f",
					900: "#4d140a",
				},
				// secondary (deep navy) — matches logo ink & body text on light bg.
				// 500 = #1F365D from the DigitalColorMeter reading of their logo.
				secondary: {
					50: "#edf1f8",
					100: "#d3dcec",
					200: "#a7b8d9",
					300: "#7b94c6",
					400: "#4f70b3",
					500: "#1f365d",
					600: "#1a2e4f",
					700: "#152541",
					800: "#101c33",
					900: "#0b1325",
				},
				// accent (bright yellow) — highlight bars behind Chinese headlines.
				accent: {
					50: "#fffbe6",
					100: "#fff6c2",
					200: "#ffed85",
					300: "#ffe147",
					400: "#ffd619",
					500: "#ffd400",
					600: "#d9b300",
					700: "#a88b00",
					800: "#7a6500",
					900: "#4d4000",
				},
				// sky (soft cyan) — callout bubbles in their posts (e.g., the turquoise
				// speech bubbles). Light-blue alias kept for backward compatibility.
				sky: {
					50: "#f0faff",
					100: "#d9f0f9",
					200: "#bee4f2",
					300: "#8dd1e6",
					400: "#5bbcd7",
					500: "#3aa0c0",
					600: "#2a7f9a",
					700: "#215f73",
					800: "#17404d",
					900: "#0d2026",
				},
				"light-blue": "#bee4f2",
				"sky-blue": "#3aa0c0",
				"brand-red": "#bf391f",
				"brand-navy": "#1f365d",
				"brand-yellow": "#ffd400",
			},
			fontFamily: {
				// Primary UI font — Noto Sans SC is the default because the site is
				// Chinese-first. It also covers Latin characters gracefully for
				// English course codes (SPM, PT3, STPM).
				sans: [
					"var(--font-noto-sc)",
					'"PingFang SC"',
					'"Microsoft YaHei"',
					"system-ui",
					"sans-serif",
				],
				// Explicit family aliases for intent-specific use.
				noto: ["var(--font-noto-sc)", "sans-serif"],
				// Display family — ZCOOL KuaiLe mimics the bold outlined headline
				// style seen across 育人's posters (e.g., 想进步，补育人！).
				zcool: ["var(--font-zcool)", '"PingFang SC"', "sans-serif"],
				// Anton — condensed display font for dramatic superhero-style teacher name reveals.
				anton: ["var(--font-anton)", "Impact", "sans-serif"],
				// 潮字社风云简体 — dramatic calligraphic display font used on the brand name.
				// Font file must be placed at /public/fonts/fengyun.woff2 (download from 潮字社官网).
				fengyun: [
					'"FengYun"',
					'"PingFang SC"',
					'"Microsoft YaHei"',
					"sans-serif",
				],
			},
			boxShadow: {
				// Soft ambient shadow that reads well in both themes.
				all: "0px 0px 5px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1)",
			},
			animation: {
				bounce: "bounce 2s infinite",
				"gradient-x": "gradient-x 2s ease-in-out infinite",
				"modal-appear": "modal-appear 0.3s ease-out",
				"slide-up": "slide-up 0.3s ease-out",
				"fade-in": "fade-in 0.6s ease-out both",
			},
			keyframes: {
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
				"gradient-x": {
					"0%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
					"100%": { "background-position": "0% 50%" },
				},
				"modal-appear": {
					"0%": { opacity: "0", transform: "scale(0.9)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				"slide-up": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(8px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			transitionDuration: {
				// Matches travelrizz's `duration-400` used in header/footer transitions.
				"400": "400ms",
			},
		},
	},
	plugins: [],
};

export default config;
