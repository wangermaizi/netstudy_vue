<template>
	<div class="swiper-slide">
		<a :href="itemData.url">
			<img :src="itemData.imgUrl" alt="">
		</a>
	</div>
</template>

<script>
  	export default {
    	name: "swipeListItem",
  		props:["itemData"],

  	}
</script>

<style lang="less" scoped>
	.swiper-slide {
		width: 100%;
		img {
			width: 100%;
			height: auto;
		}
	}

</style>
