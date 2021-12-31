import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

/**
 *	* Note:
 * 	1.
 */

const protectedRoutes = [
	// Profile
	{
		path: '/profile',
		component: lazy(() => import('routes/root/Profile.route')),
		exact: true,
	},
	// Home
	{
		path: '/dashboard',
		component: lazy(() => import('routes/root/Dashboard.route')),
		exact: true,
	},
	// Index
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />,
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
