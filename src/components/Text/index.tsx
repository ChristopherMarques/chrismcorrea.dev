import React, { HTMLProps, PropsWithChildren } from 'react'

interface TextProps {
	textTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
	className?: HTMLProps<HTMLElement>['className']
}

const Text = ({
	children,
	textTag = 'p',
	className = 'text-wrap md:text-2xl font-ubuntu md:max-w-[40rem]',
}: PropsWithChildren<TextProps>) => {
	return React.createElement(textTag, { className }, children)
}

export default Text
