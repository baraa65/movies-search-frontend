import CategoriesService from '../../services/categories.service'

export default {
	namespaced: true,
	state: {
		loading: false,
		categories: [],
	},
	getters: {
		loading: (s) => s.loading,
		categories: (s) => s.categories,
		categoriesByIds: (s) => (ids) => s.categories.filter((c) => ids.includes(c.id)),
	},
	mutations: {
		setLoading(state, val) {
			state.loading = val
		},
		setCategories(state, val) {
			state.categories = val
		},
	},
	actions: {
		async fetchCategories({ commit }) {
			commit('setLoading', true)
			let categories = await CategoriesService.getCategories()

			commit('setCategories', categories)
			commit('setLoading', false)
		},
	},
}
