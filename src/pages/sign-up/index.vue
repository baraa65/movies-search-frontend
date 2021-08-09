<template>
	<div :style="{ background: `url('${Background}')` }" class="background">
		<div class="shadow">
			<div class="flex justify-center items-center" style="height: 100%">
				<q-card class="bg-grey-10">
					<q-card-section>
						<div class="text-h4 text-primary text-center">Sign Up</div>
					</q-card-section>

					<q-card-section style="width: 350px">
						<q-form @submit="submit">
							<div>
								<q-input
									v-model="form.username"
									dense
									outlined
									label="Username"
									:rules="[(v) => !!v || 'Required']"
								/>
							</div>
							<div>
								<q-input
									v-model="form.email"
									dense
									outlined
									label="Email"
									:rules="[(v) => !!v || 'Required']"
								/>
							</div>
							<div>
								<q-input
									v-model="form.password"
									type="password"
									dense
									outlined
									label="Password"
									:rules="[(v) => !!v || 'Required']"
								/>
							</div>
							<div class="flex q-pb-md">
								<div class="text-grey text-caption">
									Already have an account?
								</div>
								<router-link to="/auth/login" class="link q-px-sm">LOGIN</router-link>
							</div>
							<div class="q-py-md">
								<q-btn color="primary" label="Sign Up" style="width: 100%" type="submit" />
							</div>
						</q-form>
					</q-card-section>
				</q-card>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Background from 'src/assets/background.jpg'

export default {
	data: () => ({
		Background,
		form: {
			username: '',
			email: 'test@test.com',
			password: '',
		},
	}),
	methods: {
		...mapActions('SignUp', ['register']),
		submit() {
			this.register(this.form).then(() => {
				this.$router.push('/')
			})
		},
	},
}
</script>

<style>
.background {
	height: 100vh;
}
.shadow {
	height: 100%;
	background: linear-gradient(
		rgba(0, 0, 0, 0.85) 20%,
		transparent 50% 50%,
		rgba(0, 0, 0, 0.85) 80%
	);
}
</style>
