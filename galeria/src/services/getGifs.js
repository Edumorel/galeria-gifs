import { API_KEY, API_URL, maxGifs } from './settings'

export default function getGifs({ keyword = 'batman', page = 1 }) {
	const offset = maxGifs * (page - 1)

	const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${maxGifs}&offset=${offset}&rating=g&lang=en`

	return fetch(URL)
		.then((res) => res.json())
		.catch((err) => console.log(err))
}
