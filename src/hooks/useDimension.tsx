import { useEffect, useState } from 'react'

const useDimension = () => {
	const [dimension, setDimension] = useState({ widh: 0, height: 0 })

	const updateDimension = () => {
		const { innerWidth, innerHeight } = window
		setDimension({ widh: innerWidth, height: innerHeight })
	}

	useEffect(() => {
		updateDimension()

		window.addEventListener('resize', updateDimension)

		return () => {
			window.removeEventListener('resize', updateDimension)
		}
	}, [])

	return dimension
}

export default useDimension
