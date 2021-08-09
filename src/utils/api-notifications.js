import { Notify } from 'quasar'

export default (e) => {
	let status = e.response.status
	let data = e.response.data
	let config = e.response.config

	if (config.disableNotify) return

	let message = ''
	let caption = ''

	if (status == 400) {
		message = Object.values(data)[0]
		caption = 'Validation Error'
	} else if (status == 401) {
		message = Object.values(data)[0]
		caption = 'Authentication Error'
	} else if (status == 403) {
		message = Object.values(data)[0]
		caption = 'Authorization Error'
	} else if (status == 500) {
		message = 'Internal Server Error'
	}

	Notify.create({
		message,
		caption,
		position: 'top-right',
		type: 'negative',
	})
}
