import CategoriesService from '../../services/categories.service'
import DirectorsService from '../../services/directors.service'
import MoviesService from '../../services/movies.service'

export default {
	namespaced: true,
	state: {
		categories: [],
		directors: [],
	},
	getters: {
		categories: (state) => state.categories,
		directors: (state) => state.directors,
	},
	mutations: {
		setCategories(state, val) {
			state.categories = val
		},
		setDirectors(state, val) {
			state.directors = val
		},
	},
	actions: {
		async fetchData({ dispatch }) {
			dispatch('getCategories')
			dispatch('getDirectors')
		},
		async getCategories({ commit }) {
			let categories = await CategoriesService.getCategories()

			commit('setCategories', categories)
		},
		async getDirectors({ commit }) {
			let directors = await DirectorsService.getDirectors()

			commit('setDirectors', directors)
		},
		async submit({}, form) {
			let res = await MoviesService.addMovie(form)
			console.error(res)
		},
	},
}
