import Link from "next/link";

// Default 404 page required by Next.js app router for /_not-found route.
export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-4">页面不存在</h2>
			<p className="text-muted mb-8">您访问的页面不存在，请返回首页。</p>
			<Link href="/" className="btn-primary">
				返回首页
			</Link>
		</div>
	);
}
