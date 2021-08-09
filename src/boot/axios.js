import Vue from 'vue'
import axios from 'axios'
import notify from '../utils/api-notifications'
import AuthManager from '../utils/auth-manager'

export const api = axios.create({ baseURL: 'https://baraa.usol.ca' })

api.interceptors.request.use(
	(config) => {
		let tokens = AuthManager.getTokens()

		if (tokens.access) config.headers['Authorization'] = `Bearer ${tokens.access}`

		return config
	},
	(e) => Promise.reject(e),
)

api.interceptors.response.use(
	(res) => res,
	(e) => {
		notify(e)
		return Promise.reject(e)
	},
)

Vue.prototype.$axios = api
