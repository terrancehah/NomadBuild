import Hero from "@/components/hero";
import CourseCard from "@/components/course-card";
import { Metadata } from "next";
import {
	BookOpen,
	BookMarked,
	Target,
	Trophy,
	Layers,
	Sun,
} from "lucide-react";

export const metadata: Metadata = {
	title: "课程总览 — 育人教育学院",
	description:
		"育人教育学院提供小学至 SPM 全科补习课程，涵盖国文、英文、数学、科学、历史等科目。",
};

// EASY CUSTOMIZATION: 更新为实际开设的课程
const allCourses = [
	{
		title: "小学低年级 (1 – 3 年级)",
		description: "打好学习基础，培养良好学习习惯",
		icon: <BookOpen className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 立即报名",

		features: [
			"国文、英文、数学",
			"趣味互动教学法",
			"培养阅读与理解能力",
			"小班教学（6 – 8 人）",
			"每周学习进度更新",
		],
	},
	{
		title: "小学高年级 (4 – 6 年级)",
		description: "为 UPSR 奠定扎实基础",
		icon: <BookMarked className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 立即报名",

		features: [
			"国文、英文、数学、科学",
			"UPSR 考试技巧训练",
			"思维能力培养",
			"定期测验与评估",
			"家长汇报会",
		],
	},
	{
		title: "PT3 全面备考 (Form 1 – 3)",
		description: "掌握 PT3 考试格式，从容应考",
		icon: <Target className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 备考咨询",

		features: [
			"国文、英文、数学、科学、历史",
			"近年真题精讲",
			"模拟测试与考试技巧",
			"每月进度报告",
			"资深 PT3 教师",
		],
	},
	{
		title: "SPM 核心科目 (Form 4 – 5)",
		description: "集中火力攻克主要考试科目",
		icon: <Trophy className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 立即咨询",

		features: [
			"国文 (BM)、英文",
			"数学、高等数学 (Add Maths)",
			"科学、物理、化学、生物",
			"密集考前复习",
			"历届 A+ 成绩佳绩",
		],
	},
	{
		title: "SPM 选修科目",
		description: "专业教师针对性辅导",
		icon: <Layers className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 专科报名",

		features: [
			"会计 (Akaun)、经济",
			"历史 (Sejarah)",
			"灵活时间安排",
			"按需开班",
			"资深专科教师",
		],
	},
	{
		title: "假期密集营",
		description: "善用假期，提前布局下一学期",
		icon: <Sun className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 假期班报名",

		features: [
			"学校假期密集复习",
			"年终及期中备考",
			"弱科专项突破",
			"趣味学习活动",
			"1 – 2 周课程",
		],
	},
];

export default function CoursesPage() {
	return (
		<>
			{/* Hero 横幅 */}
			<Hero
				title="课程总览"
				subtitle="从小学到 SPM，覆盖全年级全科目，为每位学生量身打造学习方案"
				backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop"
				height="medium"
			/>

			{/* 课程列表 */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="mb-4">选择适合的课程</h2>
						<p className="text-lg text-muted max-w-2xl mx-auto">
							育人提供多元化课程，满足各年级学生的需求。
							所有课程均采用小班教学、资深教师授课，成绩有目共睹。
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{allCourses.map((course, index) => (
							<CourseCard key={index} {...course} />
						))}
					</div>
				</div>
			</section>

			{/* 所有课程共同特色 */}
			<section className="section-padding surface-muted">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="mb-4">所有课程共同特色</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">系统化教材</h4>
								<p className="text-muted text-sm">
									紧跟最新教学大纲的笔记、练习与历届真题
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">定期测验</h4>
								<p className="text-muted text-sm">
									每月测试与进度追踪，及时发现弱科
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">小班教学</h4>
								<p className="text-muted text-sm">
									每班最多 8 – 10 人，确保个性化关注
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">灵活时间</h4>
								<p className="text-muted text-sm">
									提供多个时段选择，含周六班
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">资深教师</h4>
								<p className="text-muted text-sm">
									全职教师团队，丰富教学经验与专科知识
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
								<svg
									className="w-6 h-6 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
									/>
								</svg>
							</div>
							<div>
								<h4 className="font-bold mb-2">家长沟通</h4>
								<p className="text-muted text-sm">
									定期进度汇报与家长交流，共同关注孩子成长
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
				<div className="container-custom text-center">
					<h2 className="mb-6 text-white">
						想了解哪个课程适合您的孩子？
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						立即联系我们，免费咨询课程安排与试课机会！
					</p>
					<a
						href="https://wa.me/60112733390?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%AF%A2%E8%82%B2%E4%BA%BA%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%82"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-accent inline-block">
						WhatsApp 立即咨询
					</a>
				</div>
			</section>
		</>
	);
}
