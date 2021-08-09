<template>
	<div class="q-pa-xl flex justify-center">
		<q-card style="width: 600px">
			<q-card-section>
				<div class="text-h6">Add Movie</div>
			</q-card-section>

			<q-card-section>
				<q-form @submit="submit(form)">
					<div>
						<q-input
							v-model="form.title"
							dense
							outlined
							label="Title"
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-input
							v-model="form.production_company"
							dense
							outlined
							label="Production Company"
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-input
							v-model="form.description"
							dense
							outlined
							label="Description"
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-input dense outlined v-model="form.release_date" :rules="['']">
							<template v-slot:append>
								<q-icon name="event" class="cursor-pointer">
									<q-popup-proxy
										ref="qDateProxy"
										transition-show="scale"
										transition-hide="scale"
									>
										<q-date v-model="form.release_date" mask="YYYY-MM-DD">
											<div class="row items-center justify-end">
												<q-btn v-close-popup label="Close" color="primary" flat />
											</div>
										</q-date>
									</q-popup-proxy>
								</q-icon>
							</template>
						</q-input>
					</div>
					<div>
						<q-select
							v-model="form.spoken_language"
							:options="languages"
							dense
							outlined
							label="Spoken Language"
							map-options
							emit-value
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-input
							v-model="form.run_time"
							type="number"
							dense
							outlined
							label="Run Time"
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-select
							v-model="form.director"
							:options="directors"
							dense
							outlined
							label="Director"
							:rules="[(v) => !!v || 'Required']"
							option-label="name"
							option-value="id"
							emit-value
							map-options
						/>
					</div>
					<div>
						<q-input
							v-model="form.link_of_film"
							dense
							outlined
							label="Link of Film"
							:rules="[(v) => !!v || 'Required']"
						/>
					</div>
					<div>
						<q-select
							v-model="form.categorie"
							:options="categories"
							dense
							outlined
							label="Category"
							:rules="[(v) => !!v || 'Required']"
							option-label="name"
							option-value="id"
							emit-value
							map-options
						/>
					</div>
					<div>
						<div class="flex">
							<div class="text-subtitle1 q-px-sm">Rate</div>
							<q-rating
								v-model="form.rate"
								size="2em"
								color="orange"
								icon="star_border"
								icon-selected="star"
							/>
						</div>
					</div>

					<div class="flex justify-end q-pt-md">
						<q-btn color="primary" label="Save" type="submit" />
					</div>
				</q-form>
			</q-card-section>
		</q-card>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

let languages = [
	{ label: 'English', value: 'english' },
	{ label: 'Arabic', value: 'arabic' },
]

export default {
	data: () => ({
		languages,
		form: {
			title: 'film10',
			production_company: 'new name',
			description: 'this film is',
			release_date: '2021-05-16',
			spoken_language: 'english',
			run_time: 150,
			director: 2,
			rate: 50,
			link_of_film: 'rr',
			categorie: 1,
		},
	}),
	computed: {
		...mapGetters('AddMovie', ['categories', 'directors']),
	},
	created() {
		this.fetchData()
	},
	methods: {
		...mapActions('AddMovie', ['fetchData', 'submit']),
	},
}
</script>
