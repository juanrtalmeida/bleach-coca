import React, { forwardRef } from 'react'
import s from './FinalArc.module.css'
import video from '@assets/bleach-video-war.mp4'
import dualBlade from '@assets/dual-blade.png'
import { useBreakpoint } from '@hooks/useBreakpoint/useBreakpoint'

const FinalArc = forwardRef(function FinalArc(props, ref: React.ForwardedRef<HTMLVideoElement>) {
	const { isTablet } = useBreakpoint()
	return (
		<section className={s.finalArchBackground}>
			<div className={s.container}>
				<div className={s.expander}>
					<p className={s.finalArchText}>Final Arc</p>
					<img className={s.image} src={dualBlade} alt="Dual Blade Ichigo" />
				</div>
			</div>
			<div className={s.textWrapper}>
				<div className={s.container}>
					<p className={s.text}>
						O ultimo arco do anime Bleach recebe o nome de <i>"Thousand-Year Blood War"</i> e traz a conclusão épica da
						história de <i>Ichigo Kurosaki.</i>
					</p>
					<p className={s.text}>
						Neste arco, traduzido como “A Guerra Sangrenta dos Mil Anos”, <i>Yhwach</i>, o imperador dos <i>Quincy</i>{' '}
						retorna após mais de 900 anos selado e declara guerra contra não só a Soul Society, como todo o universo que
						conhecemos. Cabe aos <i>13 Esquadrões</i>, Ichigo e seus amigos deterem Yhwach e seu exército de Quincys de
						conseguir o poder de manipular até mesmo a própria realidade.
					</p>
				</div>
				{!isTablet && <video ref={ref} className={s.video} src={video} autoPlay muted loop />}
			</div>
		</section>
	)
})

export { FinalArc }
