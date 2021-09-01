import { api } from '../boot/axios'
import { REVIEW_MOVIE } from './endpoints'

export default class ReviewsService {
	static reviewMovie(form) {
		return api.post(REVIEW_MOVIE, form).then(({ data }) => data)
	}
}
