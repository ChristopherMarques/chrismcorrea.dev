import Container from '@/components/Container'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
				<div className="flex flex-col w-screen h-screen justify-center items-center bg-[url('/img/noise-background.svg')] object-cover bg-center bg-no-repeat bg-opacity-0">
					<Loader />
				</div>
			) : (
				<Container showGrid>
					<Navbar />
					<Component {...pageProps} />
				</Container>
			)}
		</>
	)
}
