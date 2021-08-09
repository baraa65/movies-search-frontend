import AuthService from '../../services/auth.service'
import AuthManager from '../../utils/auth-manager'

export default {
	namespaced: true,
	actions: {
		async login({}, form) {
			let data = await AuthService.login(form)

			AuthManager.saveTokens(data)

			return data
		},
	},
}
