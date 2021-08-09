import AuthManager from '../utils/auth-manager'
import AuthService from '../services/auth.service'

const routes = [
	{
		path: '/',
		component: () => import('src/layouts/MainLayout.vue'),
		async beforeEnter(from, to, next) {
			AuthService.getUser()
				.then(() => next())
				.catch(() => next('/auth/login'))
		},
		children: [
			{ path: '', component: () => import('src/pages/home/index.vue') },
			{ path: 'movies/add', component: () => import('src/pages/add-movie/index.vue') },
		],
	},
	{
		path: '/auth',
		component: () => import('src/layouts/auth-layout.vue'),
		beforeEnter(from, to, next) {
			AuthService.getUser()
				.then(() => next('/'))
				.catch(() => next())
		},
		children: [
			{ path: 'login', component: () => import('src/pages/login/index.vue') },
			{ path: 'sign-up', component: () => import('src/pages/sign-up/index.vue') },
		],
	},
	{
		path: '*',
		component: () => import('src/pages/Error404.vue'),
	},
]

export default routes
