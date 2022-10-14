import React, { useEffect, useRef } from 'react'
import s from './NoSugar.module.css'
import cokeCan from '@assets/no-effect.png'
import { ReactComponent as CircleDashed } from '@assets/icons/circle-dashed-outer.svg'
import { ReactComponent as CircleDashedInner } from '@assets/icons/circle-dashed-inner.svg'

export function NoSugar() {
	const myRef = useRef<HTMLHeadingElement>(null)
	const iamgeRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(s.entryAnimation)
					}
				})
			},
			{ rootMargin: '-50px', threshold: 0.5 }
		)

		if (myRef.current) {
			observer.observe(myRef.current)
		}
		if (iamgeRef.current) {
			observer.observe(iamgeRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section className={s.noSugar}>
			<div className={s.container} id="no-sugar">
				<h2 ref={myRef} className={`${s.animated} ${s.header}`}>
					Sem açúcar!
				</h2>
				<p className={s.noSugarText}>
					Um <span>novo sabor</span>
				</p>
				<p className={s.noSugarText}>A mesma preocupação com o seu estilo de vida</p>
				<img ref={iamgeRef} className={`${s.animatedReverse} ${s.image}`} src={cokeCan} />
				<CircleDashed className={s.circleDashed} />
				<CircleDashedInner className={s.circleDashedInner} />
				<button className={s.button} type="button">
					Onde comprar
				</button>
			</div>
		</section>
	)
}
