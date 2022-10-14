import { useBleachCharacters } from '@hooks/useBleachCharacters/useBleachCharacters'
import React, { useState } from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrows.svg'
import s from './Characters.module.css'
import Slider from 'react-slick'

export function Characters() {
	const bleachCharacters = useBleachCharacters()
	const [currentChar, setCurrentChar] = useState(bleachCharacters[0])
	return (
		<section className={s.backgroundCharacters}>
			<h1 className={s.title}> Personagens </h1>
			<div className={s.container}>
				<div className={s.sliderContainer}>
					<Slider
						beforeChange={(_, newChar) => setCurrentChar(bleachCharacters[newChar])}
						className={s.slider}
						infinite
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						nextArrow={<ArrowIcon className={s.arrow} />}
						prevArrow={<ArrowIcon className={s.arrow} />}
					>
						{bleachCharacters.map((quincy) => (
							<img src={quincy.image} key={quincy.name} />
						))}
					</Slider>
				</div>
				<div className={s.charInfos}>
					<h1 className={s.name}>{currentChar.name}</h1>
					<p className={s.japaneseName}>{currentChar.japaneseName}</p>
					<p>{currentChar.ocupation}</p>
				</div>
			</div>
		</section>
	)
}
