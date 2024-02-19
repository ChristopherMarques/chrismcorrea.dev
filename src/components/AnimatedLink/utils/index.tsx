import React from 'react'
import { motion } from 'framer-motion'
import { titleAnimation } from './AnimationVariants'

export const AnimatedLetter = ({ character, animation }) => {
	return (
		<motion.span
			variants={animation}
			className='relative inline-block whitespace-nowrap'
		>
			{character}
		</motion.span>
	)
}

export const AnimatedWord = ({ title, animation, isHovered }) => {
	return (
		<motion.span
			variants={titleAnimation}
			initial='rest'
			animate={isHovered ? 'hover' : 'rest'}
			className='whitespace-nowrap relative'
		>
			{title
				.split('')
				.map((character, i) =>
					character === ' ' ? (
						<span key={i}>&nbsp;</span>
					) : (
						<AnimatedLetter
							key={i}
							character={character}
							animation={animation}
						/>
					)
				)}
		</motion.span>
	)
}
