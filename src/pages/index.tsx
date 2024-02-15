// Home.tsx
import About from '@/components/About'
import HeroBanner from '@/components/HeroSection'
import useDimension from '@/hooks/useDimension'
import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
	const container = useRef<HTMLDivElement>(null)
	const { height } = useDimension()
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], ['0%', height])

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<div ref={container} className='w-full h-full'>
			<motion.div className='flex flex-col h-screen justify-center items-center'>
				<HeroBanner />
			</motion.div>
			<About y={y} /> {/* Pass y as a prop */}
		</div>
	)
}
