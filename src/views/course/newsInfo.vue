<template>
	<div>
		<!-- 导航栏 -->
		<nav-bar :text="navObj.text" :router="navObj.router"></nav-bar>
		<!-- 新闻主体 -->
		<div class="news-box">

		</div>
	</div>
</template>

<script>
	/* 新闻详情页面 */
	import Nav from "@/components/common/nav"
  	export default {
    	name: "newsInfo",
		props:{

		},
		components:{
    		"nav-bar": Nav
		},
		data() {
			return {
				navObj: {
					"text" : "资讯详情",
					"router": "/course/newsList"
				},
				newsId: ''
			}
		},
		mounted() {
    		// 获取新闻ID, 没有就报错
			let newsId = this.$route.params.newsId;
			if (isNaN(Number(newsId))) {
				// 传入 number 类型错误也会报错才行
				this.$router.replace("/err")
			} else {
				this.newsId = newsId
			}
			// console.log(this.$route.params);
		}
	}
</script>

<style scoped>

</style>
