<template>
	<div :style="{ background: `url('${Background}')` }" class="background">
		<div class="shadow">
			<div class="flex justify-center items-center" style="height: 100%">
				<q-card>
					<q-card-section>
						<div class="text-h5 text-primary text-center">Login</div>
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
									v-model="form.password"
									type="password"
									dense
									outlined
									label="Password"
									:rules="[(v) => !!v || 'Required']"
								/>
							</div>

							<div class="flex">
								<div class="text-grey text-caption">
									Don't have an account?
								</div>
								<router-link to="/auth/sign-up" class="link q-px-sm">SIGN UP</router-link>
							</div>
							<div class="q-py-md">
								<q-btn color="primary" label="Login" style="width: 100%" type="submit" />
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
			password: '',
		},
	}),
	methods: {
		...mapActions('Login', ['login']),
		submit() {
			this.login(this.form).then(() => {
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
