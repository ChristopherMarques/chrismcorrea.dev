import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion' // Import useAnimation hook
import '@/styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [router.route])

	const loaderVars = {
		initial: { height: '100vh' },
		exit: {
			height: '0vh',
			transition: { duration: 0.5, type: 'easeInOut' },
		},
	}

	return (
		<AnimatePresence>
			<motion.div
				className="flex flex-col origin-top w-full h-full bg-[url('/img/noise-background.svg')] object-cover bg-center bg-no-repeat bg-opacity-0"
				initial={{ scaleY: 1 }}
				animate={loading ? 'initial' : 'exit'}
				exit={{ scaleY: 0, transition: { duration: 0.5 } }}
				variants={loaderVars}
			>
				{loading && <Loader />}
			</motion.div>
			{!loading && (
				<Container showGrid>
					<Navbar />
					<Component {...pageProps} />
				</Container>
			)}
		</AnimatePresence>
	)
}
