import About from '@/components/About'
import HeroBanner from '@/components/HeroSection'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
	const { scrollY } = useScroll()
	const aboutTranslateY = useTransform(scrollY, [0, 500], [0, -200])
	const heroOpacity = useTransform(scrollY, [0, 1000], [1, 0])

	return (
		<div className='w-full h-screen'>
			<motion.div
				id='hero'
				style={{ opacity: heroOpacity }}
				className='flex flex-row h-full justify-center items-center'
			>
				<HeroBanner />
			</motion.div>
			<motion.div style={{ y: aboutTranslateY }}>
				<About />
			</motion.div>
		</div>
	)
}
