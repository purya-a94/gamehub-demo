import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ children, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	)
}

export default ProtectedRoute
