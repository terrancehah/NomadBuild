import Hero from "@/components/hero";
import Image from "next/image";
import ScrollFade from "@/components/scroll-fade";
import { Metadata } from "next";
import {
	GraduationCap,
	ClipboardList,
	Users,
	BarChart2,
	Heart,
} from "lucide-react";

export const metadata: Metadata = {
	title: "关于我们 — 育人教育学院",
	description:
		"了解育人教育学院的办学理念、师资团队与 20 余年教育历程。扎根康乐，培育英才。",
};

/* Static teacher roster — defines image paths, subjects, and key highlights for
   each teacher rendered in the full-width profile rows below. */
const teachers = [
	{
		name: "Ms. Vivi",
		subjects: ["PT3 & SPM SJ", "12 年教书经验"],
		highlights: [
			"毕业于英国国立大学硕士",
			"SPM SJ 100% 及格率",
			"SPM SJ 获 A 率高达 90%",
			"独创 SEJ A+ 笔记本 & 记忆法",
		],
		image: "/ms-vivi.png",
		imageAlt: "Ms. Vivi 老师",
	},
	{
		name: "Mr. Lim",
		subjects: ["PT3 BM&BI", "SPM BM&BI", "SPM CHE&AM"],
		highlights: [
			"Supreme 系统研发者",
			"定期与资深国文考官交流",
			"Supreme Essay 负责人",
			"英文 Supreme Grammar 研发者",
		],
		image: "/mr-lim.png",
		imageAlt: "Mr. Lim 老师",
	},
	{
		name: "Ms. Grace",
		subjects: ["小学科学", "PT3 Sci", "SPM Sci & Acc"],
		highlights: [
			"独创 SC Story 记忆法",
			"推崇「边玩边学」快乐学习",
			"专研考题得分技巧",
			"被誉为 C 等生的救星",
		],
		image: "/ms-grace.png",
		imageAlt: "Ms. Grace 老师",
	},
	{
		name: "Ms. Joyce",
		subjects: ["小学华文&数学", "PT3 MM&RG", "SPM MM & EKO"],
		highlights: [
			"编写独门 EKO 攻 A 记忆法",
			"EKO 升 Grade 达人",
			"采用 Easy Math 教学",
			"育人最用心老师",
		],
		image: "/ms-joyce.png",
		imageAlt: "Ms. Joyce 老师",
	},
];

export default function AboutPage() {
	return (
		<>
			{/* Hero 横幅 */}
			<Hero
				title="关于育人教育学院"
				subtitle="创立于 2008 年 · 扎根康乐 · 专注学术辅导逾 20 年"
				backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop"
				height="medium"
				ctaText=""
			/>

			{/* 我们的故事 */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="mb-6">我们的故事</h2>
							<p className="text-muted mb-4">
								育人教育学院（Pusat Tuisyen Moden Maju）于 2008
								年在吉隆坡康乐花园创立，
								秉持"想进步，补育人"的信念，为周边学生提供高质量的课后辅导。
								从最初仅有数名学生的小课室，逐步发展成为康乐区备受家长信赖的教育品牌。
							</p>
							<p className="text-muted mb-4">
								超过 20 年来，育人帮助了数千名学生在 UPSR、PT3
								及 SPM 考试中取得优异成绩，
								不少学子更凭借出色表现升入顶尖大学。我们的成功建基于系统化教学、
								经验丰富的全职教师以及对每位学生的真心关怀。
							</p>
							<p className="text-muted">
								时至今日，育人依然与时俱进——紧跟教育部最新考试格式，
								定期举办考前密集班与假期营，让每一位学生都能得到最合适的学习支持。
							</p>
						</div>
						<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
								alt="育人教育学院课堂"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* 使命与愿景 */}
			<section className="section-padding surface-muted">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* 使命 */}
						<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg dark:shadow-black/40 transition-colors duration-400">
							<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-primary-600 dark:text-primary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4">
								我们的使命
							</h3>
							<p className="text-muted">
								以专业教学赋予学生知识、技能与自信，让他们在考试中从容发挥、成绩卓越。
								我们致力于创造一个积极、正向的学习环境，通过小班授课与个性化辅导，
								帮助每位学生发挥最大潜能。
							</p>
						</div>

						{/* 愿景 */}
						<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg dark:shadow-black/40 transition-colors duration-400">
							<div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/40 rounded-full flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-secondary-600 dark:text-secondary-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4">
								我们的愿景
							</h3>
							<p className="text-muted">
								成为马来西亚值得信赖的社区教育品牌，以卓越的教学品质、
								创新的教学方法和全面的学生关怀著称。我们期望每一位从育人走出去的学生，
								都能成为自信、有能力且正面贡献社会的人才。
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 五大承诺 */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="mb-4">育人 5 大承诺</h2>
						<p className="text-lg text-muted max-w-2xl mx-auto">
							这些核心理念贯穿育人教育学院的每一堂课
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
						<div className="text-center p-6">
							<div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<GraduationCap className="w-9 h-9 text-white" />
							</div>
							<h4 className="font-bold mb-2">专业师资</h4>
							<p className="text-muted text-sm">
								全职教师团队，教学经验丰富
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<ClipboardList className="w-9 h-9 text-white" />
							</div>
							<h4 className="font-bold mb-2">最新格式</h4>
							<p className="text-muted text-sm">
								紧跟教育部最新考试格式教学
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<Users className="w-9 h-9 text-white" />
							</div>
							<h4 className="font-bold mb-2">小班教学</h4>
							<p className="text-muted text-sm">
								每班最多 8 人，确保个性化关注
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
								<BarChart2 className="w-9 h-9 text-white" />
							</div>
							<h4 className="font-bold mb-2">定期报告</h4>
							<p className="text-muted text-sm">
								每月学习报告，让家长了解进度
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<Heart className="w-9 h-9 text-white" />
							</div>
							<h4 className="font-bold mb-2">用心关怀</h4>
							<p className="text-muted text-sm">
								真心关注每位学生的成长与进步
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 教师团队 */}
			<section className="my-4 overflow-hidden">
				{/* Section header — contained width, sits above the full-bleed rows */}
				<div className="section-padding surface-muted">
					<ScrollFade>
						<div className="text-center px-6">
							<h2 className="mb-4">专业教师团队</h2>
							<p className="text-lg text-muted max-w-2xl mx-auto">
								经验丰富、用心教学的全职老师，是育人最宝贵的资产
							</p>
						</div>
					</ScrollFade>
				</div>

				{/* Teacher profile cards — each wrapped in a dark navy card.
				    Image circles sit on top (z-10), text content beside them.
				    Odd indices flip the layout so image alternates left↔right. */}
				{teachers.map((teacher, i) => {
					/* Flip even/odd rows so image alternates left↔right */
					const flip = i % 2 === 1;

					return (
						<ScrollFade
							key={teacher.name}
							direction={flip ? "left" : "right"}
							className={`mb-8 px-4 md:px-8 ${flip ? "lg:pr-[20%] lg:pl-0" : "lg:pl-[20%] lg:pr-0"}`}>
							{/* Dark navy card — wraps both the circles and text */}
							<div
								className={`teacher-card rounded-2xl flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} ${flip ? "lg:rounded-e-full lg:rounded-s-none" : "lg:rounded-s-full lg:rounded-e-none"} items-center p-6 md:p-8 gap-4`}>
								{/* Image panel — concentric circles with teacher PNG cutout.
								    z-10 keeps the circles on top of the card's ::before overlay.
								    Slides in from its own edge (left for normal, right for flipped). */}
								<ScrollFade
									direction={flip ? "right" : "left"}
									className="flex items-center justify-center relative w-64 lg:w-80 h-64 lg:h-80 bg-secondary-500 overflow-hidden rounded-full my-auto mx-auto lg:mx-0 z-10 flex-shrink-0">
									<div className="flex items-center justify-center relative w-52 lg:w-64 h-52 lg:h-64 bg-amber-400 overflow-hidden rounded-full">
										<div className="relative w-40 lg:w-48 h-40 lg:h-48 bg-slate-200 overflow-hidden rounded-full items-center py-auto mx-auto">
											{/* Teacher PNG cutout — contains the full figure, grounded at the bottom */}
											<Image
												src={teacher.image}
												alt={teacher.imageAlt}
												fill
												sizes="(max-width: 1024px) 120vw, 60vw"
												className="object-contain object-bottom scale-105 top-3"
												style={{ top: "0.75rem" }}
											/>
										</div>
									</div>
								</ScrollFade>

								{/* Text panel — dramatic name, subject pills, and key highlights.
								    z-10 sits above the card's diagonal accent overlay.
								    Slides in from the opposite edge with a short stagger delay. */}
								<ScrollFade
									direction={flip ? "left" : "right"}
									delay={200}
									className={`w-full lg:w-3/5 flex ${flip ? "lg:justify-end" : "lg:justify-start"} px-6 md:px-8 lg:px-10 py-6 z-10`}>
									<div>
										{/* Dramatic hero name — Anton italic, superhero entrance animation */}
										<h3 className="hero-name text-4xl md:text-5xl lg:text-6xl mb-4">
											{teacher.name}
										</h3>

										{/* Subject badges — styled for dark card background */}
										<div className="flex flex-wrap gap-2 mb-4">
											{teacher.subjects.map((subj) => (
												<span
													key={subj}
													className="px-3 py-1.5 text-sm font-semibold rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
													{subj}
												</span>
											))}
										</div>

										{/* Key highlight bullet list — light text for dark card */}
										<ul className="space-y-4">
											{teacher.highlights.map(
												(highlight) => (
													<li
														key={highlight}
														className="flex items-start gap-3">
														{/* Amber dot marker matching the accent circle */}
														<span className="mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
														<span className="text-gray-300 text-lg">
															{highlight}
														</span>
													</li>
												),
											)}
										</ul>
									</div>
								</ScrollFade>
							</div>
						</ScrollFade>
					);
				})}
			</section>

			{/* 数据亮点 */}
			<section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
				<div className="container-custom">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-5xl font-bold mb-2">20+</div>
							<div className="text-primary-100">年教学历程</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">3000+</div>
							<div className="text-primary-100">培育学生</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">90%</div>
							<div className="text-primary-100">成绩提升率</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">10+</div>
							<div className="text-primary-100">全职教师</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
