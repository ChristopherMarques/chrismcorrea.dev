import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedWord } from './utils'
import { letterAnimation, letterAnimationTwo } from './utils/AnimationVariants'

export default function AnimatedLink({ title }) {
	const [isHovered, setHovered] = useState(false)

	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='relative overflow-hidden cursor-pointer'
		>
			<div className='opacity-100 hover:opacity-0'>
				<AnimatedWord
					title={title}
					isHovered={isHovered}
					animation={letterAnimation}
				/>
			</div>
			<div className='absolute top-0 opacity-0 hover:opacity-100'>
				<AnimatedWord
					title={title}
					isHovered={isHovered}
					animation={letterAnimationTwo}
				/>
			</div>
		</motion.div>
	)
}
