import { ReactNode } from 'react'

interface TextProps {
	children: ReactNode
}

const Text = ({ children }: TextProps) => {
	return (
		<p className='text-wrap md:text-2xl font-ubuntu text-left md:max-w-96'>
			{children}
		</p>
	)
}
export default Text
