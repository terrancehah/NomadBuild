"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

// Chinese navigation for 育人教育学院. Keep order mirroring the page structure.
const navigation = [
	{ name: "首页", href: "/" },
	{ name: "关于我们", href: "/about" },
	{ name: "课程", href: "/courses" },
	{ name: "最新动态", href: "/announcements" },
	{ name: "联系我们", href: "/contact" },
];

// WhatsApp deep-link using the centre's actual number (011-2733 3390).
// International format is +6011 2733 3390 → 60112733390 for wa.me URLs.
const whatsappHref =
	"https://wa.me/60112733390?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E9%97%AE%E8%82%B2%E4%BA%BA%E6%95%99%E8%82%B2%E5%AD%A6%E9%99%A2%E7%9A%84%E8%A1%A5%E4%B9%A0%E8%AF%BE%E7%A8%8B%E3%80%82";

export default function Header() {
	// Mobile burger state
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	// next-themes hook: reads/writes the active theme through <ThemeProvider>.
	const { theme, setTheme } = useTheme();
	// `mounted` guards against hydration mismatch — the theme value only becomes
	// meaningful after the client rehydrates localStorage. Same pattern used in
	// `travelrizz/components/landing/header.tsx`.
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	return (
		// Sticky translucent bar — `backdrop-blur` + 60% bg opacity keeps content
		// readable while scrolling. Dark variant swaps to gray-900 for contrast.
		<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/90 dark:supports-[backdrop-filter]:bg-gray-900/70 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-400">
			<nav className="container-custom px-3 md:px-4 py-3 md:py-4">
				<div className="flex items-center justify-between gap-4">
					{/* Brand lockup — circular logo + Chinese name + English subtitle. */}
					<Link
						href="/"
						className="flex items-center gap-3 shrink-0"
						aria-label="育人教育学院 首页">
						<Image
							src="/logo.png"
							alt="育人教育学院 logo"
							width={48}
							height={48}
							priority
							className="w-10 h-10 md:w-12 md:h-12 rounded-full object-contain"
						/>
						<div className="leading-tight">
							{/* font-fengyun applies 潮字社风云简体 — see globals.css @font-face. */}
							<span className="block text-2xl md:text-3xl text-secondary-500 dark:text-white font-fengyun tracking-wide">
								育人教育学院
							</span>
							<span className="hidden sm:block text-[10px] md:text-xs tracking-wider uppercase text-primary-500 dark:text-primary-300 font-semibold">
								Connaught Edu · Since 2008
							</span>
						</div>
					</Link>

					{/* Desktop navigation */}
					<div className="hidden md:flex items-center gap-6 lg:gap-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors duration-200">
								{item.name}
							</Link>
						))}
					</div>

					{/* Right cluster: theme toggle + CTA + mobile menu trigger */}
					<div className="flex items-center gap-2">
						{/* Theme toggle — only render after mount so SSR + CSR match. */}
						{mounted && (
							<button
								type="button"
								onClick={toggleTheme}
								aria-label="切换深浅色模式"
								className="relative w-10 h-10 rounded-md flex items-center justify-center bg-amber-100/80 dark:bg-gray-800 hover:bg-amber-200 dark:hover:bg-gray-700 transition-colors duration-300">
								{/* Sun is visible in light mode, Moon in dark; the pair rotates/scales. */}
								<Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
								<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-gray-200" />
								<span className="sr-only">切换深浅色模式</span>
							</button>
						)}

						{/* Desktop-only CTA */}
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden md:inline-flex btn-primary py-2.5 text-sm">
							立即咨询
						</a>

						{/* Mobile menu trigger */}
						<button
							type="button"
							className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
							onClick={() => setMobileMenuOpen((o) => !o)}
							aria-label="打开菜单"
							aria-expanded={mobileMenuOpen}>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile navigation drawer */}
				{mobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 dark:border-gray-800 pt-4">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300 font-medium py-2 transition-colors duration-200"
								onClick={() => setMobileMenuOpen(false)}>
								{item.name}
							</Link>
						))}
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="block btn-primary text-center mt-2">
							立即咨询
						</a>
					</div>
				)}
			</nav>
		</header>
	);
}
