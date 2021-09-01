import { api } from '../boot/axios'
import { ADD_MOVIE } from './endpoints'

export default class MoviesService {
	static addMovie(form) {
		return api.post(ADD_MOVIE, form).then(({ data }) => data)
	}
	static searchMovies() {
		return new Promise((resolve) => {
			setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 2000)
		})
	}
	static getRecommendedMovies() {
		return new Promise((resolve) => {
			setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 2000)
		})
	}
}
