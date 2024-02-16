import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Vo Minh Cuong - Frontend",
	description: "Vo Minh Cuong - Frontend",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	authors: [{ name: "Vo Minh Cuong" }],
	keywords: ["Front-end", "Vo Minh Cuong"],
	openGraph: {
		title: "Vo Minh Cuong - Frontend",
		description: "Vo Minh Cuong - Frontend",
		images: [
			{
				url: "./logo-vmc.png",
				width: 1315,
				height: 455,
			},
		],
		locale: "vn",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://vominhcuong-frontend.vercel.app/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{/* <div className="snowflakes -z-1" aria-hidden="true">
					<div className="snowflake">❅</div>
					<div className="snowflake">❅</div>
					<div className="snowflake">❆</div>
					<div className="snowflake">❄</div>
					<div className="snowflake">❅</div>
					<div className="snowflake">❆</div>
					<div className="snowflake">❄</div>
					<div className="snowflake">❅</div>
					<div className="snowflake">❆</div>
					<div className="snowflake">❄</div>
				</div> */}
				{children}
			</body>
		</html>
	);
}
