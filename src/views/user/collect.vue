<template>
	<div id="collect">
		<!-- 我的>>>>收藏 -->
		<div class="collect">
			<Nav text='收藏' />
			<!-- 下推盒子，以免导航栏遮盖内容 -->
			<div style="height: 49px;"></div>
			<div class="swiper-box">
				<div class="swiper-box-box">
					<div class="swiper-ul">
						<div class="swiper-li-title">
							<div class="swiper-li-text"></div>
						</div>
						<div class="swiper-li-del">删除</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/nav.vue'
	export default {
		components: {
			Nav,
		},
		data() {
			return {}
		},
		mounted() {

		},
		methods:{

		},
	}
</script>

<style lang="less" scoped>
	.swiper-box{
		width: 100%;
		.swiper-box-box{
			width: 375px;
			overflow: hidden;
			overflow-x: scroll;
			box-sizing: border-box;
			&::-webkit-scrollbar {
			    display: none;
			}
			.swiper-ul{
				width: 465px;
				display: flex;
				height: 100px;
				box-sizing: border-box;
				.swiper-li-title{
					width: 355px;
					margin: 0px 10px;
					border-bottom: 1px solid #F2F2F2;
					display: flex;
					height: 100px;
					box-sizing: border-box;
					padding: 16px 0px;
				}
				.swiper-li-del{
					width: 90px;
					height: 100px;
					line-height: 100px;
				}
			}
		}
	}
</style>
