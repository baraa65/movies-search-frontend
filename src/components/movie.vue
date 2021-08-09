<template>
	<div class="card" :style="{ background: `url('${movie.image}')` }">
		<div class="content">
			<div
				class="flex column justify-center items-center relative-position"
				style="height: 100%"
			>
				<div class="rate flex items-center">
					<q-icon name="star" color="amber" size="20px" class="q-px-xs" />
					<span class="text-h6 text-weight-medium">{{ movie.rate }}</span>
					<span class="text-caption q-pt-xs">/10</span>
				</div>
				<div class="title text-h5 text-weight-bold text-capitalize q-py-sm">
					{{ movie.name }}
				</div>
				<div class="genres">
					<q-chip v-for="(genre, i) in movie.genres" :key="i" size="sm" color="blue-grey-10">
						{{ genre }}
					</q-chip>
				</div>
				<div class="actions flex justify-around q-pt-xl" style="width: 100%">
					<q-btn round color="positive" icon="thumb_up" />
					<q-btn round color="negative" icon="thumb_down" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import image from 'src/assets/movie.jpg'

export default {
	props: {
		movie: {
			type: Object,
			default: () => ({
				name: 'captain marvel',
				description: 'aa a a a a a',
				genres: ['Adventure', 'Fantasy', 'Drama'],
				rate: 9,
				image,
			}),
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	height: 350px;
	width: 250px;
	background-size: cover !important;
	transition: transform 0.3s ease-in-out;
	border-radius: 8px;
	overflow: hidden;

	.content {
		opacity: 0;
		background: transparent;
		height: 100%;
		width: 100%;
		transition: background 0.3s ease-in-out;

		.rate {
			transition: transform 0.2s ease-in-out 0.1s;
			transform: translateY(25px);
		}
		.title {
			transition: transform 0.2s ease-in-out 0.1s;
			transform: translateY(25px);
		}
		.genres {
			transition: transform 0.2s ease-in-out 0.1s;
			transform: translateY(35px);
		}
		.actions {
			transition: transform 0.4s ease-in-out 0.1s;
			transform: translateY(55px);
		}
	}

	&:hover {
		transform: scale(1.1, 1.1);
		.content {
			opacity: 1;
			background: rgba(0, 0, 0, 0.8);

			.rate {
				transform: translateY(0px);
			}
			.title {
				transform: translateY(0px);
			}
			.genres {
				transform: translateY(0px);
			}
			.actions {
				transform: translateY(0px);
			}
		}
	}
}
</style>
