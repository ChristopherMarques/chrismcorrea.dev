import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Accordion from '../Accordion'
import Text from '../Text'

const howCanIHelp = [
	{
		title: 'Web Development',
		content: `I specialize in building high-performance, pixel-perfect websites.`,
	},
	{
		title: 'Mobile Development',
		content: `Understanding the ever-evolving mobile landscape and the importance of delivering exceptional user experiences on smartphones and tablets.`,
	},
	{
		title: 'Design & User Interface',
		content: `I believe that beautiful design, coupled with intuitive user interfaces (UIs), are crucial for website success.`,
	},
]

const About = () => {
	return (
		<div
			id='about-me'
			className='flex flex-col h-full justify-center rounded-t-[1.3rem] bg-[url("/img/noise-about.svg")]'
		>
			<motion.h3
				initial={{ x: '-100px' }}
				whileInView={{ x: '0px' }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className='text-8xl uppercase font-teko px-2 ml-10 mt-10 py-2'
			>
				About Me.
			</motion.h3>
			<motion.div
				initial={{ y: '-300px' }}
				whileInView={{ y: '0px' }}
				transition={{ duration: 1, ease: 'circInOut' }}
				className='flex xl:flex-row flex-col h-screen items-center justify-center'
			>
				<Image
					src={'/img/me.png'}
					alt='Chris'
					width={750}
					height={750}
					quality={100}
					className='rounded-xl grayscale hover:grayscale-0 transition ease-in-out delay-150'
					loading='lazy'
				/>
				<p className='xl:ml-10 lg:z-50 rounded-lg font-ubuntu text-wrap text-center mt-10 text-2xl max-w-[40rem]'>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						laoreet auctor metus, eget ultrices enim. Proin a mi vulputate,
						scelerisque lectus ac, molestie purus. Phasellus congue dui ac
						vehicula dignissim.
					</Text>
				</p>
			</motion.div>
			<motion.div
				initial={{ y: '-300px' }}
				whileInView={{ y: '0px' }}
				transition={{ duration: 1, ease: 'circInOut' }}
				className='flex xl:flex-row flex-col xl:justify-around xl:px-10 items-center justify-center'
			>
				<div className='flex flex-col gap-2 justify-start'>
					<h5 className='lg:z-50 font-teko text-wrap text-left text-6xl uppercase'>
						I can help you with
					</h5>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						laoreet auctor metus, eget ultrices enim. Proin a mi vulputate,
						scelerisque lectus ac, molestie purus. Phasellus congue dui ac
						vehicula dignissim.
					</Text>
				</div>
				<div className='py-10'>
					<Accordion items={howCanIHelp} />
				</div>
			</motion.div>
		</div>
	)
}

export default React.memo(About)
