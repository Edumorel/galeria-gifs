import GifsItem from '../../components/gifsItem/GifsItem'

import './listOfGifs.css'

const ListOfGifs = ({ gifs = [], setImage, setViewImage }) => {
	return (
		<div className='list_of_gifs'>
			{gifs.map((singleGif) => (
				<GifsItem
					gif={singleGif}
					key={singleGif.id}
					setImage={setImage}
					setViewImage={setViewImage}
				/>
			))}
		</div>
	)
}

export default ListOfGifs
