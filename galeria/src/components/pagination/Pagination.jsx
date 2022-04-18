import { Link } from 'wouter'

import './pagination.css'

const Pagination = ({
	page = 1,
	maxGifs = 12,
	totalGifs = 100,
	keyword = 'batman',
	setPage,
}) => {
	const lastPage = Math.floor(totalGifs / maxGifs)

	return (
		<div className='pagination'>
			{page > 1 && (
				<>
					<Link to={`/${keyword}?page=${1}`} onClick={() => setPage(1)}>
						{1}
					</Link>
					<Link
						to={`/${keyword}?page=${page - 1}`}
						onClick={() => setPage(page - 1)}
					>
						{'<'}
					</Link>
				</>
			)}
			<span className='pagination_page'>{page}</span>
			{page < lastPage && (
				<>
					<Link
						to={`/${keyword}?page=${page + 1}`}
						onClick={() => setPage(page + 1)}
					>
						{'>'}
					</Link>
					<Link
						to={`/${keyword}?page=${lastPage}`}
						onClick={() => setPage(lastPage)}
					>
						{lastPage}
					</Link>
				</>
			)}
		</div>
	)
}

export default Pagination
