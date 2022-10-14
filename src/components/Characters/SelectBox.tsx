import React, { useState } from 'react'
import { CharacterIcon } from './CharacterIcon'
import s from './SelectBox.module.css'

type CharacterType = {
	name: string
	japaneseName: string
	image: string
	ocupation: string
	afiliation: string
}

export function SelectBox({ characters }: { characters: CharacterType[] }) {
	const [selectedChar, setSelectedChar] = useState(characters.find((_, index) => index === 0))
	return (
		<div className={s.selectionContainer}>
			<p className={s.name}>{selectedChar?.name}</p>
			<p className={s.japaneseName}>{selectedChar?.japaneseName}</p>
			<img className={s.selectedImage} src={selectedChar?.image} alt={selectedChar?.name} />
			<div className={s.iconsContainer}>
				{characters.map((char) => (
					<div key={char.name} onClick={() => setSelectedChar(char)}>
						<CharacterIcon
							isSelected={char.name === selectedChar?.name ? true : false}
							image={char.image}
							name={char.name}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
