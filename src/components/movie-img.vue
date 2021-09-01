<template>
	<div style="height: 100%; max-width: 100%">
		<img :src="src" @error="$event.target.src = alt" style="max-width: 100%; height: 100%" />
	</div>
</template>

<script>
export default {
	props: {
		url: String,
	},
	computed: {
		src() {
			return `http://image.tmdb.org/t/p/original${this.url}`
		},
		alt() {
			return require('src/assets/movie-placeholder.png')
		},
	},
}
</script>
