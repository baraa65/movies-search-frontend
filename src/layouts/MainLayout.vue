<template>
	<q-layout view="hHh Lpr lff" class="flex">
		<q-header elevated>
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="leftDrawerOpen = !leftDrawerOpen"
				/>
				<q-space />
				<!--				<q-toolbar-title>-->
				<!--					Quasar App-->
				<!--				</q-toolbar-title>-->

				<!--				<div>Quasar v{{ $q.version }}</div>-->
				<div>
					<q-btn flat round icon="logout" @click="logout" />
				</div>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			:mini="miniState"
			@mouseover="miniState = false"
			@mouseout="miniState = true"
		>
			<q-list>
				<template v-for="(menuItem, index) in menuList">
					<q-item
						clickable
						:active="menuItem.label === 'Outbox'"
						exact
						v-ripple
						:key="index"
						:to="menuItem.to"
					>
						<q-item-section avatar>
							<q-icon :name="menuItem.icon" />
						</q-item-section>
						<q-item-section>
							{{ menuItem.label }}
						</q-item-section>
					</q-item>
				</template>
			</q-list>
		</q-drawer>

		<q-page-container style="flex: 1">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import AuthManager from '../utils/auth-manager'

let menuList = [
	{
		label: 'Home',
		icon: 'home',
		to: '/',
	},
	{
		label: 'Search for a Movie',
		icon: 'search',
		to: '/movies/search',
	},
]

export default {
	name: 'MainLayout',
	data: () => ({ miniState: true, leftDrawerOpen: false, menuList }),
	methods: {
		logout() {
			AuthManager.resetTokens()

			this.$router.push('/auth/login')
		},
	},
}
</script>
