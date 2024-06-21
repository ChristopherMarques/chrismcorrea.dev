import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Text from '../Text'

type AccordionItem = {
	title: string
	content: string
}

interface AccordionProps {
	items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? 0 : index)
	}

	return (
		<div className='accordion w-full'>
			{items.map((item, index) => (
				<div
					key={index}
					className={`accordion-item w-full py-2 ${
						activeIndex === index
							? 'bg-background w-full rounded-xl p-5'
							: 'p-5 w-full'
					}`}
				>
					<motion.button
						className='flex flex-row justify-between w-full font-Teko text-6xl'
						onClick={() => toggleAccordion(index)}
						initial={false}
						animate={{
							backgroundColor: activeIndex === index ? '#171717' : '',
							transition: { ease: 'easeInOut', duration: 0.3 },
						}}
					>
						<Text
							textTag='h5'
							className='transition ease-in-out duration-300 delay-300 transform hover:translate-x-5'
						>
							{item.title}
						</Text>
						<span className='font-thin ml-10'>
							{activeIndex === index ? '-' : '+'}
						</span>
					</motion.button>
					<AnimatePresence>
						{activeIndex === index && (
							<motion.div
								key='content'
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
								className='accordion-content w-full'
							>
								<Text>{item.content}</Text>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}

export default Accordion
