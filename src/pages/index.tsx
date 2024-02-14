import HeroBanner from '@/components/HeroSection'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import useDimension from '@/hooks/useDimension'
import About from '@/components/About'

export default function Home() {
	const container = useRef<HTMLDivElement>(null)
	const { height } = useDimension()
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, height])

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	})

	return (
		<div ref={container} className='w-full h-full '>
			<div className='flex flex-col justify-center items-center '>
				<HeroBanner />
			</div>
			<About y={y} />
		</div>
	)
}
