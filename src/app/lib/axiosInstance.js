import axios from 'axios'
import { BASE_API_URL } from 'app/helpers/constants'

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
})

axiosInstance.defaults.headers = {
	'Content-Type': 'application/json',
}

// axiosInstance.interceptors.request.use((config) => {
// 	const user = JSON.parse(localStorage.getItem('user'))

// 	if (user && user.accessToken) {
// 		// "Bearer" keyword is already included in the beginning of accessToken received
// 		// from server and stored in Redux so we simply assign the whole accessToken to header.
// 		config.headers.Authorization = user.accessToken
// 		config.headers.uid = user.uid
// 	}

// 	return config
// }, null)

export default axiosInstance
