import { useState, useEffect } from 'react'
import GifsItem from '../../components/gifsItem/GifsItem'
import Load from '../../components/load/Load'
import getGifs from '../../services/getGifs'

import './listOfGifs.css'

const ListOfGifs = ({ keyword = 'panda', page = 1 }) => {
	if (state === 'loading') return <Load />
	else if (state === 'load')
		return (
			<div className='list_of_gifs'>
				{gifs.map((singleGif) => (
					<GifsItem gif={singleGif} key={singleGif.id} />
				))}
			</div>
		)

	return <div>Ha habido un error</div>
}

export default ListOfGifs
