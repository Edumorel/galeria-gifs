import React from 'react'
import './selectedGif.css'

const SelectedGif = ({ image = '', setViewImage }) => {
	return (
		<div
			className='selected_gif'
			onClick={() => {
				setViewImage(false)
			}}
		>
			<img src={image} />
		</div>
	)
}

export default SelectedGif
