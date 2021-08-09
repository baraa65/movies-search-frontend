import { api } from '../boot/axios'
import { ADD_MOVIE } from './endpoints'

export default class MoviesService {
	static addMovie(form) {
		return api.post(ADD_MOVIE, form).then(({ data }) => data)
	}
}
