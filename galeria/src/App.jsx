import { Route } from 'wouter'
import Home from './pages/Home'
import Gifs from './pages/Gifs'

import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Home} />
			<Route path='/:keyword' component={Gifs} />
			<Route path='/:keyword/page/:page' component={Gifs} />
		</div>
	)
}

export default App
