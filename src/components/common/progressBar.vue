<template>
	<div id="container"></div>
</template>

<script>
	import asyncLoadJs from "@/utils/loadScript";
	/* 进度条 */
  	export default {
    	name: "processBar",
		data() {
			return {
				key: ""
			}
		},
		methods: {
			name() {

			}
		},
		mounted() {
			asyncLoadJs("https://cdn.bootcdn.net/ajax/libs/progressbar.js/1.1.0/progressbar.min.js").then(function () {
				const container = document.querySelector("#container");
				const bar = new ProgressBar.Line(container, {
					strokeWidth: 4,
					easing: 'easeInOut',
					duration: 1400,
					color: '#FFEA82',
					trailColor: '#eee',
					trailWidth: 1,
					svgStyle: {width: '100%', height: '100%'}
				});
				console.log(bar);
			}).catch(function () {
				console.log("进度条加载失败");
			});
		}
	}
</script>

<style lang="less" scoped>
	#container {
		width: 120px;
		height: 8px;
	}
	#loader {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#loader {
		flex-direction: column-reverse;
		color: #8aaaff;
		font: 2.5em sans-serif;
	}
	progress[value] {
		width: 12.5em;
		height: 0.25em;
		border: none;
		border-radius: 0.125em;
		background: #e6eeff;
	}
	progress[value]::-webkit-progress-bar {
		border: none;
		border-radius: 0.125em;
		background: #e6eeff;
	}
	progress[value]::-webkit-progress-value {
		border: none;
		border-radius: inherit;
		background: linear-gradient(90deg, #8aaaff, #fa8cff);
	}
	progress[value]::-moz-progress-bar {
		border: none;
		border-radius: inherit;
		background: linear-gradient(90deg, #8aaaff, #fa8cff);
	}
	progress[value]::-ms-fill {
		border: none;
		border-radius: inherit;
		background: linear-gradient(90deg, #8aaaff, #fa8cff);
	}
	output:not(:empty) {
		padding-bottom: 1em;
	}
	output:not(:empty):after {
		content: '%';
	}
</style>
