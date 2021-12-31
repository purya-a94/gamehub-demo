import React, { Suspense } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { Switch } from 'react-router-dom'
// import { getUserDetails } from 'app/services/user.service'
// import { logout as authLogout } from 'app/services/auth.service'
// import { logout, storeUserDetails } from 'app/redux/slices/userSlice'
// import { logout } from 'app/redux/slices/userSlice'
import ProtectedRoute from 'routes/ProtectedRoute'
import Header from 'features/header/Header'
// import Breadcrumb from 'features/breadcrumb/Breadcrumb'
import PageLoadingFallback from 'components/PageLoadingFallback'
import PageCard from 'components/layouts/PageCard'
import protectedRoutes from 'routes/protected-routes'
import './AppEntry.route.css'

function AppEntry({ isAuthenticated }) {
	// const dispatch = useDispatch()

	// const profileData = useSelector((state) => state.user.profileData)

	// const [requestError, setRequestError] = useState(null)

	// useEffect(() => {
	// 	if (profileData === null && requestError === null) {
	// 		getUserDetails()
	// 			.then((response) => {
	// 				dispatch(storeUserDetails(response))
	// 			})
	// 			.catch((error) => {
	// 				setRequestError(error.message)
	// 			})
	// 	}
	// }, [dispatch, profileData, requestError])

	return (
		<div className="AppEntry">
			<Header />

			{/* <Breadcrumb /> */}

			{/*
				React Suspense to lazy load routes and pages and have a loading fallback.
			*/}
			<Suspense fallback={<PageLoadingFallback />}>
				{/* {requestError !== null ? ( */}
				{false
					? false
					: /*	=================
						Error view
					*/
					  // <div className="flex-grow-1 d-flex flex-column align-items-center pt-5">
					  // 	<p className="mb-5 text-center">{requestError}</p>

					  // 	<div className="d-flex justify-content-center align-items-center gap-4">
					  // 		<button
					  // 			onClick={() =>
					  // 				authLogout(() => dispatch(logout()))
					  // 			}
					  // 			className="btn btn-outline-dark px-3"
					  // 		>
					  // 			Exit
					  // 		</button>
					  // 		<button
					  // 			onClick={(e) => setRequestError(null)}
					  // 			className="btn c-btn-primary px-5"
					  // 		>
					  // 			Try again
					  // 		</button>
					  // 	</div>
					  // </div>
					  // profileData && (
					  true && (
							/*	=================
							Main view
						*/
							<div className="AppEntry__page">
								<Switch>
									{protectedRoutes.map(
										(
											{
												path,
												component: ProtectedPage,
												exact,
											},
											idx
										) => (
											<ProtectedRoute
												key={idx}
												path={path}
												isAuthenticated={
													isAuthenticated
												}
												exact={exact}
											>
												<PageCard>
													{/* The component to load for this path */}
													<ProtectedPage />
												</PageCard>
											</ProtectedRoute>
										)
									)}
								</Switch>
							</div>
					  )}
			</Suspense>
		</div>
	)
}

export default AppEntry
