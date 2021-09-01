<template>
	<q-img :src="src" />
</template>

<script>
export default {
	props: {
		url: String,
	},
	computed: {
		src() {
			return require('src/assets/movie.jpg')
		},
	},
}
</script>
