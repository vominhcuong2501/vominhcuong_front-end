"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
	const data = [
		{
			name: "HTML",
			icon: "./icon-skill-html.png",
		},
		{
			name: "CSS",
			icon: "./icon-skill-css.png",
		},
		{
			name: "Javascript",
			icon: "./icon-skill-javascript.png",
		},
		{
			name: "Jquery",
			icon: "./icon-skill-jquery.png",
		},
		{
			name: "NextJs",
			icon: "./icon-skill-nextjs.png",
		},
		{
			name: "Tanstack Query",
			icon: "./icon-skill-tanstack-query.png",
		},
		{
			name: "ReactJs",
			icon: "./icon-skill-reactjs.png",
		},
		{
			name: "Redux",
			icon: "./icon-skill-redux.png",
		},
		{
			name: "Github",
			icon: "./icon-skill-github.png",
		},
		{
			name: "Typescript",
			icon: "./icon-skill-typescript.png",
		},

		{
			name: "Tailwindcss",
			icon: "./icon-skill-tailwindcss.png",
		},
		{
			name: "Boostrap",
			icon: "./icon-skill-bootstrap.png",
		},
	];

	return (
		<div
			className="relative h-screen max-w-[1200px] mx-auto flex justify-center"
			id="portfolioSkills"
		>
			<div className="absolute top-1/2 -translate-y-[50%]">
				<h2 className="text-24 uppercase md:text-32 font-bold text-center pb-2 md:pb-5 text-gradient-red tracking-[10px] md:tracking-[20px]">
					Skills
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
					className="grid grid-cols-3 gap-5 md:grid-cols-4 md:gap-10"
				>
					{data.map((skill) => {
						return (
							<div
								key={skill?.name}
								className="group relative flex h-24 w-24 cursor-pointer overflow-hidden rounded-full border-2 border-white transition-all duration-300 hover:border-transparent md:h-40 md:w-40"
							>
								<motion.img
									initial={{
										opacity: 0,
										scale: 0,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
									}}
									transition={{ duration: 0.3 }}
									src={skill?.icon}
									className="rounded-full object-cover duration-500 ease-in-out"
									alt={skill?.name}
									title={skill?.name}
								/>

								<motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-full w-full flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-200 rounded-full shadow-10">
									<h4 className="font-bold">{skill?.name}</h4>
								</motion.div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
