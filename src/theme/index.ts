import { extendBaseTheme } from '@chakra-ui/react'
import ButtonStyle from './components/Button'
import TextStyle from './components/Text'

const theme = extendBaseTheme({
	colors: {
		brand: {
			primary: '#E09146',
			secondary: '#FCD9B8',
			terceary: '#FCECD2',
			dark: '#020202',
			background: '#171717',
			tWhite: 'rgba(255, 255, 255, .38)',
		},
	},
	components: {
		Text: TextStyle,
		Button: ButtonStyle,
	},
	styles: {
		global: () => ({
			body: {
				background: '#171717',
				userSelect: 'none',
				overflowX: 'hidden',
			},
			nav: {
				position: 'fixed',
				width: '100%',
				height: '110p',
			},
			'@keyframes MoveUpDown': {
				'0%, 100%': {
					transform: 'translateY(0)',
				},
				'50%': {
					transform: 'translateY(-10px)',
				},
			},
			'.arrow': {
				animation: 'MoveUpDown 1s linear infinite',
				left: 0,
				bottom: 0,
			},

			'body::-webkit-scrollbar': {
				width: '5px',
			},
			'body::-webkit-scrollbar-track': {
				background: '#131D1E',
			},
			'body::-webkit-scrollbar-thumb': {
				backgroundColor: '#CAFC01',
				borderRadius: '20px',
			},
		}),
	},
})

export default theme
