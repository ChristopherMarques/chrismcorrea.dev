import Image from 'next/image'
import Link from 'next/link'
import AnimatedLink from '../AnimatedLink'
import { motion } from 'framer-motion'
import { useState } from 'react'

const links = [
	{ name: 'about me', link: '#about-me' },
	{ name: 'services', link: '#services' },
	{ name: 'projects', link: '#projects' },
	{ name: 'contact', link: '#contact' },
]

const Navbar = () => {
	const [isHovered, setHovered] = useState(false)
	return (
		<div className='flex flex-row justify-between px-4 pt-4'>
			<Link href='/' legacyBehavior passHref>
				<Image
					src='/img/logo.svg'
					width={90}
					height={90}
					quality={100}
					alt='logotipe'
					className='cursor-pointer hover:animate-pulse'
				/>
			</Link>
			<div className='flex flex-col px-4 pt-4 gap-2 font-Teko text-3xl'>
				{links.map((link, index) => {
					return (
						<div key={index}>
							<Link href={link.link} legacyBehavior passHref>
								<AnimatedLink title={link.name} />
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Navbar
