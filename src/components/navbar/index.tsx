import Link from 'next/link'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import Image from 'next/image'

const links = [
	{ name: 'who am I?', link: '#who-im-am' },
	{ name: 'projects', link: '#projects' },
	{ name: 'contact', link: '#contact' },
]

const Navbar = () => {
	return (
		<div className='flex flex-row justify-between w-full'>
			<Link href='/' legacyBehavior passHref>
				<Image
					src='/img/logo.svg'
					width={64}
					height={64}
					quality={100}
					alt='logotipe'
					className='cursor-pointer hover:animate-pulse'
				/>
			</Link>
			<NavigationMenu className='mt-5'>
				<NavigationMenuList>
					{links.map((item, index) => (
						<div key={index}>
							<NavigationMenuItem>
								<Link href={item.link} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{item.name}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</div>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

export default Navbar
