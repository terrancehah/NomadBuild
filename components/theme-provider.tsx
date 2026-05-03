"use client";

// Thin client-only wrapper around next-themes. We keep it isolated so the
// server-rendered `app/layout.tsx` stays a Server Component while the provider
// (which uses React context + localStorage) runs entirely on the client.
// Mirrors the travelrizz setup (see pages/_app.tsx → ThemeProvider).
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
