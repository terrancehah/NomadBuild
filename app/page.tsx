import Hero from "@/components/hero";
import CourseCard from "@/components/course-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import AnnouncementCard from "@/components/announcement-card";
import ScrollFade from "@/components/scroll-fade";
import Link from "next/link";
import Image from "next/image";
import {
	BookOpen,
	Target,
	Trophy,
	Sun,
	GraduationCap,
	Lightbulb,
	Users,
} from "lucide-react";

// EASY CUSTOMIZATION: 更新为实际开设的课程 (对应育人教育学院的课程体系)
const courses = [
	{
		title: "小学全科补习",
		description: "打好基础，为 UPSR 做好充分准备",
		icon: <BookOpen className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 立即报名",
		features: [
			"一年级至六年级全科",
			"国文、英文、数学、科学",
			"小班教学（最多 8 人）",
			"每月学习报告",
		],
	},
	{
		title: "PT3 全面备考",
		description: "掌握 PT3 考试格式，从容应对",
		icon: <Target className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 备考咨询",
		features: [
			"国文、英文、数学、科学、历史",
			"近年真题精讲与模拟测试",
			"考试技巧专项训练",
			"定期进度汇报",
		],
	},
	{
		title: "SPM 冲刺课程",
		description: "专注核心科目，冲刺亮眼成绩",
		icon: <Trophy className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 立即咨询",
		features: [
			"Form 4 & 5 主要科目",
			"国文、英文、高数、历史、会计",
			"历屆考题解析与预测题",
			"考前密集复习班",
		],
	},
	{
		title: "假期密集营",
		description: "善用假期，提前布局下一学期",
		icon: <Sun className="w-8 h-8 text-white" />,
		ctaLabel: "WhatsApp 假期班详情",
		features: [
			"学校假期密集班",
			"年终及期中复习",
			"弱科专项突破训练",
			"灵活报名，按科选择",
		],
	},
];

// EASY CUSTOMIZATION: 更新为最新动态 (替换为实际公告内容)
const announcements = [
	{
		title: "2025 SPM 密集班开放报名！",
		date: "2025 年 4 月 15 日",
		excerpt:
			"2025 年度 SPM 冲刺密集班即将开课，名额有限，先到先得！现在报名可享早鸟优惠，详情请 WhatsApp 查询。",
		category: "课程",
	},
	{
		title: "SPM 2024 榜首佳绩！",
		date: "2025 年 3 月 20 日",
		excerpt:
			"恭喜 SPM 2024 届学生交出亮眼成绩单！特别表扬高数取得 A+ 的石同学，以及历史全班最高 100 分的蔡同学，育人以你们为荣！",
		category: "成绩",
	},
	{
		title: "学校假期密集复习班开课",
		date: "2025 年 3 月 5 日",
		excerpt:
			"充分利用假期，育人假期班涵盖数学、科学、国英文，以互动方式突破难点。欢迎各年级学生报名。",
		category: "活动",
	},
];

export default function Home() {
	return (
		<>
			{/* 首页 Hero 横幅 */}
			<Hero
				title="想进步，补育人！"
				subtitle="扎根康乐逾 20 年 · 专业教师团队 · 紧跟最新考试格式 · 定期学习报告"
				backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop"
				height="medium"
			/>

			{/* 育人使命 — 品牌宣言，衔接 Hero 与优势介绍 */}
			<section className="py-16 md:py-20 bg-secondary-500 text-white">
				<ScrollFade>
					<div className="container-custom max-w-3xl mx-auto text-center">
						<p className="text-accent-400 font-bold text-sm tracking-[0.3em] mb-4">
							【育人使命】
						</p>
						<h2 className="text-white text-3xl md:text-4xl mb-6">
							教育人品，培育人才
						</h2>
						<p className="text-secondary-200 text-base md:text-lg leading-relaxed">
							哪怕天下所有人都看不起你的孩子，做父母的都应该眼含热泪地欣赏他，
							<br className="hidden md:block" />
							拥抱他，赞美他，为自己创造的生命感到骄傲自豪！
						</p>
					</div>
				</ScrollFade>
			</section>

			{/* 育人四大优势 — 融合品牌宣传内容与实际教学照片 */}
			<section className="section-padding surface-muted">
				<div className="container-custom">
					<ScrollFade>
						<div className="max-w-3xl mx-auto text-center mb-12">
							<h2 className="mb-6">为什么选择育人？</h2>
							<p className="text-lg text-muted max-w-[65ch] mx-auto">
								育人的小班课堂，不只是多学几道题 ——
								让每一位孩子都在最好的环境中全面成长。
							</p>
						</div>
					</ScrollFade>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* 优势 1 — 专业认证师资 (专业师资 + 个性化教导) */}
						<ScrollFade delay={0} className="flex flex-col">
							<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 flex flex-col flex-1">
								<div className="relative h-48">
									<Image
										src="/price-giving-ceremony.jpg"
										alt="育人教师荣获全国认证"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-5 flex flex-col flex-1">
									<div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center mb-3">
										<GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-300" />
									</div>
									<h3 className="font-bold text-lg mb-2">
										专业认证师资
									</h3>
									<p className="text-muted text-sm">
										育人教师荣获 MIA
										全国认可，持续参与专业培训，并根据每位学生学习情况个性化调整教学方案。
									</p>
								</div>
							</div>
						</ScrollFade>

						{/* 优势 2 — 互动课堂，即时解答 (马上解答问题 + 互动式学习 + 学习氛围更好) */}
						<ScrollFade delay={100} className="flex flex-col">
							<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 flex flex-col flex-1">
								<div className="relative h-48">
									<Image
										src="/students-raising-hands.jpg"
										alt="学生积极举手互动"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-5 flex flex-col flex-1">
									<div className="w-10 h-10 bg-accent-100 dark:bg-accent-900/40 rounded-full flex items-center justify-center mb-3">
										<Lightbulb className="w-5 h-5 text-accent-500 dark:text-accent-300" />
									</div>
									<h3 className="font-bold text-lg mb-2">
										互动课堂，即时解答
									</h3>
									<p className="text-muted text-sm">
										积极互动的课堂氛围让学习更有动力；遇到不懂的题目，当场解决，不积累问题。
									</p>
								</div>
							</div>
						</ScrollFade>

						{/* 优势 3 — 丰富活动，全人发展 (培养社交能力) */}
						<ScrollFade delay={200} className="flex flex-col">
							<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 flex flex-col flex-1">
								<div className="relative h-48">
									<Image
										src="/students-outing.jpg"
										alt="学生参与课外活动"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-5 flex flex-col flex-1">
									<div className="w-10 h-10 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center justify-center mb-3">
										<Users className="w-5 h-5 text-sky-600 dark:text-sky-300" />
									</div>
									<h3 className="font-bold text-lg mb-2">
										丰富活动，全人发展
									</h3>
									<p className="text-muted text-sm">
										定期举办学生活动，在快乐氛围中学会与同学老师沟通，培养社交能力与团队精神。
									</p>
								</div>
							</div>
						</ScrollFade>

						{/* 优势 4 — 精益求精，亮眼成绩 (亮眼成绩 + 系统化教材) */}
						<ScrollFade delay={300} className="flex flex-col">
							<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 flex flex-col flex-1">
								<div className="relative h-48">
									<Image
										src="/teachers-attending-workshops.jpg"
										alt="教师参与专业工作坊"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-5 flex flex-col flex-1">
									<div className="w-10 h-10 bg-secondary-100 dark:bg-secondary-900/40 rounded-full flex items-center justify-center mb-3">
										<Trophy className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />
									</div>
									<h3 className="font-bold text-lg mb-2">
										精益求精，亮眼成绩
									</h3>
									<p className="text-muted text-sm">
										教师持续参与工作坊，紧跟最新考试格式，系统化备考助学生在
										SPM、PT3 中屡创佳绩。
									</p>
								</div>
							</div>
						</ScrollFade>
					</div>
				</div>
			</section>

			{/* 课程总览 */}
			<section className="section-padding">
				<div className="container-custom">
					<ScrollFade>
						<div className="text-center mb-12">
							<h2 className="mb-4">我们的课程</h2>
							<p className="text-lg text-muted max-w-2xl mx-auto">
								从小学到
								SPM，覆盖全年级全科目，为每位学生量身打造学习方案
							</p>
						</div>
					</ScrollFade>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{courses.map((course, index) => (
							<ScrollFade
								key={index}
								delay={index * 80}
								className="flex flex-col">
								<CourseCard {...course} />
							</ScrollFade>
						))}
					</div>

					<div className="text-center mt-12">
						<Link
							href="/courses"
							className="btn-primary inline-block">
							查看全部课程
						</Link>
					</div>
				</div>
			</section>

			{/* 最新动态 */}
			<section className="section-padding surface-muted">
				<div className="container-custom">
					<ScrollFade>
						<div className="text-center mb-12">
							<h2 className="mb-4">最新动态</h2>
							<p className="text-lg text-muted max-w-2xl mx-auto">
								掌握育人最新课程资讯、学生佳绩与精彩活动
							</p>
						</div>
					</ScrollFade>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{announcements.map((announcement, index) => (
							<ScrollFade key={index} delay={index * 100}>
								<AnnouncementCard {...announcement} />
							</ScrollFade>
						))}
					</div>

					<div className="text-center">
						<Link
							href="/announcements"
							className="btn-secondary inline-block">
							查看全部动态
						</Link>
					</div>
				</div>
			</section>

			{/* 学生见证 */}
			<section className="section-padding">
				<div className="container-custom">
					<ScrollFade>
						<div className="text-center mb-12">
							<h2 className="mb-4">学生与家长的话</h2>
							<p className="text-lg text-muted max-w-2xl mx-auto">
								听听他们在育人的学习体验与成绩进步
							</p>
						</div>
					</ScrollFade>

					<TestimonialCarousel />
				</div>
			</section>

			{/* 行动号召 CTA */}
			<section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
				<div className="container-custom text-center">
					<h2 className="mb-6 text-white">想进步？现在就行动！</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						加入育人教育学院，与数百位优秀学生一同成长。 立即
						WhatsApp 咨询，获取免费试课机会！
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://wa.me/60112733390?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%AF%A2%E8%82%B2%E4%BA%BA%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%82"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-accent inline-block">
							WhatsApp 立即咨询
						</a>
						<Link
							href="/contact"
							className="btn-secondary inline-block bg-white">
							联系我们
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
