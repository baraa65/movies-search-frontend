import { api } from '../boot/axios'
import { LOGIN, PERSONAL_INFO, REGISTER } from './endpoints'

export default class AuthService {
	static register(form) {
		return api.post(REGISTER, form).then(({ data }) => data)
	}
	static login(form) {
		return api.post(LOGIN, form).then(({ data }) => data)
	}
	static getUser() {
		return api.get(PERSONAL_INFO, { disableNotify: true }).then(({ data }) => data)
	}
}
