import React from 'react'
import s from './Footer.module.css'

export function Footer() {
	return (
		<footer className={s.background}>
			<div className={s.container}>
				<p className={s.text}>
					Feito por{' '}
					<a href="https://www.linkedin.com/in/juanrtalmeida/" target="_blank" rel="noreferrer">
						Juan Almeida
					</a>
				</p>
				<small className={s.detail}>
					Este site não tem qualquer conexão com a empresa Coca-Cola, foi feito apenas como uma brincadeira pelo
					lançamento do anime Bleach e a latinha feita no Japão**
				</small>
			</div>
		</footer>
	)
}
