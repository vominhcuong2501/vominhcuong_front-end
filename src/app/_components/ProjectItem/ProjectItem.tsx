import { ContentProject } from "@/type/project.type";
import Image from "next/image";
import { motion } from "framer-motion";
type ProjectItemProps = {
	content: ContentProject;
};

export default function ProjectItem({ content }: ProjectItemProps) {
	return (
		<div className={` relative  group `}>
			{content?.imgProject && (
				<motion.img
					initial={{ translateY: -100 }}
					whileInView={{ translateY: 0 }}
					transition={{
						duration: 0.7,
					}}
					src={content.imgProject}
					alt={content.nameProject}
					title={content.nameProject}
					className="rounded-xl object-fill object-center md:shadow-4 mx-auto"
				/>
			)}
			<div
				className={`md:px-[22px] bg-transparent min-h-[127px] lg:min-h-[156px] `}
			>
				<div
					className={`bg-[#fff] rounded-[14px] shadow-3 p-4 z-10 mx-auto relative -mt-[10px] lg:-mt-[40px] group max-w-[550px]`}
				>
					<h3 className="text-18 font-bold uppercase md:text-24">
						{content?.nameProject}
					</h3>
					<div className="mx-auto flex w-full flex-wrap justify-center gap-2 mt-1">
						{content?.listIcon.map((icon, index) => {
							return (
								<Image
									key={index}
									src={icon.icon || ""}
									alt={icon?.name || ""}
									title={icon?.name}
									width={48}
									height={48}
									className="bg-color-bg-dark-secondary h-7 w-7 rounded-full md:h-10  md:w-10"
								/>
							);
						})}
					</div>
					<div
						className=" mx-auto mt-4 w-full max-w-[600px] text-left text-12 md:text-14"
						dangerouslySetInnerHTML={{
							__html: content?.content || "",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
