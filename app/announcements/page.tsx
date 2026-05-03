import Hero from "@/components/hero";
import AnnouncementCard from "@/components/announcement-card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "最新动态 — 育人教育学院",
	description: "掌握育人教育学院最新课程资讯、学生佳绩与活动动态。",
};

// EASY CUSTOMIZATION: 替换为实际公告内容
const allAnnouncements = [
	{
		title: "2025 SPM 冲刺密集班即将开课！",
		date: "2025 年 4 月 20 日",
		excerpt:
			"2025 SPM 冲刺密集班五月正式开课！涵盖国文、英文、高数、历史、会计等核心科目，每班限 10 人。4 月 30 日前报名享早鸟 15% 折扣！",
		category: "课程",
	},
	{
		title: "SPM 2024 榜首佳绩 — 恭喜育人学子！",
		date: "2025 年 4 月 15 日",
		excerpt:
			"恭喜 SPM 2024 届学生交出亮眼成绩单！特别表扬高数取得 A+ 的石同学及历史全班最高 100 分的蔡同学。育人以你们为荣！",
		category: "成绩",
	},
	{
		title: "六月学校假期密集复习班开放报名",
		date: "2025 年 4 月 10 日",
		excerpt:
			"充分利用假期！育人假期班涵盖数学、科学、国英文，以互动方式突破难点，欢迎各年级学生报名。4 月底前报名享优惠价。",
		category: "活动",
	},
	{
		title: "PT3 模拟考 — 免费开放！",
		date: "2025 年 3 月 25 日",
		excerpt:
			"育人为所有 Form 3 学生（包括非学员）举办免费 PT3 模拟考试，帮助同学了解自身水平、找出弱科。名额有限，欢迎报名！",
		category: "活动",
	},
	{
		title: "教师培训日 — 持续提升教学品质",
		date: "2025 年 3 月 20 日",
		excerpt:
			"育人教师团队刚完成最新教学法与教育科技培训工作坊。我们始终追求持续进步，为学生提供最优质的学习体验。",
		category: "资讯",
	},
	{
		title: "学生见证：从 D 到 A 的逆袭之路",
		date: "2025 年 3 月 15 日",
		excerpt:
			"石同学在 Form 4 入学时高数仅 D，经过育人系统化教学与老师耐心辅导，最终 SPM 考获 A+！来听听他的学习心得。",
		category: "成绩",
	},
	{
		title: "新学期开学注册优惠进行中",
		date: "2025 年 3 月 10 日",
		excerpt:
			"新学期新气象！即日起至本月底，新生报名两科以上可享学费优惠。名额有限，先到先得！详情请 WhatsApp 查询。",
		category: "课程",
	},
	{
		title: "家长感谢日 — 分享孩子的进步",
		date: "2025 年 3 月 5 日",
		excerpt:
			"感谢所有家长对育人的信任！我们定期举办家长交流会，与您分享孩子的学习进度与改进建议。下一场即将在四月举行。",
		category: "资讯",
	},
	{
		title: "新增 SPM 会计科补习班",
		date: "2025 年 2 月 28 日",
		excerpt:
			"应广大家长需求，育人正式开设 SPM 会计科补习班！由拥有 10 年以上教学经验的会计专业教师授课。欢迎查询报名。",
		category: "课程",
	},
];

export default function AnnouncementsPage() {
	return (
		<>
			{/* Hero 横幅 */}
			<Hero
				title="最新动态"
				subtitle="掌握育人最新课程资讯、学生佳绩与精彩活动"
				backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=1080&fit=crop"
				height="medium"
				ctaText=""
			/>

			{/* 公告列表 */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{allAnnouncements.map((announcement, index) => (
							<AnnouncementCard key={index} {...announcement} />
						))}
					</div>
				</div>
			</section>

			{/* 关注我们 CTA */}
			<section className="section-padding surface-muted">
				<div className="container-custom text-center">
					<h2 className="mb-6">关注育人，掌握第一手资讯</h2>
					<p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
						关注我们的社交媒体，实时获取最新课程、活动与学生成绩动态！
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="https://www.facebook.com/profile.php?id=100063541332681"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary">
							关注 Facebook
						</a>
						<a
							href="https://www.instagram.com/connaught_yuren?igsh=MWNtYWE3NDZtdmJ5Mw=="
							target="_blank"
							rel="noopener noreferrer"
							className="btn-secondary">
							关注 @connaught_yuren
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
