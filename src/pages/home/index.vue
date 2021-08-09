<template>
	<div class="q-pa-xl">
		<div class="flex justify-center">
			<q-input dense outlined label="Search" style="width: 500px">
				<template slot="prepend">
					<q-icon name="search" />
				</template>
			</q-input>
		</div>
		<div></div>
		<div class="q-pa-xl">
			<div class="relative-position">
				<div class="flex wrap">
					<Movie
						v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
						:key="i"
						class="q-ma-md"
					/>
				</div>
				<loader :visible="loading" />
			</div>
		</div>
	</div>
</template>
<script>
import Movie from 'src/components/movie'
import Loader from 'src/components/loader'

export default {
	components: { Movie, Loader },
	data: () => ({ loading: true }),
	mounted() {
		setTimeout(() => (this.loading = false), 2000)
	},
}
</script>
