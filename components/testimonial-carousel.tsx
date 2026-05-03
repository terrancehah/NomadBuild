"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
	name: string;
	role: string;
	content: string;
	rating: number;
}

// EASY CUSTOMIZATION: 替换为真实学生见证（姓名及评分须获家长/学生同意）
// These are representative testimonials — swap with real ones when consent is obtained.
const testimonials: Testimonial[] = [
	{
		name: "罗同学",
		role: "SPM 2025 · 高数 E → C+",
		content:
			"以前高数一直不及格，来了育人之后老师很耐心地帮我把基础打好，慢慢进步到 C+。老师说只要跟着步骤，没有什么题目是做不到的！",
		rating: 5,
	},
	{
		name: "蔡同学家长",
		role: "SPM 历史 · 全班最高 100 分",
		content:
			"孩子升上 F4 时历史科很吃力，补了一年之后竟然拿到全班最高 100 分，真的很感谢育人的老师！每次月考之后老师都会分析错误，非常用心。",
		rating: 5,
	},
	{
		name: "石同学",
		role: "F5 国文 D → A",
		content:
			"来育人之前国文只有 D，老师教了很多作文技巧和归纳方法，最终 SPM 拿到 A。最喜欢老师会把历届考题整理好，让我知道要重点温习哪一部分。",
		rating: 5,
	},
	{
		name: "Justin 同学",
		role: "PT3 全科 · 成绩全面提升",
		content:
			"育人的老师会根据每个年级的考试格式来安排课程，每次考试前都有冲刺班帮我们复习重点。家长群每周都有功课和成绩更新，妈妈很放心！",
		rating: 5,
	},
];

export default function TestimonialCarousel() {
	// embla-carousel-react powers this — same library used by shadcn/ui's Carousel.
	// loop: true makes it wrap around from last → first slide seamlessly.
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	// Auto-advance every 5 seconds; embla handles the actual slide animation.
	useEffect(() => {
		if (!emblaApi) return;
		const timer = setInterval(() => emblaApi.scrollNext(), 5000);
		return () => clearInterval(timer);
	}, [emblaApi]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	return (
		<div className="relative max-w-4xl mx-auto">
			{/* Embla viewport — overflow:hidden clips the off-screen slides */}
			<div className="overflow-hidden" ref={emblaRef}>
				{/* Embla container — flex row holds all slides side by side */}
				<div className="flex">
					{testimonials.map((t, i) => (
						<div key={i} className="flex-[0_0_100%] min-w-0 px-8 lg:px-5 py-8 items-center my-auto">
							<div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-black/50 p-8 md:p-12 transition-colors duration-400">
								{/* Star rating */}
								<div className="flex justify-center mb-6">
									{[...Array(t.rating)].map((_, j) => (
										<svg
											key={j}
											className="w-6 h-6 text-yellow-400 fill-current"
											viewBox="0 0 20 20">
											<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
										</svg>
									))}
								</div>

								{/* Quote content */}
								<blockquote className="text-center">
									<p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic mb-6">
										&ldquo;{t.content}&rdquo;
									</p>
									<footer>
										<div className="font-semibold text-gray-900 dark:text-white text-lg">
											{t.name}
										</div>
										<div className="text-gray-600 dark:text-gray-400 text-sm">
											{t.role}
										</div>
									</footer>
								</blockquote>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Prev arrow */}
			<button
				onClick={scrollPrev}
				className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
				aria-label="上一条">
				<svg
					className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			{/* Next arrow */}
			<button
				onClick={scrollNext}
				className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
				aria-label="下一条">
				<svg
					className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
}
