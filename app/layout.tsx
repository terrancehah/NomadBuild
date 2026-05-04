import type { Metadata } from "next";
import { Noto_Sans_SC, ZCOOL_KuaiLe, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Chinese-first typography for 育人教育学院:
//   Noto Sans SC   → UI + body copy (supports CN + Latin)
//   ZCOOL KuaiLe   → poster-style display headlines (e.g., 想进步，补育人！)
const notoSansSC = Noto_Sans_SC({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
	variable: "--font-noto-sc",
	display: "swap",
});

const zcoolKuaiLe = ZCOOL_KuaiLe({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-zcool",
	display: "swap",
});

// Anton — bold condensed display font for dramatic teacher name reveals.
const anton = Anton({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-anton",
	display: "swap",
});

// Site-wide metadata for 育人教育学院 (Pusat Tuisyen Moden Maju / Connaught Edu).
// Chinese is primary because the site targets local CN-speaking parents.
export const metadata: Metadata = {
	// metadataBase ensures all relative URLs (images, icons) resolve to absolute
	// URLs — required by WhatsApp, Facebook, Twitter crawlers for link previews.
	metadataBase: new URL("https://preview-yuren.vercel.app"),
	title: {
		default: "育人教育学院 | 想进步，补育人！",
		template: "%s | 育人教育学院",
	},
	icons: {
		icon: "/logo.png",
		apple: "/logo.png",
	},
	description:
		"育人教育学院 (Pusat Tuisyen Moden Maju) — 自 2008 年扎根于吉隆坡康乐 Taman Connaught，提供小学、初中 PT3、高中 SPM 全科补习。资深教师团队、最新考试格式、定期学习报告，让孩子想进步，补育人！",
	keywords: [
		"育人教育学院",
		"康乐补习",
		"Taman Connaught 补习",
		"Cheras 补习中心",
		"SPM 补习",
		"PT3 补习",
		"UPSR 补习",
		"小学补习",
		"初中补习",
		"高中补习",
		"Pusat Tuisyen Moden Maju",
		"Connaught Edu",
	],
	authors: [{ name: "育人教育学院" }],
	openGraph: {
		type: "website",
		locale: "zh_CN",
		url: "https://preview-yuren.vercel.app",
		siteName: "育人教育学院",
		title: "育人教育学院 | 想进步，补育人！",
		description:
			"自 2008 年扎根康乐 Taman Connaught 的专业补习中心，提供小学至 SPM 全科补习。",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "育人教育学院",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "育人教育学院 | 想进步，补育人！",
		description: "康乐 Taman Connaught 专业补习中心，自 2008 年。",
		images: ["/logo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// `suppressHydrationWarning` is required by next-themes because the
		// provider injects the `class="dark"` attribute before React hydrates.
		<html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
			<body
				className={`${notoSansSC.variable} ${zcoolKuaiLe.variable} ${anton.variable} font-sans`}>
				{/* Class-based theming: writes `class="dark"` on <html> and persists
					the user's choice in localStorage. `enableSystem={false}` keeps
					the default deterministic so SSR output matches first paint. */}
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange={false}>
					<Header />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
