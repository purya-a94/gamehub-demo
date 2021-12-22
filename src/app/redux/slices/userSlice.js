import { createSlice } from '@reduxjs/toolkit'

const storedUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
	// isAuthenticated: storedUser ? true : false,
	isAuthenticated: true,
	uid: storedUser ? storedUser.uid : null,
	accessToken: storedUser ? storedUser.accessToken : null,
	profileData: null,
	// profileData: {
	// 	fullName: null,
	// 	email: null,
	//	hasPassword: false,
	// 	gender: null,
	// 	age: null,
	// 	countryId: null,
	// 	stateId: null,
	// 	profilePic: null,
	// },
}

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			return {
				...state,
				isAuthenticated: true,
				uid: action.payload.uid,
				accessToken: action.payload.accessToken,
			}
		},
		logout: (state) => {
			return {
				isAuthenticated: false,
				uid: null,
				accessToken: null,
				profileData: null,
			}
		},
		storeUserDetails: (state, action) => {
			state.profileData = action.payload
		},
	},
})

export const { login, logout, storeUserDetails } = user.actions

export default user.reducer
