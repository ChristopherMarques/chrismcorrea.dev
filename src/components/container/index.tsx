import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="flex flex-col w-screen h-screen py-1.5 px-3 bg-[url('/img/noise-background.svg')]">
			<div className="flex flex-col w-full h-full justify-center bg-[url('/img/grid.svg')] bg-center bg-opacity-5 bg-no-repeat object-cover">
				{children}
			</div>
		</div>
	)
}

export default Container
