import { useEffect, useState } from 'react'

import ListOfGifs from '../containers/listOfGifs/ListOfGifs'
import Pagination from '../components/pagination/Pagination'
import getGifs from '../services/getGifs'
import SelectedGif from '../components/selectedGif/SelectedGif'
import Header from '../containers/header/Header'

const Gifs = ({ params }) => {
	let { keyword, page } = params

	const [state, setState] = useState('loading')
	const [apiData, setApiData] = useState([])
	const [viewImage, setViewImage] = useState(false)
	const [image, setImage] = useState('')

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
	}, [params])

	if (state == 'load')
		return (
			<div className='gifs_content'>
				{viewImage && <SelectedGif image={image} setViewImage={setViewImage} />}

				<Header />

				<main>
					<Pagination
						page={page}
						maxGifs={apiData.pagination.count}
						totalGifs={apiData.pagination.total_count}
						keyword={keyword}
					/>

					<ListOfGifs
						gifs={apiData.data}
						setImage={setImage}
						setViewImage={setViewImage}
					/>

					<Pagination
						page={page}
						maxGifs={apiData.pagination.count}
						totalGifs={apiData.pagination.total_count}
						keyword={keyword}
					/>
				</main>
			</div>
		)
}

export default Gifs
