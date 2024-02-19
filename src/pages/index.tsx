// Home.tsx
import About from '@/components/About'
import HeroBanner from '@/components/HeroSection'
import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
	const { scrollYProgress } = useScroll()
	const aboutTranslateY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<div className='w-full h-full'>
			<motion.div
				id='hero'
				style={{ opacity: heroOpacity }}
				className='flex flex-col h-screen justify-center items-center'
			>
				<HeroBanner />
			</motion.div>
			<motion.div style={{ translateY: aboutTranslateY }}>
				<About />
			</motion.div>
		</div>
	)
}
