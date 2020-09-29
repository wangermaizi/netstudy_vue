<template>
  	<div class="news-item">
		<!--  -->
		<section class="container">
			<router-link :to="'/course/news/'+newsData.id">
				<div class="left">
					<!-- 标题内容最多两行, 固定两行文字高度 -->
					<div class="title">
						{{newsData.title}}
					</div>
					<div class="sub-title">
						<div class="from">
							{{newsData.from}}
						</div>
						<div class="post-time">
							{{newsData.date}}
						</div>
					</div>
				</div>
				<div class="right">
					<div class="news-pic">
						<img v-lazy="newsData.pic" alt="">
					</div>
				</div>
			</router-link>
		</section>
	</div>
</template>

<script>
	/* 首页新闻内容栏 */
	export default {
    	name: "newsListItem",
		props:["newsData"],
		data() {
			return {
				key: ""
			}
		},
		mounted() {
    		// console.log(this.newsData)
		}
	}
</script>

<style lang="less" scoped>
	.news-item {
		padding: 13px 0;
		border-bottom: 1px solid #f2f2f2;
	}
	a {
		display: flex;
		justify-content: space-between;
		padding: 0 18px;
		.title {
			width: 224px;
			height: 39px;
			background: rgba(255,255,255,0);
			font-size: 14px;
			text-align: left;
			color: #000000;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden
		}
		.sub-title {
			display: flex;
			background: rgba(0,0,0,0);
			font-size: 13px;
			font-weight: 400;
			color: #cecece;
			.from {
				max-width: 88px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.post-time {
				margin-left: 14px;
			}
		}
	}
	.news-pic {
		width: 109px;
		height: 61px;
		background: #ffffff;
		border-radius: 5px;
		overflow: hidden;
		img {
			width: 100%;
			height: auto;
			border-radius: 5px;
		}
	}

</style>
