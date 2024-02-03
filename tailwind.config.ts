import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				1: "0px 4px 10px rgba(0,0,0,0.15)",
				2: "0px 1px 3px 0px rgba(0, 0, 0, 0.20);",
				3: "0px 2px 0px 0px rgba(0, 0, 0, 0.25)",
				4: "2px 2px 8px 0px rgba(14, 52, 148, 0.20);",
				5: "0px 4px 10px 0px rgba(0, 0, 0, 0.15);",
				6: "0px 4px 28px 0px rgba(0, 0, 0, 0.10);",
				7: "0px 3px 10px 0px rgba(0, 0, 0, 0.20);",
				8: "0px 3px 10px 0px rgba(0, 0, 0, 0.05), 0px 10px 50px 0px rgba(0, 0, 0, 0.06);",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				dark: "#333333",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				third: {
					DEFAULT: "hsl(var(--third))",
					foreground: "hsl(var(--third-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			fontSize: {
				10: "10px",
				12: "12px",
				14: "14px",
				16: "16px",
				18: "18px",
				20: "20px",
				22: "22px",
				24: "24px",
				26: "26px",
				28: "28px",
				30: "30px",
				32: "32px",
				34: "34px",
				36: "36px",
				38: "38px",
				40: "40px",
				44: "44px",
				48: "48px",
				56: "56px",
				64: "64px",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [],
};
export default config;
