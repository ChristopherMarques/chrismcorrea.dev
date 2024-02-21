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
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='accordion w-full'>
			{items.map((item, index) => (
				<div
					key={index}
					className={`accordion-item w-full py-2 ${
						activeIndex === index ? 'bg-background rounded-xl p-5' : ''
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
						<p className='transition ease-in-out duration-300 delay-300 transform hover:translate-x-5'>
							{item.title}
						</p>
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
