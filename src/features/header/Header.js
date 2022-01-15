import React from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from 'app/helpers/constants'
import './Header.scss'

function Header() {
	return (
		<nav className="Header">
			{/* =============
				Logo
			*/}
			<Link to={PATHS.dashboard} className="Header__logo">
				<img src="" alt="Game hub logo" />
			</Link>

			{/* =============
				Navbar
			*/}
			<ul className="Header__navbar">
				<li className="Header__navbar-item">
					<Link to={PATHS.dashboard}>Dashboard</Link>
				</li>
				{/* <li className="Header__navbar-item">
					<Link to={PATHS.signUp}>Link II</Link>
				</li> */}
			</ul>

			{/* =============
				Navbar
			*/}
			<Link to={PATHS.profile} className="btn Header__profile-btn">
				This Nerd's Profile
			</Link>
		</nav>
	)
}

export default Header
