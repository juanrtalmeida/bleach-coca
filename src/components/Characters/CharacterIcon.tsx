import React, { memo } from 'react'
import s from './CharactersIcon.module.css'

type CaracterIconPropType = {
	image: string
	name: string
	isSelected: boolean
}

export const CharacterIcon = memo(function CharacterIcon({ image, name, isSelected }: CaracterIconPropType) {
	return isSelected ? (
		<img className={s.miniIconSelected} src={image} alt={name} />
	) : (
		<img className={s.miniIcon} src={image} alt={name} />
	)
})
