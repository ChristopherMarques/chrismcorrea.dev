import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Loader from '@/components/Loader'

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const handleStart = () => {
			setLoading(true)
		}
		const handleComplete = () => {
			setTimeout(() => {
				setLoading(false)
			}, 2000)
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		handleComplete()

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	}, [router.events])

	return (
		<>
			{loading ? (
				<Container>
					<Loader />
				</Container>
			) : (
				<Container showGrid>
					<div className='flex justify-end w-100 mt-4'>
						<Navbar />
					</div>
					<Component {...pageProps} />
				</Container>
			)}
		</>
	)
}
