import { ReactNode } from 'react'

interface TextProps {
	children: ReactNode
}

const Text = ({ children }: TextProps) => {
	return (
		<p className='text-wrap text-center md:text-2xl font-ubuntu md:max-w-[40rem]'>
			{children}
		</p>
	)
}
export default Text
