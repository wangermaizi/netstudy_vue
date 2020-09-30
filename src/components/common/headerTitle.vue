<template>
	<div class="tac">
		  <img :src="img" :alt="title">
		  <div class="c-333">{{title}}</div>
	</div>
</template>

<script>
	export default {
		name: "headerTitle",
		props: ["title", "img"],
		mounted() {
			// console.log(this.title.img)
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
		.c-333 {
			flex: 1;
			display: block;
			width: 120px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #333;
			font-size: 18px;
			margin-left: 6px;
		}

	}
</style>
