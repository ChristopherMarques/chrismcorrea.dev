// About.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = ({ y }: { y: any }) => {
	// Receive y as a prop
	console.log(y)
	return (
		<motion.div
			style={{ y }} // Use y in the style attribute
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
				className='flex flex-row h-screen items-center justify-center'
			>
				<div className='flex bg-[url("/img/mark.svg")] bg-left bg-no-repeat'>
					<Image
						src={'/img/me.jpg'}
						alt='Chris'
						width={400}
						height={300}
						quality={100}
						className='rounded-xl grayscale hover:grayscale-0 transition ease-in-out delay-150 duration-300'
					/>
				</div>
				<p className='ml-10 lg:z-50 rounded-lg font-ubuntu text-wrap text-center mt-10 text-2xl max-w-[40rem]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					laoreet auctor metus, eget ultrices enim. Proin a mi vulputate,
					scelerisque lectus ac, molestie purus. Phasellus congue dui ac
					vehicula dignissim.
				</p>
			</motion.div>
		</motion.div>
	)
}

export default About
