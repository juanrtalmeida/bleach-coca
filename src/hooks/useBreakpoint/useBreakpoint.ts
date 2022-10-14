import { useEffect, useState } from 'react'

export function useBreakpoint() {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	})

	const handleResize = () => {
		setWindowSize({
			height: window.innerHeight,
			width: window.innerWidth
		})
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [windowSize.width])

	return { isTablet: windowSize.width <= 768 }
}
