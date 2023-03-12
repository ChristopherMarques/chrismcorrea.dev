const TextStyle = {
	variants: {
		white: () => ({
			fontSize: 90,
			letterSpacing: '10px',
			color: 'brand.white',
		}),
		green: () => ({
			fontSize: 90,
			letterSpacing: '10px',
			color: 'brand.green',
		}),
		navitem: () => ({
			fontSize: 30,
			color: 'brand.white',
			fontFamily: 'Montserrat',
		}),
		link: () => ({
			fontFamily: 'Montserrat',
			color: 'brand.white',
			fontSize: 15,
		}),
		logo: () => ({
			fontSize: 64,
			color: 'brand.white',
		}),
		logoMobile: () => ({
			fontSize: 32,
			color: 'brand.white',
		}),
		title: () => ({
			color: 'brand.secondary',
			textTransform: 'uppercase',
			fontWeight: 'regular',
			fontSize: 96,
			fontFamily: 'Teko',
			span: {
				color: 'brand.green',
			},
		}),
		subtitle: () => ({
			color: 'brand.terceary',
			fontWeight: 300,
			fontFamily: 'Ubuntu',
			fontSize: 40,
		}),
		text: () => ({
			fontWeight: 300,
			fontSize: '16px',
			fontFamily: 'Montserrat',
		}),
		cardNumber: () => ({
			fontFamily: 'Montserrat',
			fontSize: '38px',
			fontWeight: '700',
		}),
		verticalText: () => ({
			fontFamily: 'Montserrat',
			fontWeight: 400,
			fontSize: '48px',
			color: 'rgba(255, 255, 255, 0.3)',
		}),
		quote: () => ({
			color: 'brand.white',
			fontFamily: 'Montserrat',
			fontSize: '28px',
		}),
	},
}

export default TextStyle
