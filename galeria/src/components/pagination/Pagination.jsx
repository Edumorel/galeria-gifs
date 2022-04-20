import { Link } from 'wouter'

import './pagination.css'

const Pagination = ({
	page = 1,
	maxGifs = 12,
	totalGifs = 100,
	keyword = 'batman',
}) => {
	const lastPage = Math.floor(totalGifs / maxGifs)
	page = Number(page)

	return (
		<div className='pagination'>
			{page > 1 && (
				<>
					<Link to={`/${keyword}/page/${1}`}>{1}</Link>
					<Link to={`/${keyword}/page/${page - 1}`}>{'<'}</Link>
				</>
			)}
			<span className='pagination_page'>{page}</span>
			{page < lastPage && (
				<>
					<Link to={`/${keyword}/page/${page + 1}`}>{'>'}</Link>
					<Link to={`/${keyword}/page/${lastPage}`}>{lastPage}</Link>
				</>
			)}
		</div>
	)
}

export default Pagination
