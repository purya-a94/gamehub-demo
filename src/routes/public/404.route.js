// Libraries
import React from 'react'
import { useHistory } from 'react-router-dom'
// Assets and styles
import './404.route..css'

function NoMatchRoute() {
	const history = useHistory()

	return (
		<section className="NoMatchRoute">
			<h4 className="mb-2">404</h4>

			<p className="mb-5">Seems you are lost!</p>

			<button
				onClick={() => history.push('/')}
				className="btn c-btn-primary px-4"
			>
				Take me home
			</button>
		</section>
	)
}

export default NoMatchRoute
