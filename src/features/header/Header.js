import React from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from 'app/helpers/constants'
import './Header.css'

function Header() {
	return (
		<nav className="Header">
			{/* =============
				Logo
			*/}
			<a href={PATHS.home} className="Header__logo">
				{/* <img src={IMG_LOGO} alt="Game hub logo" /> */}
			</a>

			{/* =============
				Navbar
			*/}
			<ul className="Header__navbar">
				<li className="Header__navbar-item">
					<Link to={PATHS.login}>Link I</Link>
				</li>
				<li className="Header__navbar-item">
					<Link to={PATHS.signUp}>Link II</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Header
