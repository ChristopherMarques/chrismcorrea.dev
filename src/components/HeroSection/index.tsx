import HeroNameSection from './HeroNameSection'
import Text from '../Text'
import { motion } from 'framer-motion'

const HeroBanner = () => {
	return (
		<>
			<motion.div
				initial={{ y: '-100px' }}
				whileInView={{ y: '0px' }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className='flex flex-col h-full mt-16 items-center'
			>
				<HeroNameSection />
				<p className='text-wrap md:text-2xl font-ubuntu md:max-w-[40rem] text-center'>
					A frontend developer & software engineer propelling project dreams to
					reality.
				</p>
			</motion.div>
		</>
	)
}
export default HeroBanner
