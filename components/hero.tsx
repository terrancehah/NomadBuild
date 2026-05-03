import Image from "next/image";

interface HeroProps {
	title: string;
	subtitle: string;
	ctaText?: string;
	ctaLink?: string;
	backgroundImage: string;
	height?: "small" | "medium" | "large";
}

// EASY CUSTOMIZATION: 调整各页面的 Hero 横幅内容
export default function Hero({
	title,
	subtitle,
	ctaText = "立即咨询",
	ctaLink = "https://wa.me/60112733390?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%AF%A2%E8%82%B2%E4%BA%BA%E6%95%99%E8%82%B2%E5%AD%A6%E9%99%A2%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%82",
	backgroundImage,
	height = "large",
}: HeroProps) {
	const heightClasses = {
		small: "h-[40vh] min-h-[300px]",
		medium: "h-[60vh] min-h-[400px]",
		large: "h-[80vh] min-h-[500px]",
	};

	return (
		<section
			className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src={backgroundImage}
					alt="育人教育学院"
					fill
					className="object-cover"
					priority
					quality={90}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
			</div>

			{/* Content */}
			<div className="relative z-10 container-custom text-center text-white">
				<h1 className="mb-6 text-balance drop-shadow-lg">{title}</h1>
				<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance drop-shadow-md">
					{subtitle}
				</p>
				{ctaText && ctaLink && (
					<a
						href={ctaLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary inline-block text-lg">
						{ctaText}
					</a>
				)}
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 transform -translate-x-1/2 z-10 animate-bounce">
				<svg
					className="w-6 h-6 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}
