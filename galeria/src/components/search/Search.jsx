import { useLocation } from 'wouter'
import './search.css'

const Search = () => {
	const [location, setLocation] = useLocation()

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		const data = Object.fromEntries(new FormData(form))
		let search = data.search.replace(' ', '-')

		form.reset()

		setLocation(`/${search}`)
	}

	return (
		<form className='search' onSubmit={handleSubmit}>
			<input
				className='search_input'
				type='text'
				placeholder='Busca alguna categoria'
				name='search'
			/>
		</form>
	)
}

export default Search
