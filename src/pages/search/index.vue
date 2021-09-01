<template>
	<div class="fit flex column justify-center">
		<div class="q-pa-xl container" :class="{ loading, loaded }">
			<div class="flex justify-center">
				<q-form @submit="search" class="form">
					<q-input
						v-model="q"
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
			<div class="q-pa-xl content">
				<q-card style="overflow: hidden; min-height: 70vh">
					<q-card-section>
						<div class="relative-position">
							<div class="row wrap">
								<div v-for="(movie, i) in movies" :key="i" class="col-3 q-pa-md">
									<Movie :movie="movie" />
								</div>
							</div>
							<loader :visible="loading" />
						</div>
					</q-card-section>
				</q-card>
			</div>
		</div>
	</div>
</template>
<script>
import Movie from 'src/components/movie'
import Loader from 'src/components/loader'
import { mapGetters, mapActions } from 'vuex'

export default {
	components: { Movie, Loader },
	data: () => ({ loaded: false, q: '' }),
	computed: {
		...mapGetters('Search', ['loading', 'movies']),
	},
	methods: {
		...mapActions('Search', ['fetchMovies']),
		async search() {
			this.loaded = true
			await this.fetchMovies(this.q)
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	transition: max-height 4s ease-in-out, padding 0.3s ease-in-out;
}

.container:not(.loaded) {
	.content {
		padding: 0;
		max-height: 0;
		overflow: hidden;
	}
}

.container.loaded {
	.content {
		max-height: 10000px;
		overflow: hidden;
	}
}
</style>
