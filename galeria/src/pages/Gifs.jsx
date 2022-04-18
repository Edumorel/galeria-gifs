import { useEffect, useState } from 'react'

import ListOfGifs from '../containers/listOfGifs/ListOfGifs'
import Pagination from '../components/pagination/Pagination'
import getGifs from '../services/getGifs'

const Gifs = ({ params }) => {
	const { keyword } = params

	const [state, setState] = useState('loading')
	const [apiData, setApiData] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		let urlPage = 1

		const url = window.location.href
		const variables = url.split('?')[1]

		if (variables) {
			urlPage = Number(variables.split('=')[1])

			setPage(urlPage)
		}

		getGifs({ keyword, page: urlPage })
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
					setPage={setPage}
				/>

				<ListOfGifs gifs={apiData.data} />
				<Pagination
					page={page}
					maxGifs={apiData.pagination.count}
					totalGifs={apiData.pagination.total_count}
					keyword={keyword}
					setPage={setPage}
				/>
			</div>
		)
}

export default Gifs
