<template>
	<div class="q-pa-xl" :class="{ loading }">
		<div class="q-pa-xl">
			<q-card style="overflow: hidden; min-height: 800px">
				<q-card-section>
					<div class="relative-position">
						<div class="row wrap">
							<div v-for="(movie, i) in movies" :key="i" class="col-3 q-pa-md">
								<Movie :movie="movie"/>
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
		...mapGetters('Home', ['loading', 'movies']),
	},
	mounted() {
		this.fetchMovies()
	},
	methods: {
		...mapActions('Home', ['fetchMovies']),
	},
}
</script>

<style lang="scss" scoped>
.loading {
}
</style>
