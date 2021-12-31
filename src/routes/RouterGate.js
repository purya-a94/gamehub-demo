import React, { Suspense, lazy } from 'react'
// import { useSelector } from 'react-redux'
import {
	Switch,
	Route,
	Redirect,
	useHistory,
	useLocation,
} from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'components/ErrorFallback'
import PageLoadingFallback from 'components/PageLoadingFallback'

const AppEntry = lazy(() => import('routes/AppEntry.route'))
const Login = lazy(() => import('routes/public/Login.route'))
const SignUp = lazy(() => import('routes/public/SignUp.route'))
const NoMatchRoute = lazy(() => import('routes/public/404.route'))

function RouterGate() {
	// const authenticationStatus = useSelector(
	// 	(state) => state.user.isAuthenticated
	// )

	// const isLocalStorageAvailable = !!localStorage.getItem('user')

	// const isUserAuthenticated = authenticationStatus && isLocalStorageAvailable
	const isUserAuthenticated = true

	const history = useHistory()
	const location = useLocation()

	return (
		<div className="align-self-center flex-grow-1 d-flex flex-column w-100">
			{/*
				Error boundary for the entire app.
				Since we're lazy-loading the pages' files, there is the possibility
				of a user's network connection being so slow to the point of not loading
				any files. This error boundary can catch such a case.
			*/}
			<ErrorBoundary
				FallbackComponent={(errorProps) => (
					<ErrorFallback {...errorProps} />
				)}
				onReset={() => {
					history.replace(location.pathname)
				}}
			>
				{/*
					React Suspense to lazy load routes and pages and have a loading fallback.
				*/}
				<Suspense fallback={<PageLoadingFallback />}>
					<Switch>
						{/*
							Login
						*/}
						<Route path="/login" exact={true}>
							{isUserAuthenticated ? (
								<Redirect to="/" />
							) : (
								<Login />
							)}
						</Route>

						{/*
							Sign up
						*/}
						<Route path="/sign-up" exact={true}>
							{isUserAuthenticated ? (
								<Redirect to="/" />
							) : (
								<SignUp />
							)}
						</Route>

						{/*
							No match - 404 page.
						*/}
						<Route path="/not-found" exact={true}>
							<NoMatchRoute />
						</Route>

						{/*
							INDEX
						*/}
						<Route path="/">
							{isUserAuthenticated ? (
								<AppEntry
									isAuthenticated={isUserAuthenticated}
								/>
							) : (
								<Redirect to="/login" />
							)}
						</Route>
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</div>
	)
}

export default RouterGate
