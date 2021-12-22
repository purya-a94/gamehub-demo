import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

/**
 *	* Note:
 * 	1.
 */

const protectedRoutes = [
	// Home
	{
		path: '/home',
		component: lazy(() => import('routes/app/Home.route')),
		exact: true,
	},
	// Index
	{
		path: '/',
		component: () => <Redirect to="/home" />,
		exact: true,
	},
	// 404 - not found
	{
		path: '*',
		component: () => <Redirect to="/not-found" />,
		exact: false,
	},
]

export default protectedRoutes
