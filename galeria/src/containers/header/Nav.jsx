import React from 'react'
import { Link } from 'wouter'

const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='menu'>
				<li className='menu_item'>
					<Link to='/pandas' className='menu_item_link'>
						Pandas
					</Link>
				</li>

				<li className='menu_item'>
					<Link to='/batman' className='menu_item_link'>
						Batman
					</Link>
				</li>

				<li className='menu_item'>
					<Link to='/wolf' className='menu_item_link'>
						Wolf
					</Link>
				</li>

				<li className='menu_item'>
					<Link to='/pets' className='menu_item_link'>
						Pets
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
