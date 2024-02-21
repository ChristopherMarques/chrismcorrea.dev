import Image from 'next/image'
import Link from 'next/link'
import AnimatedLink from '../AnimatedLink'

const links = [
	{ name: 'about me', link: '#about-me' },
	{ name: 'services', link: '#services' },
	{ name: 'projects', link: '#projects' },
	{ name: 'contact', link: '#contact' },
]

const Navbar = () => {
	return (
		<header className='flex flex-row justify-between px-4 pt-2'>
			<Link href='/' legacyBehavior passHref>
				<Image
					src='/img/logo.svg'
					width={90}
					height={90}
					quality={100}
					alt='logotipe'
					className='cursor-pointer hover:animate-pulse -mt-20'
				/>
			</Link>
			<div className='flex flex-col gap-2 font-Teko text-4xl z-[9999]'>
				{links.map((link, index) => {
					return (
						<div key={index}>
							<Link href={link.link} passHref>
								<AnimatedLink title={link.name} />
							</Link>
						</div>
					)
				})}
			</div>
		</header>
	)
}

export default Navbar
