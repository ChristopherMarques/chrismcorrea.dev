import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex md:flex-row sm:flex-col justify-center w-full h-full items-center'>
			<Image
				alt='Chris'
				width={400}
				height={400}
				src='/img/me.png'
				quality={100}
				className='drop-shadow-[0_20px_13px_rgba(252,217,184,0.05)]'
			/>
			<div className='flex flex-col ml-2'>
				<h1 className='font-teko text-7xl'>Hi, Im Chris!</h1>
				<h2 className='font-ubuntu text-2xl text-primary'>
					a frontend developer
				</h2>
			</div>
		</div>
	)
}
