<template>
	<div class="q-pa-xl" :class="{ loading }">
		<div class="flex justify-center">
			<q-form @submit="search">
				<q-input
					dense
					outlined
					label="Search"
					style="width: 500px"
					:loading="loading"
					:rules="[]"
				>
					<template slot="prepend">
						<q-icon name="search" />
					</template>
				</q-input>
			</q-form>
		</div>
		<div></div>
		<div class="q-pa-xl">
			<q-card style="overflow: hidden; min-height: 70vh">
				<q-card-section>
					<div class="relative-position">
						<div class="row wrap">
							<div v-for="i in movies" :key="i" class="col-3 q-pa-md">
								<Movie />
							</div>
						</div>
						<loader :visible="loading" />
					</div>
				</q-card-section>
			</q-card>
		</div>
	</div>
</template>
<script>
import Movie from 'src/components/movie'
import Loader from 'src/components/loader'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: { Movie, Loader },
	data: () => ({}),
	computed: {
		...mapGetters('Search', ['loading', 'movies']),
	},
	methods: {
		...mapActions('Search', ['fetchMovies']),
		search() {
			this.fetchMovies()
		},
	},
}
</script>

<style lang="scss" scoped>
.loading {
}
</style>
