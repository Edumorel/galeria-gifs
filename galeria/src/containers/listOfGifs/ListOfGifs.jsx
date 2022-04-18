import { useState, useEffect } from 'react'

import Load from '../../components/load/Load'

import getGifs from '../../services/getGifs'

const ListOfGifs = ({ keyword = 'panda' }) => {
	const [state, setState] = useState('loading')
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setState('loading')

		getGifs({ keyword })
			.then((data) => {
				setGifs(data.data)
				setState('load')
			})
			.catch((err) => {
				console.log(err)
				setState('error')
			})
	}, [keyword])

	if (state === 'loading') return <Load />
	else if (state === 'load')
		return (
			<>
				{gifs.map((singleGif) => (
					<div key={singleGif.id}>{singleGif.title}</div>
				))}
			</>
		)

	return <div></div>
}

export default ListOfGifs
