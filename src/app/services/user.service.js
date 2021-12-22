import axiosInstance from 'app/lib/axiosInstance'

const getUserDetails = async () => {
	try {
		const response = await axiosInstance.get('/User/GetUserProfile')

		if (
			response.status >= 200 &&
			response.status < 300 &&
			response.data.status === 1
		) {
			const responseValues = response.data.value

			const userData = {
				fullName: responseValues.fullName,
				email: responseValues.email,
				hasPassword: responseValues.havePassword,
				gender: responseValues.gender,
				age: responseValues.age,
				countryId: responseValues.countryId,
				stateId: responseValues.stateId,
				profilePic: responseValues.profilePic,
			}
			return userData
		} else {
			throw Error(response.data.value || 'Request has failed!')
		}
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx.

			// throw Error(
			// 	`${error.response.status} - ${error.response.statusText}`
			// )
			throw Error(
				error.response.data.value ||
					`${error.response.status} - ${error.response.statusText}`
			)
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest
			// in the browser and an instance of
			// http.ClientRequest in node.js.
			throw Error(`No response from server.`)
		} else {
			// Something happened in setting up the request that triggered an Error.
			throw Error(error.message)
		}
	}
}

const updateUserDetails = async ({
	fullName,
	age,
	gender,
	countryId,
	stateId,
	email,
}) => {
	try {
		const response = await axiosInstance.post('/User/UpdateUserProfile', {
			FullName: fullName,
			Age: age,
			Gender: Number(gender) || null,
			CountryId: Number(countryId) || null,
			StateId: Number(stateId) || null,
			Email: email,
		})

		if (
			response.status >= 200 &&
			response.status < 300 &&
			response.data.status === 1
		) {
			return response.data.value
		} else {
			throw Error(response.data.value || 'Request has failed!')
		}
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx.

			// throw Error(
			// 	`${error.response.status} - ${error.response.statusText}`
			// )
			throw Error(
				error.response.data.value ||
					`${error.response.status} - ${error.response.statusText}`
			)
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest
			// in the browser and an instance of
			// http.ClientRequest in node.js.
			throw Error(`No response from server.`)
		} else {
			// Something happened in setting up the request that triggered an Error.
			throw Error(error.message)
		}
	}
}

const changePassword = async (uid, oldPass, newPass) => {
	try {
		const response = await axiosInstance.post('/User/ChangeUserPassword', {
			UserId: uid,
			oldPassword: oldPass,
			NewPassword: newPass,
		})
		if (
			response.status >= 200 &&
			response.status < 300 &&
			response.data.status === 1
		) {
			return response.data
		} else {
			throw Error('Password update failed!')
		}
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx.
			// throw Error(
			// 	`${error.response.status} - ${error.response.statusText}`
			// )
			throw Error(
				error.response.data.value ||
					`${error.response.status} - ${error.response.statusText}`
			)
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest
			// in the browser and an instance of
			// http.ClientRequest in node.js.
			throw Error(`No response from server`)
		} else {
			// Something happened in setting up the request that triggered an Error.
			throw Error(error.message)
		}
	}
}

export { getUserDetails, updateUserDetails, changePassword }
