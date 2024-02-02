"use client";

import { motion } from "framer-motion";

const About = () => {
	return (
		<div
			className="relative mx-auto flex lg:flex-row flex-col h-screen max-w-[1200px] items-center justify-center px-5 p5-10 lg:pt-14 text-center lg:text-left"
			id="portfolioAbout"
		>
			<h2 className="md:absolute lg:top-20 z-10 translate-x-3 text-16 uppercase tracking-[20px] md:text-32 font-bold pb-2 lg:pb-0">
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
				className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row"
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
					className="relative mx-auto shrink-0 object-cover lg:w-[600px] rounded-[16px]"
					src="./cuong.jpeg"
					alt={"About me"}
				/>

				<ul className="list-disc pl-5">
					<li className="text-14 md:text-18">
						My name is Vo Minh Cuong, and I was born in 1996 in Ho Chi Minh
						City, Vietnam. Currently, I am living and working in Ho Chi Minh
						City, Vietnam as a Frontend Web Developer 🖥 with two year of
						experience.
					</li>
					<li className="text-14 md:text-18">
						I love learning new technologies and building valuable application
						that helps others with their work. I’m considered a team-player
						because I like to help other and tend to work well within the group.
					</li>
					<li className="text-14 md:text-18">
						Short-term goal: Having a challenging job, improve the experience,
						training working skills effectively, accurately and quickly. Improve
						technical knowledge.
					</li>
					<li className="text-14 md:text-18">
						Long-term goal: Learn and strong in many frameworks and languages.
						Become a Fullstack Developer
					</li>
				</ul>
			</motion.div>
		</div>
	);
};

export default About;
