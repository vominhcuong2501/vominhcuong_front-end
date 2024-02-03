"use client";

import { motion } from "framer-motion";

const About = () => {
	return (
		<div
			className="relative h-screen max-w-[1200px] mx-auto flex justify-center"
			id="portfolioAbout"
		>
			<div className="absolute top-1/2 -translate-y-[50%]">
				<h2 className="text-24 uppercase md:text-32 font-bold text-center pb-2 md:pb-5 text-gradient-red tracking-[20px]">
					About
				</h2>
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					transition={{
						duration: 1.2,
					}}
					className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row  px-4"
				>
					<motion.img
						initial={{
							x: -200,
						}}
						whileInView={{
							x: 0,
						}}
						viewport={{ once: true }}
						transition={{
							duration: 1,
						}}
						className="relative mx-auto shrink-0 object-cover w-[300px] md:w-[400px] rounded-[16px]"
						src="./cuong.jpeg"
						alt={"About me"}
					/>

					<ul className="list-disc pl-5 md:w-[500px] text-white">
						<li className="text-14 md:text-18">
							My name is Vo Minh Cuong, and I was born in 1996. Currently, I am
							living and working in Ho Chi Minh City, Vietnam as a Frontend Web
							Developer with two year of experience.
						</li>
						<li className="text-14 md:text-18">
							I love learning new technologies and building valuable application
							that helps others with their work. I’m considered a team-player
							because I like to help other and tend to work well within the
							group.
						</li>
						<li className="text-14 md:text-18">
							Short-term goal: Having a challenging job, improve the experience,
							training working skills effectively, accurately and quickly.
							Improve technical knowledge.
						</li>
						<li className="text-14 md:text-18">
							Long-term goal: Learn and strong in many frameworks and languages.
							Become a Fullstack Developer
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
