import Image from 'next/image'
import Container from '../container'

const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<Image
				quality={90}
				src={'/img/loader.svg'}
				width={500}
				height={500}
				alt='loading'
			/>
		</div>
	)
}
export default Loader
