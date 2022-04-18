import { useEffect, useState } from 'react'

import ListOfGifs from '../containers/listOfGifs/ListOfGifs'

const Gifs = ({ params }) => {
	const { keyword } = params

	const [state, setState] = useState('loading')
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setState('loading')

		getGifs({ keyword, page })
			.then((data) => {
				setGifs(data.data)
				setState('load')
			})
			.catch((err) => {
				console.log(err)
				setState('error')
			})
	}, [keyword])

	return (
		<div>
			<ListOfGifs keyword={keyword} />
		</div>
	)
}

export default Gifs
