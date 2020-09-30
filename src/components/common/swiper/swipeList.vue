<template>
	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<swipe-list-item v-for="(item, index) of dataList" :itemData="item" :key="index">

			</swipe-list-item>
		</div>
		<!-- 添加分页器 -->
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
	import swipeListItem from "./swipeListItem";
	export default {
    	name: "swiperList",
		props:["dataList"],
		components: {
			"swipe-list-item": swipeListItem
		},
		data() {
			return {

			}
		},
		mounted() {
			// <!-- Initialize Swiper Link From CDN -->
			const swiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},

			});

			// 需要开启底部分页
			// console.log(this.dataList)
		}
	}
</script>

<style lang="less" scoped>
	.swiper-container {
		width: 100%;
		height: 118px;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
		bottom: 0;
	}

</style>
