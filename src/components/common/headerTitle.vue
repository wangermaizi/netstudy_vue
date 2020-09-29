<template>
  <h2 class="tac">
	  <img :src="title.img" :alt="title.title">
	  <span class="c-333">{{title.title}}</span>
  </h2>
</template>

<script>
	export default {
		name: "headerTitle",
		props: ["title"],
		mounted() {
			console.log(this.title.img)
		}
	}
</script>

<style lang="less" scoped>
	.tac {
		text-align: left;
		vertical-align: middle;
		position: relative;
		display: flex;
		align-items: center;
		img {
			height: 30px;
			width: auto;
			display: inline-block;
			position: relative;
		}
		span.c-333 {
			color: #333;
			font-size: 18px;
		}

	}
</style>
