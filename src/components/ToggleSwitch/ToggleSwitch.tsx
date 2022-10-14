import React from 'react'
import s from './ToggleSwitch.module.css'
export function ToggleSwitch({ checked, onClick }: { checked: boolean; onClick: () => void }) {
	return (
		<div onClick={onClick}>
			<label className={`${s.switch} ${s.switch200}`}>
				<input type="checkbox" checked={checked} readOnly />
				<span className={`${s.slider} ${s.slider200}`}></span>
			</label>
		</div>
	)
}
