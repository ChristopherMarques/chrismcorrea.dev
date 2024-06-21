import { TimeCheckProps, useTimeCheck } from '@/hooks/useTimeCheck'

const Custom404 = () => {
	const timeProps: TimeCheckProps = {
		time: 2,
		type: 'day',
		lang: 'pt-BR',
	}
	const { time } = useTimeCheck(timeProps)

	return (
		<div className='flex flex-col w-full h-screen -mt-[15vh] justify-center items-center'>
			<p className='mb-4 text-3xl'>Error 404 | Not Found</p>
			<span className='text-9xl mb-4'>&#128561;</span>
			<h1 className='text-3xl'>
				Ooops, não encontramos o que estava procurando, volte {time}
			</h1>
		</div>
	)
}
export default Custom404
