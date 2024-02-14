import { motion } from 'framer-motion'
import Image from 'next/image'
import Text from '../Text'

const About = (y: any) => {
	return (
		<motion.div
			style={{ y }}
			className='flex flex-col h-screen justify-center rounded-t-[1.3rem] bg-[url("/img/noise-about.svg")]'
		>
			<h3 className='text-8xl uppercase font-teko px-2 py-2'>About Me.</h3>
			<div className='flex flex-col h-screen items-center justify-center'>
				<Image
					src={'/img/me.png'}
					alt='Chris'
					width={400}
					height={400}
					className='rounded-xl'
				/>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					laoreet auctor metus, eget ultrices enim. Proin a mi vulputate,
					scelerisque lectus ac, molestie purus. Phasellus congue dui ac
					vehicula dignissim.
				</Text>
			</div>
		</motion.div>
	)
}

export default About
