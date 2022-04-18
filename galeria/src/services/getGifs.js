import { API_KEY, API_URL } from './settings'

export default function getGifs({ keyword = 'batman' }) {
	const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

	return fetch(URL)
		.then((res) => res.json())
		.catch((err) => console.log(err))
}
