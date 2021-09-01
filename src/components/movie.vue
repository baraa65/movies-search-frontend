<template>
	<div class="card relative-position" :style="{ background: `url('${movie.image}')` }" @click="movieDialog = true">
		<div class="content absolute-top">
			<div
				class="flex column justify-center items-center relative-position absolute-top"
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
		<movie-dialog :visible="movieDialog" :movie="movie" @close="movieDialog = false" />
	</div>
</template>

<script>
import image from 'src/assets/movie.jpg'
import MovieDialog from './movie-dialog'

export default {
	components: { MovieDialog },
	props: {
		movie: {
			type: Object,
			default: () => ({
				name: 'captain marvel',
				description:
					'It was Dec 20th, 2019 when the Miami International Science Fiction Film Festival (MiSciFi) received the feature film CARGO. It was directed and written by Arati Kadav, we were thrilled, not only because it was a world premiere, but it was from India. After viewing, it was clear that this imaginative off the wall film would be a winner of the festival. Full of twists, turns, and thought evoking power.',
				genres: ['Adventure', 'Fantasy', 'Drama'],
				rate: 9,
				image,
			}),
		},
	},
	data: () => ({
		movieDialog: false,
	}),
}
</script>

<style lang="scss" scoped>
.card {
	height: 0;
	padding-top: 140%;
	background-size: cover !important;
	transition: transform 0.3s ease-in-out;
	border-radius: 8px;
	overflow: hidden;

	.content {
		opacity: 0;
		background: transparent;
		height: 100% !important;
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
		z-index: 1;
		box-shadow: 0 0 10px 15px rgba(0, 0,0,0.2);
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
