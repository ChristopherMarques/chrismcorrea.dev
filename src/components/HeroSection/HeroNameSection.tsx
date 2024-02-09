const HeroNameSection = () => {
	return (
		<div className='flex flex-col ml-2'>
			<div className='flex flex-col justify-between'>
				<span className='font-teko md:text-7xl md:mb-[-50px] md:ml-2 text-3xl'>
					{"Hi, I'm"}
				</span>
				<h1 className='font-teko md:text-[22.5rem] text-7xl'>Chris</h1>
			</div>
			<h2 className='font-ubuntu text-2xl md:mt-[-65px] md:ml-72 text-primary'>
				a frontend developer
			</h2>
		</div>
	)
}
export default HeroNameSection
