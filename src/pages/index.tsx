import HeroBanner from '@/components/HeroSection'
import Text from '@/components/Text'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex flex-col justify-center w-full h-full items-center'>
			<HeroBanner />
		</div>
	)
}
