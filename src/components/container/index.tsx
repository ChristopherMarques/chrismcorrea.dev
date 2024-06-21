import { HTMLProps, PropsWithChildren, ReactNode } from 'react'

interface ContainerProps {
	className?: HTMLProps<HTMLElement>['className']
	id?: HTMLProps<HTMLElement>['id']
}

const Container = ({
	children,
	className = '',
	id = 'container',
}: PropsWithChildren<ContainerProps>) => {
	return (
		<div id={id} className={className}>
			{children}
		</div>
	)
}

export default Container
