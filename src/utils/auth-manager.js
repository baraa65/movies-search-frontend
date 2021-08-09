export const ACCESS = 'access'
export const REFRESH = 'refresh'

export default class AuthManager {
	static saveTokens({ access, refresh }) {
		if (access !== undefined) localStorage.setItem(ACCESS, access)
		if (access !== undefined) localStorage.setItem(REFRESH, refresh)
	}

	static getTokens() {
		return {
			access: localStorage.getItem(ACCESS) || undefined,
			refresh: localStorage.getItem(REFRESH) || undefined,
		}
	}

	static resetTokens() {
		localStorage.removeItem(ACCESS)
		localStorage.removeItem(REFRESH)
	}
}
