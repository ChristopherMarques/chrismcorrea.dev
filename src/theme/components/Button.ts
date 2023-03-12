const ButtonStyle = {
	variants: {
		hireUs: () => ({
			background: 'brand.green',
			color: 'brand.main',
			fontSize: 25,
			borderRadius: 20,
			boxShadow: '0px 10px 60px rgba(202, 252, 1, 0.1)',
			width: '164px',
			height: '40px',
			fontFamily: 'Montserrat',
		}),
		green: () => ({
			background: 'brand.green',
			color: 'brand.main',
			fontSize: 25,
			borderRadius: 20,
			boxShadow: '0px 10px 60px rgba(202, 252, 1, 0.1)',
			fontFamily: 'Montserrat',
		}),
		banner: () => ({
			background: 'rgba(202, 252, 1, 0.1)',
			border: '1px solid #CAFC01',
			boxShadow: '0px 10px 60px rgba(202, 252, 1, 0.1)',
			borderRadius: '50px',
			color: 'brand.main',
			fontSize: '18px',
			fontWeight: 200,
		}),
	},
}

export default ButtonStyle
