<template>
	<div>
		<!-- 最底部背景色，固定，全屏 -->
		<div id="windowScreen"></div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		mounted() {
			let Screen = document.getElementById('windowScreen');
			// 获取屏幕分辨率高度与宽度
			let screenwidth = window.screen.width;
			let screenheight = window.screen.height;
			Screen.style.width = `${screenwidth}px`;
			Screen.style.height = `${screenheight}px`;
		},
	}
</script>

<style lang="less" scoped>
	#windowScreen{
		position: fixed;
		top: 0;
		background-color: #FAFAFA;
		z-index: -5;
	}
</style>
