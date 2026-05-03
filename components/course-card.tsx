import { type ReactNode } from "react";

interface CourseCardProps {
	title: string;
	description: string;
	// Accepts any Lucide icon (or other JSX) so callers control the icon visually.
	icon: ReactNode;
	features: string[];
	// Optional per-card CTA label; defaults to a generic enquiry label.
	ctaLabel?: string;
}

// EASY CUSTOMIZATION: Update course cards with your actual programmes
export default function CourseCard({
	title,
	description,
	icon,
	features,
	ctaLabel = "WhatsApp 咨询",
}: CourseCardProps) {
	// Pre-fill the WhatsApp message with the specific course name so parents
	// can enquire directly without typing. No redundant /contact redirect needed.
	const waHref = `https://wa.me/60112733390?text=${encodeURIComponent(`您好，我想了解【${title}】课程的详情，请问还有空位吗？`)}`;

	return (
		<div className="card group">
			<div className="p-6 md:p-8">
				{/* Icon — renders any Lucide SVG inside the gradient pill */}
				<div className="mb-6 flex justify-center">
					<div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
						{icon}
					</div>
				</div>

				{/* Title & Description */}
				<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
					{title}
				</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
					{description}
				</p>

				{/* Features */}
				<ul className="space-y-3 mb-6">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start">
							<svg
								className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="text-gray-700 dark:text-gray-300 text-sm">
								{feature}
							</span>
						</li>
					))}
				</ul>

				{/* WhatsApp CTA — label is customised per course via ctaLabel prop */}
				<a
					href={waHref}
					target="_blank"
					rel="noopener noreferrer"
					className="block w-full text-center btn-secondary hover:bg-primary-500 hover:text-white hover:border-primary-500">
					{ctaLabel}
				</a>
			</div>
		</div>
	);
}
