import axiosInstance from 'app/lib/axiosInstance'

const signUp = async (email, password, captcha, googleToken = null) => {
	try {
		const response = await axiosInstance.post('/User/Register', {
			UserName: email,
			Password: password,
			Captcha: {
				Token: captcha.Token,
				Expire: captcha.Expire,
				Code: captcha.Code,
			},
			Credential: googleToken,
		})

		if (
			response.status >= 200 &&
			response.status < 300 &&
			response.data.status === 1
		) {
			const responseValues = response.data.value

			const userInfo = {
				uid: responseValues.userId,
				accessToken: responseValues.token,
			}

			localStorage.setItem('user', JSON.stringify(userInfo))

			return userInfo
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

const login = async (email, password, captcha, googleToken = null) => {
	try {
		const response = await axiosInstance.post('/User/Login', {
			UserName: email,
			Password: password,
			Captcha: {
				Token: captcha.Token,
				Expire: captcha.Expire,
				Code: captcha.Code,
			},
			Credential: googleToken,
		})

		if (
			response.status >= 200 &&
			response.status < 300 &&
			response.data.status === 1
		) {
			const responseValues = response.data.value

			const userInfo = {
				uid: responseValues.userId,
				accessToken: responseValues.token,
			}

			localStorage.setItem('user', JSON.stringify(userInfo))

			return userInfo
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

const logout = (logoutCallback) => {
	localStorage.removeItem('user')

	logoutCallback && logoutCallback()
}

export { signUp, login, logout }
