import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Vo Minh Cuong - Front-end",
	description: "CV Front-end",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
