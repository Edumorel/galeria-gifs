import Header from '../containers/header/Header'
import Nav from '../containers/header/Nav'

import '../styles/home.css'

const Home = () => {
	return (
		<>
			<Header />

			<main>
				<h1 className='home_title'>Bienvenido a Gifgram</h1>
				<h2 className='home_subtitle'>Tu galería de gifs de confianza</h2>
			</main>
		</>
	)
}

export default Home
