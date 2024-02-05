"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

const Experience = () => {
	const data = [
		{
			logoCompany: "/logo_company_bincg.png",
			position: "Front-end Web Developer",
			nameCompany: "BIN Corporation Group",
			descriptionCompany:
				"BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. I joined BIN Corporation Group as a Frontend Developer, specializing in creating user interfaces for corporate websites.",
			time: "18/10/2022 - Now",
			listIcon: [
				{
					name: "HTML",
					icon: "/icon-skill-html.png",
				},
				{
					name: "CSS",
					icon: "/icon-skill-css.png",
				},
				{
					name: "Javascript",
					icon: "/icon-skill-javascript.png",
				},
				{
					name: "NextJs",
					icon: "/icon-skill-nextjs.png",
				},
				{
					name: "ReactJs",
					icon: "/icon-skill-reactjs.png",
				},
				{
					name: "Tailwindcss",
					icon: "/icon-skill-tailwindcss.png",
				},
				{
					name: "Typescript",
					icon: "/icon-skill-typescript.png",
				},
				{
					name: "Tanstack Query",
					icon: "/icon-skill-tanstack-query.png",
				},
			],
		},
		{
			logoCompany: "/wonderlabs.png",
			position: "Front-end Web Developer",
			nameCompany: "WONDERLABS",
			descriptionCompany:
				"Wonderlabs is a venture-capital backed service that runs offshore software development centres in Asia. We work closely with global partners that develop innovative, state-of-the-art software and IOT products.",
			time: "05/07/2022 - 05/10/2022",
			listIcon: [
				{
					name: "HTML",
					icon: "/icon-skill-html.png",
				},
				{
					name: "CSS",
					icon: "/icon-skill-css.png",
				},
				{
					name: "Javascript",
					icon: "/icon-skill-javascript.png",
				},
			],
		},
	];

	return (
		<div
			className="relative h-screen max-w-[1200px] mx-auto flex justify-center"
			id="portfolioExperience"
		>
			<div className="absolute top-1/2 -translate-y-[50%]">
				<h2 className="text-24 uppercase md:text-32 font-bold text-center pb-2 md:pb-5 text-gradient-red tracking-[10px] md:tracking-[20px]">
					Experiences
				</h2>

				<motion.div
					initial={{
						opacity: 0,
						scale: 0,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.2,
					}}
				>
					<Swiper
						modules={[Navigation, EffectFade, Pagination]}
						className="mySwiper px-4 !pb-10 md:max-w-[750px]"
						slidesPerView={1}
						effect={"fade"}
						pagination={{
							clickable: true,
						}}
						spaceBetween={10}
						navigation={{
							nextEl: ".experience-arrow-left",
							prevEl: ".experience-arrow-right",
						}}
					>
						{data?.map((item, index) => {
							return (
								<SwiperSlide key={index}>
									<article className="mx-auto flex h-full items-center justify-center transition-all max-w-[343px] md:max-w-[750px]">
										<div className="flex flex-col items-center justify-center gap-3 rounded-[16px] bg-slate-800 p-5 ">
											<motion.img
												initial={{
													y: -100,
												}}
												whileInView={{
													y: 0,
												}}
												viewport={{ once: true }}
												transition={{
													duration: 1,
												}}
												className="relative mx-auto h-24 w-24 shrink-0 rounded-full bg-white object-cover 2xl:h-36 2xl:w-36"
												src={item.logoCompany}
												alt={item.nameCompany}
											/>

											<div className="space-y-3 md:space-y-4 text-[#fff]">
												<h3 className="text-center text-16 font-light md:text-20 2xl:text-28 text-[#fff]">
													{item.position}
												</h3>
												<h2 className="text-center text-18 font-bold uppercase tracking-widest md:text-24 text-gradient-blue">
													{item.nameCompany}
												</h2>
												<div className="flex justify-center gap-2">
													{item.listIcon?.map((icon, index) => {
														return (
															<Image
																key={index}
																src={icon.icon}
																alt={icon.name}
																title={icon.name}
																width={48}
																height={48}
																className="h-7 w-7 rounded-full md:h-12  md:w-12"
															/>
														);
													})}
												</div>
												<p className="text-color-text-light-secondary">
													{item.time}
												</p>
												<p>{item.descriptionCompany}</p>
											</div>
										</div>
									</article>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<button className="experience-arrow-left absolute -right-[60px] -translate-y-1/2 top-1/2 z-10 hidden bg-white cursor-pointer rounded-full border hover:border-red-1 hover:fill-red-1 p-[11px] duration-200  md:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<g clipPath="url(#clip0_2936_7113)">
								<path
									d="M4.71522 11.8041C5.00034 12.0653 5.46001 12.0653 5.74513 11.8041L10.5805 7.37568C10.8074 7.16784 10.8074 6.83211 10.5805 6.62428L5.74513 2.19582C5.46001 1.9347 5.00034 1.9347 4.71522 2.19582C4.43011 2.45695 4.43011 2.87794 4.71522 3.13907L8.92795 7.00264L4.7094 10.8662C4.4301 11.122 4.43011 11.5483 4.71522 11.8041Z"
									fill="#E60000"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.60265 2.07291C4.95147 1.75345 5.50887 1.75345 5.85769 2.07291L10.693 6.50137C10.9921 6.77527 10.9921 7.22469 10.693 7.49859L5.85769 11.927C5.50908 12.2463 4.95215 12.2465 4.60328 11.9276C4.24528 11.6058 4.24532 11.0652 4.59684 10.7433L8.68127 7.00256L4.60265 3.26198C4.60263 3.26195 4.60268 3.262 4.60265 3.26198C4.24549 2.93478 4.24543 2.40008 4.60265 2.07291ZM4.71522 11.8041L4.82779 11.6812C5.0492 11.884 5.41115 11.884 5.63256 11.6812L10.4679 7.25277C10.6227 7.111 10.6227 6.88896 10.4679 6.74719L5.63256 2.31873C5.41115 2.11595 5.0492 2.11595 4.82779 2.31873C4.61481 2.51379 4.61481 2.8211 4.82779 3.01616L9.17462 7.00273L4.82197 10.9891C4.6151 11.1786 4.61493 11.4903 4.82652 11.6801L4.71522 11.8041Z"
									fill="#E60000"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2936_7113">
									<rect
										width="12.5"
										height="12.5"
										fill="white"
										transform="translate(0.75 0.75)"
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
					<button className="experience-arrow-right absolute -left-[60px] -translate-y-1/2 top-1/2 z-10 hidden bg-white cursor-pointer rounded-full border hover:border-red-1 hover:fill-red-1 p-[11px] duration-200 md:block">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
						>
							<path
								d="M9.28608 2.19582C9.00097 1.9347 8.54129 1.9347 8.25617 2.19582L3.42085 6.62428C3.19392 6.83212 3.19392 7.16785 3.42085 7.37568L8.25617 11.8041C8.54129 12.0653 9.00097 12.0653 9.28608 11.8041C9.5712 11.543 9.5712 11.122 9.28608 10.8609L5.07335 6.99732L9.2919 3.13374C9.5712 2.87795 9.5712 2.45162 9.28608 2.19582Z"
								fill="#E60000"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9.39865 11.927C9.04983 12.2465 8.49243 12.2465 8.14361 11.927L3.30828 7.49859C3.00922 7.22469 3.00922 6.77527 3.30828 6.50137L8.14361 2.07291C8.49222 1.75364 9.04916 1.75345 9.39802 2.07234C9.75602 2.39417 9.75598 2.93471 9.40447 3.25665L5.32003 6.9974L9.39865 10.738C9.39862 10.738 9.39868 10.738 9.39865 10.738C9.75581 11.0652 9.75587 11.5999 9.39865 11.927ZM9.28608 2.19582L9.17351 2.31873C8.9521 2.11595 8.59015 2.11595 8.36874 2.31873L3.53341 6.74719C3.37862 6.88896 3.37862 7.111 3.53341 7.25277L8.36874 11.6812C8.59015 11.884 8.9521 11.884 9.17351 11.6812C9.3865 11.4862 9.3865 11.1789 9.17351 10.9838L4.82668 6.99723L9.17933 3.01083C9.38621 2.82137 9.38637 2.50971 9.17478 2.31988L9.28608 2.19582Z"
								fill="#E60000"
							/>
						</svg>
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default Experience;
