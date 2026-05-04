import Link from "next/link";

interface AnnouncementCardProps {
	title: string;
	date: string;
	excerpt: string;
	category: string;
	link?: string;
}

// Component for displaying announcement/blog cards
export default function AnnouncementCard({
	title,
	date,
	excerpt,
	category,
	link = "#",
}: AnnouncementCardProps) {
	return (
		<article className="card">
			<div className="p-6">
				{/* Category Badge */}
				<div className="mb-3">
					<span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 dark:text-primary-300 dark:bg-primary-900/40 rounded-full">
						{category}
					</span>
				</div>

				{/* Title */}
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
					<Link href={link}>{title}</Link>
				</h3>

				{/* Date */}
				<time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
					{date}
				</time>

				{/* Excerpt */}
				<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
					{excerpt}
				</p>

				{/* Read More Link */}
				<Link
					href={link}
					className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm group">
					查看详情
					<svg
						className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
				</Link>
			</div>
		</article>
	);
}
