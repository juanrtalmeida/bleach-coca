import React, { useRef, useState } from 'react'
import ichigo from './assets/no-back.png'
import backgroundVideo from './assets/background-video.mp4'
import { ReactComponent as ArrowIcon } from './assets/icons/arrows.svg'
import s from './App.module.css'
import { NoSugar } from '@components/NoSugar/NoSugar'
import { FinalArc } from '@components/FinalArc/FinalArc'
import { Characters } from '@components/Characters/Characters'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { Footer } from '@components/Footer/Footer'
import { ToggleSwitch } from '@components/ToggleSwitch/ToggleSwitch'
import { useBreakpoint } from '@hooks/useBreakpoint/useBreakpoint'

function App() {
	const [loading, setLoading] = useState(true)
	const [check, setCheck] = useState(false)
	const loader = document.getElementById('loader')
	const { isTablet } = useBreakpoint()
	if (loader) {
		setTimeout(() => {
			setLoading(!loading)
			loader.remove()
		}, 2000)
	}
	const videoRef = useRef<HTMLVideoElement>(null)
	return loading ? null : (
		<div className={s.app}>
			<section className={s.home}>
				<div
					className={s.sound}
					onClick={(e) => {
						e.preventDefault()
						if (videoRef.current) {
							videoRef.current.muted = !videoRef.current.muted
							setCheck(!videoRef.current.muted)
							videoRef.current.volume = 0.2
						}
					}}
				>
					{!isTablet ? <ToggleSwitch checked={check} onClick={() => setCheck(!check)} /> : null}
				</div>
				<video className={s.video} src={backgroundVideo} autoPlay muted loop />
				<div className={s.heading}>
					<h1 className={s.bleachHeading}>BLEACH</h1>
					<img className={s.image} src={ichigo} alt="Ichigo looking up" />
					<h1 className={s.cocaHeading}>Coca-Cola</h1>
					<p className={s.paragraph}> Experimente o sabor da Soul Society!</p>
				</div>
				<ArrowIcon
					onClick={() => document.getElementById('no-sugar')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
					className={s.icon}
				/>
			</section>
			<NoSugar />
			<FinalArc ref={videoRef} />
			<Characters />
			<Footer />
		</div>
	)
}

export default App
