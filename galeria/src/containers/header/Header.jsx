import Nav from './Nav'
import Search from '../../components/search/Search'

import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<Nav />

			<Search />
		</header>
	)
}

export default Header
