import Image from 'next/image'
import HeroNameSection from './HeroNameSection'
import HeroSocialSection from './HeroSocialSection'

const HeroBanner = () => {
	return (
		<>
			<div className='flex sm:flex-row flex-col justify-center w-full items-center'>
				<Image
					alt='Chris'
					width={400}
					height={400}
					src='/img/me.png'
					quality={100}
					className='rounded-full border-none drop-shadow-[0_20px_13px_rgba(252,217,184,0.05)]'
				/>
				<HeroNameSection />
			</div>
			<HeroSocialSection />
		</>
	)
}
export default HeroBanner
