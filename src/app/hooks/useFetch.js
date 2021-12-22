import { useState, useEffect } from 'react'
import axiosClient from 'app/lib/axiosInstance'

function useFetch(fetchUrl, beginFetch = true) {
	const initialState = {
		status: 'pending',
		data: null,
		error: '',
	}

	const [result, setResult] = useState(initialState)

	const [requestCounter, setRequestCounter] = useState(0)

	const triggerFetch = () => {
		setResult({
			status: 'pending',
			data: null,
			error: '',
		})
		setRequestCounter(requestCounter + 1)
	}

	const requestData = async (url) => {
		try {
			const response = await axiosClient.get(url)

			if (
				response.status >= 200 &&
				response.status < 300 &&
				response.data.status === 1
			) {
				return response.data
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

				throw Error('No response from server.')
			} else {
				// Something happened in setting up the request that triggered an Error.
				throw Error(error.message)
			}
		}
	}

	useEffect(() => {
		if (beginFetch) {
			requestData(fetchUrl)
				.then((response) => {
					setResult({
						status: 'fulfilled',
						data: response,
						error: '',
					})
				})
				.catch((error) => {
					setResult({
						status: 'rejected',
						data: null,
						error: error.message,
					})
				})
		}
	}, [fetchUrl, beginFetch, requestCounter])

	return [result.status, result.data, result.error, triggerFetch]
}

export default useFetch
