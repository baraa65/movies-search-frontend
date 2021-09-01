import MoviesService from '../../services/movies.service'

export default {
	namespaced: true,
	state: {
		loading: false,
		movies: [],
	},
	getters: {
		loading: (s) => s.loading,
		movies: (s) => s.movies,
	},
	mutations: {
		setLoading(s, val) {
			s.loading = val
		},
		setMovies(s, val) {
			s.movies = val
		},
	},
	actions: {
		async fetchMovies({ commit }, search) {
			commit('setLoading', true)
			let movies = await MoviesService.searchMovies({ search })

			commit('setMovies', movies)
			commit('setLoading', false)
		},
	},
}
