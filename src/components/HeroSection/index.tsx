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
				className='flex flex-col justify-center h-screen items-center bg-[url("/img/hero-section.svg")] bg-no-repeat bg-center object-cover'
			>
				<HeroNameSection />
				<Text>
					A frontend developer & software engineer propelling project dreams to
					reality.
				</Text>
			</motion.div>
		</>
	)
}
export default HeroBanner
