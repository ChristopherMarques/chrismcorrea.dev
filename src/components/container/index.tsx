import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="flex flex-col w-screen h-screen py-1.5 px-3 bg-[url('/img/noise-background.svg')] object-cover bg-center bg-no-repeat bg-opacity-0">
			<div className="flex flex-col w-full h-full justify-center bg-[url('/img/grid.svg')] bg-opacity-5 bg-no-repeat bg-top object-cover">
				{children}
			</div>
		</div>
	)
}

export default Container
