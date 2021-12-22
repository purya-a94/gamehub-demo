import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHS, BREADCRUMB_PATH_MAP } from 'app/helpers/constants'
import './Breadcrumb.css'

function Breadcrumb() {
	const location = useLocation()

	/**
	 * Split location's URL path into its parts and filter the empty ones out.
	 * Only the first one is an empty string.
	 */
	const pathSplinters = location.pathname.split('/').filter((item) => !!item)

	// Create an array of paths containing the complete path to each part of the URL.
	const crumbs = pathSplinters
		.reduce((accu, splinter, currIdx) => {
			if (currIdx === 0) {
				accu.push(`/${splinter}`)
			} else {
				accu.push(accu[currIdx - 1] + `/${splinter}`)
			}

			return accu
		}, [])
		// Checking for non-existent paths and filtering them out (e.g. "home").
		.filter((crumb) => Object.keys(BREADCRUMB_PATH_MAP).includes(crumb))

	return crumbs.length ? (
		<div className="Breadcrumb">
			<ul className="Breadcrumb__list">
				{/* "Home" link which resides outside of our React app */}
				<li className="Breadcrumb__item">
					<a href={PATHS.home}>Home</a>
				</li>

				{/* Rest of the breadcrumb links */}
				{crumbs.map((path, idx, arr) => {
					return (
						<li key={path + idx} className="Breadcrumb__item">
							{/* The last item doesn't need to be a link to itself! */}
							{idx === arr.length - 1 ? (
								BREADCRUMB_PATH_MAP[path]
							) : (
								<Link to={path}>
									{BREADCRUMB_PATH_MAP[path]}
								</Link>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	) : (
		false
	)
}

export default Breadcrumb
