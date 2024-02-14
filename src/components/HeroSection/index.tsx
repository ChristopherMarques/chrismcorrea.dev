import Image from 'next/image'
import HeroNameSection from './HeroNameSection'
import Text from '../Text'

const HeroBanner = () => {
	return (
		<>
			<div className='flex flex-col justify-center h-screen items-center bg-[url("/img/hero-section.svg")] bg-no-repeat bg-center object-cover'>
				<HeroNameSection />
				<Text>
					A frontend developer & software engineer propelling project dreams to
					reality.
				</Text>
			</div>
		</>
	)
}
export default HeroBanner
