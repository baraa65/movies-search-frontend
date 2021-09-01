import { api } from '../boot/axios'
import { ADD_MOVIE, RECOMMENDED_MOVIES, SEARCH_MOVIE } from './endpoints'

export default class MoviesService {
	static addMovie(form) {
		return api.post(ADD_MOVIE, form).then(({ data }) => data)
	}
	static searchMovies(form) {
		return api.post(SEARCH_MOVIE, form).then(({ data }) => data)
	}
	static getRecommendedMovies() {
		return api.post(RECOMMENDED_MOVIES).then(({ data }) => data)
	}
}
