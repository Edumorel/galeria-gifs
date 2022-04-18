import './gifsItem.css'

const GifsItem = ({ gif }) => {
	const { images } = gif
	const image = images['downsized_large']

	const style = image.width > image.height ? 'horizontal' : 'vertical'

	return (
		<div className='gif_item'>
			<div className='gif_item_image_content'>
				<img
					src={image.url}
					alt={gif.title}
					className={`gif_item_image ${style}`}
				/>
			</div>

			<div className='git_item_title_content'>
				<h3 className='git_item_title'>{gif.title}</h3>
			</div>
		</div>
	)
}

export default GifsItem
