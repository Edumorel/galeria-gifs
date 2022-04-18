import ListOfGifs from './containers/listOfGifs/ListOfGifs'

import { Route } from 'wouter'
import Home from './pages/Home'
import Gifs from './pages/Gifs'

import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Home} />
			<Route path='/:keyword' component={Gifs} />
		</div>
	)
}

export default App
