<template>
	<q-dialog v-model="show">
		<q-card style="width: 80vw; max-width: 800px; min-width: 500px">
			<div class="row no-wrap">
				<div class="col-4" style="height: 100%">
					<movie-img />
				</div>
				<div class="col-8 q-px-md q-py-xl">
					<div class="text-h4 text-capitalize text-weight-bolder">{{ movie.name }}</div>
					<div>
						<q-chip
							v-for="(genre, i) in movie.genres"
							:key="i"
							size="sm"
							color="blue-grey-10"
                            class="q-ml-none"
						>
							{{ genre }}
						</q-chip>
					</div>
					<div>
						<q-rating
							v-model="movie.rate"
							size="1em"
							color="orange"
							icon="star_border"
							icon-selected="star"
						/>
						<div class="text-caption text-grey">{{ movie.rate }} / 10</div>
					</div>
					<div class="row q-pt-sm">
						<div>DURATION:</div>
						<div class="text-primary q-px-sm text-caption">180min</div>
					</div>
					<div class="q-pt-md">
						{{ movie.description }}
					</div>
				</div>
			</div>
		</q-card>
	</q-dialog>
</template>

<script>
import MovieImg from './movie-img'
export default {
	components: { MovieImg },
	props: {
		visible: Boolean,
		movie: Object,
	},
	computed: {
		show: {
			get() {
				return this.visible
			},
			set(val) {
				if (!val) this.$emit('close')
			},
		},
	},
}
</script>
