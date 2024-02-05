import Container from '@/components/container'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<div className='flex justify-end w-100'>
				<Navbar />
			</div>
			<Component {...pageProps} />
		</Container>
	)
}
