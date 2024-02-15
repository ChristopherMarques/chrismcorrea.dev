import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
	showGrid?: boolean
}

const Container = ({ children, showGrid = false }: ContainerProps) => {
	return (
		<div className='flex flex-col w-full h-full bg-hero bg-contain bg-no-repeat bg-top _bg-center'>
			{children}
		</div>
	)
}

export default Container
