import ReviewsService from '../../services/reviews.service'

export default {
	namespaced: true,
	state: {
		loading: false,
	},
	getters: {
		loading: (s) => s.loading,
	},
	mutations: {
		setLoading(s, val) {
			s.loading = val
		},
	},
	actions: {
		async rateMovie({ commit }, form) {
			commit('setLoading', true)
			await ReviewsService.reviewMovie(form)
			commit('setLoading', false)
		},
	},
}
