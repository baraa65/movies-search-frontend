import { api } from '../boot/axios'
import { DIRECTORS } from './endpoints'

export default class DirectorsService {
	static getDirectors() {
		return api.get(DIRECTORS).then(({ data }) => data)
	}
}
