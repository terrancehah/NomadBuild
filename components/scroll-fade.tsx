"use client";
/* ScrollFade — fades an element up into view when it enters the viewport.
   Mirrors the IntersectionObserver / scroll-fade pattern used in terrancehah.com
   (see terrancehah.com/styles/homepage.css and the DOMContentLoaded script there).
   Once visible the element stays visible — appropriate for a business/marketing site. */
import { useEffect, useRef, type ReactNode } from "react";

interface ScrollFadeProps {
	children: ReactNode;
	className?: string;
	// Stagger delay (ms) before the transition starts; use multiples of 100 for grids.
	delay?: number;
	// Slide direction — "up" (default) keeps the original vertical fade-up.
	// "left"/"right" slides the element in horizontally from its edge.
	direction?: "up" | "left" | "right";
	// Optional inline styles forwarded to the wrapper div (e.g. clipPath).
	style?: React.CSSProperties;
}

export default function ScrollFade({
	children,
	className = "",
	delay = 0,
	direction = "up",
	style,
}: ScrollFadeProps) {
	const ref = useRef<HTMLDivElement>(null);

	// Map direction to the matching CSS class defined in globals.css.
	const directionClass =
		direction === "left"
			? "scroll-fade-left"
			: direction === "right"
				? "scroll-fade-right"
				: "scroll-fade";

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					// Add visible class then stop watching — element stays revealed.
					el.classList.add("scroll-visible");
					observer.unobserve(el);
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`${directionClass} ${className}`}
			style={{
				...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
				...style,
			}}>
			{children}
		</div>
	);
}
