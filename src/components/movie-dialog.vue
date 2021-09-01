<template>
	<q-dialog v-model="show">
		<q-card style="width: 80vw; max-width: 800px; min-width: 500px;overflow: hidden">
			<div class="row no-wrap">
				<div class="col-4" style="height: 100%; min-height: 50vh">
					<movie-img :url="movie.link_of_film" />
				</div>
				<q-scroll-area class="col-8">
					<div class="q-px-md q-py-xl">
						<div class="text-h4 text-capitalize text-weight-bolder">{{ movie.title }}</div>
						<div>
							<q-chip
								v-for="(c, i) in categoriesByIds(movie.categorie)"
								:key="i"
								size="sm"
								color="blue-grey-10"
								class="q-ml-none text-capitalize"
							>
								{{ c.name }}
							</q-chip>
						</div>
						<div>
							<q-rating
								:value="movie.rate / 2"
								size="1em"
								color="orange"
								icon="star_border"
								icon-selected="star"
							/>
							<div class="text-caption text-grey">{{ movie.rate }} / 10</div>
						</div>
						<div class="row q-pt-sm text-caption">
							<div>Duration:</div>
							<div class="text-primary q-px-sm">{{ movie.run_time }}min</div>
						</div>
						<div class="q-pt-md">
							{{ movie.description }}
						</div>
					</div>
					<div>
						<q-card style="overflow: hidden">
							<q-card-section>
								<div class="flex justify-between">
									<q-rating
										v-model="rate"
										size="2em"
										color="orange"
										icon="star_border"
										icon-selected="star"
										:max="10"
									/>

									<q-btn label="Rate" color="primary" @click="handleRate" />
								</div>
							</q-card-section>

							<q-inner-loading :showing="loading">
								<q-spinner-gears size="50px" color="primary" />
							</q-inner-loading>
						</q-card>
					</div>
				</q-scroll-area>
			</div>
		</q-card>
	</q-dialog>
</template>

<script>
import MovieImg from './movie-img'
import { mapGetters, mapActions } from 'vuex'
import { date } from 'quasar'
import Loader from './loader'

export default {
	components: { Loader, MovieImg },
	props: {
		visible: Boolean,
		movie: Object,
	},
	data: () => ({
		rate: 0,
	}),
	computed: {
		...mapGetters('Reviews', ['loading']),
		...mapGetters('Categories', ['categoriesByIds']),
		show: {
			get() {
				return this.visible
			},
			set(val) {
				if (!val) this.$emit('close')
			},
		},
	},
	methods: {
		...mapActions('Reviews', ['rateMovie']),
		handleRate() {
			this.rateMovie({
				films: String(this.movie.id),
				times_tamp: date.formatDate(new Date(), 'YYYY-MM-DD'),
				precent_rate: String(this.rate),
			}).then(() => {
				this.$q.notify({
					message: 'Rating has been saved',
					type: 'positive',
					position: 'top-right',
				})
			})
		},
	},
}
</script>
