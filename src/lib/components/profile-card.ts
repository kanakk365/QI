import { ComponentData } from "../types";

export const profileCardComponent: ComponentData = {
	name: "Profile Card",
	description:
		"A sleek profile card with hover actions and a live clock, built with framer-motion.",
	preview: () => import("@/src/registry/default/ui/ProfileCard"),
	demo: `"use client";
import ProfileCard from "@/src/components/ui/ProfileCard";

export function ProfileCardDemo() {
	return (
		<div className="flex items-center justify-center min-h-[400px]">
			<ProfileCard />
		</div>
	);
}`,
	code: `"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CodeIcon, MailIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ProfileCard = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString("en-US", {
			hour12: false,
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<div className="relative w-full max-w-[22rem] h-[16rem] sm:max-w-[28rem] sm:h-[20rem] p-4 sm:p-6">
			<div
				className="relative dark:bg-neutral-900  bg-white/80 backdrop-blur-md border dark:border-white/20 border-black/10 w-full h-full rounded-3xl flex shadow-[0_50px_120px_-30px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.10),0_12px_24px_-12px_rgba(0,0,0,0.08)] ring-1 dark:ring-white/10 ring-black/5"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
					<div className="flex flex-col items-start gap-1 ">
						<CodeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
						<div>
							<h2 className="text-black dark:text-white text-xl sm:text-2xl font-semibold">Kanak Kumar</h2>
							<p className="text-neutral-600 dark:text-white/70 text-sm sm:text-lg">Design Engineer</p>
						</div>
					</div>

					<div className="text-neutral-600 dark:text-white/60 text-xs sm:text-sm leading-relaxed">
						Passionate about <span className="text-black dark:text-white">design</span>, but I
						truly excel at <span className="text-black dark:text-white">coding</span>.
					</div>

					<div className="relative h-10">
						<motion.div
							key="buttons-mobile"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="absolute inset-0 flex sm:hidden items-center"
						>
							<div className="flex border border-black/20 dark:border-white/20 rounded-full overflow-hidden">
								<button className="bg-white cursor-pointer text-black px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-white/90 transition-all duration-200">
									Hire Me
								</button>
								<button className="dark:bg-white/10 bg-black/5 backdrop-blur-sm cursor-pointer text-black dark:text-white px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
									<MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
								</button>
							</div>
						</motion.div>
						<AnimatePresence mode="wait">
							{isHovered ? (
								<motion.div
									key="buttons-desktop"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="absolute inset-0 hidden sm:flex items-center"
								>
									<div className="flex border border-black/20 dark:border-white/20 rounded-full overflow-hidden">
										<button className="bg-white cursor-pointer text-black px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-white/90 transition-all duration-200">
											Hire Me
										</button>
										<button className="dark:bg-white/10 bg-black/5 backdrop-blur-sm cursor-pointer text-black dark:text-white px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
											<MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
										</button>
									</div>
								</motion.div>
							) : (
								<motion.div
									key="message-desktop"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="absolute inset-0 hidden sm:flex items-center text-neutral-600 dark:text-white/70 text-xs sm:text-sm"
								>
									Hope you have a{" "}
									<span className="text-black dark:text-white font-medium ml-1">
										{" "}
										great day!
									</span>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				<div className="w-24 sm:w-32 p-3 sm:p-4 flex flex-col items-center justify-between">
					<div className="dark:bg-white/10 bg-black/5 backdrop-blur-md border dark:border-white/20 border-black/10 w-full h-full rounded-full flex flex-col items-center justify-between p-4">
						<div className="relative -mt-2">
							<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 dark:border-white/30 border-black/20 overflow-hidden dark:bg-white/20 bg-black/10 backdrop-blur-sm">
								<Image
									className="w-full h-full object-cover"
									src="/images/k.jpg"
									alt="profile"
									width={64}
									height={64}
								/>
							</div>
						</div>

						<div className="flex flex-col items-center space-y-3 text-neutral-600 dark:text-white/60">
							<div className="flex flex-row items-center gap-1">
								<span className="text-green-600 dark:text-green-400 text-xs">Online</span>
							</div>
							<div className="flex flex-col items-center gap-1">
								<span className="font-mono text-xs text-black dark:text-white">
									{formatTime(currentTime)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;`,
	cli: "npx shadcn@latest add https://qi.kanakk.me/r/profile-card.json",
	manualSteps: [
		{
			title: "Install dependencies",
			code: "npm i motion/react lucide-react",
			language: "bash",
		},
		{
			title: "Copy the source code",
			filename: "components/ui/ProfileCard.tsx",
			language: "tsx",
			code: `"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CodeIcon, MailIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ProfileCard = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString("en-US", {
			hour12: false,
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<div className="relative w-full max-w-[22rem] h-[16rem] sm:max-w-[28rem] sm:h-[20rem] p-4 sm:p-6">
			<div
				className="relative dark:bg-neutral-900  bg-white/80 backdrop-blur-md border dark:border-white/20 border-black/10 w-full h-full rounded-3xl flex shadow-[0_50px_120px_-30px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.10),0_12px_24px_-12px_rgba(0,0,0,0.08)] ring-1 dark:ring-white/10 ring-black/5"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
					<div className="flex flex-col items-start gap-1 ">
						<CodeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
						<div>
							<h2 className="text-black dark:text-white text-xl sm:text-2xl font-semibold">Kanak Kumar</h2>
							<p className="text-neutral-600 dark:text-white/70 text-sm sm:text-lg">Design Engineer</p>
						</div>
					</div>

					<div className="text-neutral-600 dark:text-white/60 text-xs sm:text-sm leading-relaxed">
						Passionate about <span className="text-black dark:text-white">design</span>, but I
						truly excel at <span className="text-black dark:text-white">coding</span>.
					</div>

					<div className="relative h-10">
						<motion.div
							key="buttons-mobile"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="absolute inset-0 flex sm:hidden items-center"
						>
							<div className="flex border border-black/20 dark:border-white/20 rounded-full overflow-hidden">
								<button className="bg-white cursor-pointer text-black px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-white/90 transition-all duration-200">
									Hire Me
								</button>
								<button className="dark:bg-white/10 bg-black/5 backdrop-blur-sm cursor-pointer text-black dark:text-white px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
									<MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
								</button>
							</div>
						</motion.div>

						<AnimatePresence mode="wait">
							{isHovered ? (
								<motion.div
									key="buttons-desktop"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="absolute inset-0 hidden sm:flex items-center"
								>
									<div className="flex border border-black/20 dark:border-white/20 rounded-full overflow-hidden">
										<button className="bg-white cursor-pointer text-black px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-white/90 transition-all duration-200">
											Hire Me
										</button>
										<button className="dark:bg-white/10 bg-black/5 backdrop-blur-sm cursor-pointer text-black dark:text-white px-3 sm:px-4 py-0 text-xs sm:text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
											<MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
										</button>
									</div>
								</motion.div>
							) : (
								<motion.div
									key="message-desktop"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="absolute inset-0 hidden sm:flex items-center text-neutral-600 dark:text-white/70 text-xs sm:text-sm"
								>
									Hope you have a{" "}
									<span className="text-black dark:text-white font-medium ml-1">
										{" "}
										great day!
									</span>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				<div className="w-24 sm:w-32 p-3 sm:p-4 flex flex-col items-center justify-between">
					<div className="dark:bg-white/10 bg-black/5 backdrop-blur-md border dark:border-white/20 border-black/10 w-full h-full rounded-full flex flex-col items-center justify-between p-4">
						<div className="relative -mt-2">
							<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 dark:border-white/30 border-black/20 overflow-hidden dark:bg-white/20 bg-black/10 backdrop-blur-sm">
								<Image
									className="w-full h-full object-cover"
									src="/images/k.jpg"
									alt="profile"
									width={64}
									height={64}
								/>
							</div>
						</div>

						<div className="flex flex-col items-center space-y-3 text-neutral-600 dark:text-white/60">
							<div className="flex flex-row items-center gap-1">
								<span className="text-green-600 dark:text-green-400 text-xs">Online</span>
							</div>
							<div className="flex flex-col items-center gap-1">
								<span className="font-mono text-xs text-black dark:text-white">
									{formatTime(currentTime)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;`,
		},
	],
};


