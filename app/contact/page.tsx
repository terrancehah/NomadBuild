"use client";

import Hero from "@/components/hero";
import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// 育人教育学院的 WhatsApp 号码
		const whatsappNumber = "60112733390";
		const whatsappMessage = `您好，我是 ${formData.name}。\n\n电邮：${formData.email}\n电话：${formData.phone}\n\n主题：${formData.subject}\n\n内容：${formData.message}`;
		const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

		setShowSuccess(true);

		setTimeout(() => {
			window.open(whatsappURL, "_blank");
		}, 1500);

		setTimeout(() => {
			setShowSuccess(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
		}, 3000);
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			{/* Hero 横幅 */}
			<Hero
				title="联系我们"
				subtitle="有任何疑问？欢迎随时联系育人教育学院，我们将尽快回复您。"
				backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
				height="small"
				ctaText=""
			/>

			{/* 联系区块 */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* 联系表单 */}
						<div>
							<h2 className="mb-6">发送消息</h2>
							<p className="text-muted mb-8">
								填写以下表格，我们会尽快回复您。您也可以直接通过
								WhatsApp 联系我们！
							</p>

							{showSuccess && (
								<div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
									<p className="text-green-800 dark:text-green-200 font-medium">
										✓ 已收到您的消息！正在跳转至 WhatsApp…
									</p>
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
										姓名 *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={handleChange}
										className="input-field"
										placeholder="请输入您的姓名"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
										电子邮件 *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="input-field"
										placeholder="example@email.com"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
										电话号码 *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										required
										value={formData.phone}
										onChange={handleChange}
										className="input-field"
										placeholder="+60 11-273 3390"
									/>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
										主题 *
									</label>
									<select
										id="subject"
										name="subject"
										required
										value={formData.subject}
										onChange={handleChange}
										className="input-field">
										<option value="">请选择主题</option>
										<option value="一般咨询">
											一般咨询
										</option>
										<option value="课程查询">
											课程查询
										</option>
										<option value="报名注册">
											报名注册
										</option>
										<option value="学费与付款">
											学费与付款
										</option>
										<option value="意见反馈">
											意见反馈
										</option>
										<option value="其他">其他</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
										留言内容 *
									</label>
									<textarea
										id="message"
										name="message"
										required
										value={formData.message}
										onChange={handleChange}
										rows={6}
										className="textarea-field"
										placeholder="请详细描述您的需求或疑问…"
									/>
								</div>

								<button
									type="submit"
									className="w-full btn-primary">
									通过 WhatsApp 发送消息
								</button>
							</form>
						</div>

						{/* 联系方式 */}
						<div>
							<h2 className="mb-6">联系方式</h2>
							<p className="text-muted mb-8">
								您也可以通过以下方式直接联系我们，随时为您服务！
							</p>

							<div className="space-y-6">
								{/* 地址 */}
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
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold mb-1">地址</h4>
										<p className="text-muted">
											217-1, Jalan Sarjana,
											<br />
											Taman Connaught, Cheras,
											<br />
											56000 Kuala Lumpur, Malaysia
										</p>
									</div>
								</div>

								{/* 电话 */}
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
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold mb-1">电话</h4>
										<p className="text-muted">
											+60 11-2733 390
										</p>
										<p className="text-muted text-sm">
											周一至周五：下午 2 时 – 晚上 9 时
										</p>
										<p className="text-muted text-sm">
											周六：上午 9 时 – 下午 6 时
										</p>
									</div>
								</div>

								{/* WhatsApp */}
								<div className="flex items-start">
									<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
										<svg
											className="w-6 h-6 text-primary-600 dark:text-primary-300"
											fill="currentColor"
											viewBox="0 0 24 24">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
										</svg>
									</div>
									<div>
										<h4 className="font-bold mb-1">
											WhatsApp
										</h4>
										<a
											href="https://wa.me/60112733390"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200">
											+60 11-2733 390
										</a>
										<p className="text-muted text-sm">
											秒回！随时欢迎咨询
										</p>
									</div>
								</div>

								{/* 邮件 */}
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
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold mb-1">
											电子邮件
										</h4>
										<a
											href="mailto:connaughtedu@gmail.com"
											className="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200">
											connaughtedu@gmail.com
										</a>
										<p className="text-muted text-sm">
											24 小时内回复
										</p>
									</div>
								</div>
							</div>

							{/* 地图占位 */}
							<div className="mt-8">
								<h4 className="font-bold mb-4">位置地图</h4>
								<div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-400">
									<p className="text-gray-500 dark:text-gray-400">
										{/* EASY CUSTOMIZATION: 替换为 Google Maps 嵌入代码 */}
										地图占位 — 请嵌入 Google Maps
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 营业时间 */}
			<section className="section-padding surface-muted">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="mb-4">营业时间</h2>
						<p className="text-lg text-muted">
							欢迎在以下时间到访或联系我们
						</p>
					</div>

					<div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-black/40 p-8 transition-colors duration-400">
						<div className="space-y-4">
							<div className="flex justify-between items-center pb-4 border-b">
								<span className="font-semibold">
									周一至周五
								</span>
								<span className="text-muted">
									下午 2:00 – 晚上 9:00
								</span>
							</div>
							<div className="flex justify-between items-center pb-4 border-b">
								<span className="font-semibold">周六</span>
								<span className="text-muted">
									上午 9:00 – 下午 6:00
								</span>
							</div>
							<div className="flex justify-between items-center pb-4 border-b">
								<span className="font-semibold">周日</span>
								<span className="text-muted">休息</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="font-semibold">公共假期</span>
								<span className="text-muted">休息</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
