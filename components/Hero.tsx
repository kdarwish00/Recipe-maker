"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroHighlightDemo() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 mb-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				<Highlight className="text-black dark:text-white">
					Welcome to Culinary Compass!
				</Highlight>
				<br></br>
				<Button
					variant="outline"
					className="bg-blue-200 mr-2 hover:bg-white"
				>
					<Link href="/ingredients">Generate Recipes</Link>
				</Button>
			</motion.h1>
		</HeroHighlight>
	);
}
