import Image from 'next/image'

const Loader = () => {
	return (
		<div className='flex justify-center items-center rounded-full border-transparent'>
			<Image
				quality={90}
				src={'/img/loader.svg'}
				width={500}
				height={500}
				className='rounded-full border-transparent'
				alt='loading'
			/>
		</div>
	)
}
export default Loader
