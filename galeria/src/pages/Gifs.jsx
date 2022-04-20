import { useEffect, useState } from 'react'

import ListOfGifs from '../containers/listOfGifs/ListOfGifs'
import Pagination from '../components/pagination/Pagination'
import getGifs from '../services/getGifs'

const Gifs = ({ params }) => {
	let { keyword, page } = params

	const [state, setState] = useState('loading')
	const [apiData, setApiData] = useState([])

	useEffect(() => {
		if (!page) page = 1

		getGifs({ keyword, page })
			.then((data) => {
				setApiData(data)
				setState('load')
			})
			.catch((err) => {
				console.log(err)
				setState('error')
			})
	}, [page])

	if (state == 'load')
		return (
			<div>
				<Pagination
					page={page}
					maxGifs={apiData.pagination.count}
					totalGifs={apiData.pagination.total_count}
					keyword={keyword}
				/>

				<ListOfGifs gifs={apiData.data} />
				<Pagination
					page={page}
					maxGifs={apiData.pagination.count}
					totalGifs={apiData.pagination.total_count}
					keyword={keyword}
				/>
			</div>
		)
}

export default Gifs
