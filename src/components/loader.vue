<template>
	<div class="loader" v-if="visible">
		<div class="wrapper">
			<div class="background" />
			<q-img :src="Loading" style="width: 250px" />
		</div>
	</div>
</template>

<script>
import Loading from 'src/assets/loading.gif'

export default {
	props: {
		visible: Boolean,
	},
	data: () => ({ Loading }),
}
</script>

<style lang="scss" scoped>
.loader {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: visible;
}
.wrapper {
	position: relative;
	overflow: visible;
	width: 100%;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.background {
	position: absolute;
	height: 1px;
	width: 1px;
	background: red;
	box-shadow: 0 0 1500px 800px rgba(0, 0, 0, 0.7);
}
</style>
