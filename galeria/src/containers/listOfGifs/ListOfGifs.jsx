import GifsItem from '../../components/gifsItem/GifsItem'

import './listOfGifs.css'

const ListOfGifs = ({ gifs = [] }) => {
	return (
		<div className='list_of_gifs'>
			{gifs.map((singleGif) => (
				<GifsItem gif={singleGif} key={singleGif.id} />
			))}
		</div>
	)
}

export default ListOfGifs
