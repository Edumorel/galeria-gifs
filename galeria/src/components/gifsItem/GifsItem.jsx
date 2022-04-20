import { useState } from 'react'
import Load from '../load/Load'
import './gifsItem.css'

const GifsItem = ({ gif, setImage, setViewImage }) => {
	const { images } = gif
	const image = images['downsized_large']
	const [load, setLoad] = useState(false)

	const style = image.width > image.height ? 'horizontal' : 'vertical'

	const handleClick = () => {
		setImage(image.url)
		setViewImage(true)
	}

	return (
		<div className='gif_item' onClick={handleClick}>
			<div className='gif_item_image_content'>
				<img
					src={image.url}
					alt={gif.title}
					className={`gif_item_image ${style}`}
					loading='lazy'
					style={!load ? { opacity: 0 } : {}}
					onLoad={() => setLoad(true)}
				/>
				{!load && <Load />}
			</div>

			<div className='git_item_title_content'>
				<h3 className='git_item_title'>{gif.title}</h3>
			</div>
		</div>
	)
}

export default GifsItem
