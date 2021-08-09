import { api } from '../boot/axios'

export default class CategoriesService {
	static getCategories() {
		return api.get('/category/view/').then(({ data }) => data)
	}
}

