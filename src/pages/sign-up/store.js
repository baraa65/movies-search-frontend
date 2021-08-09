import AuthService from '../../services/auth.service'
import AuthManager from '../../utils/auth-manager'

export default {
	namespaced: true,
	actions: {
		async register({}, form) {
			let data = await AuthService.register(form)

			AuthManager.saveTokens(data)

			return data
		},
	},
}
