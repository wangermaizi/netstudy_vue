<template>
	<div>
		<!-- 标题栏 -->
		<nav-bar :text="navObj.text" :left-class="navObj.leftClass" :router="navObj.router"></nav-bar>
		<div class="blank"></div>
		<!-- 搜索栏 -->
		<div class="filter">
			<search-with-svg :placeholder="placeholder" @change="searchEvent" />
		</div>
		<!-- 新闻列表 -->
		<div class="news-list">
			<news-list-item v-for="(item, index) of newsList" :newsData="item" :key="index+'wang'" />
		</div>
		<!-- 需要添加没有数据的提示 -->
		<div v-if="isNodata">
			<div class="no-data">
				<p class="c-ccc">
					<i class="fa fa-refresh" aria-hidden="true"></i>
					没有更多了
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	/* 新闻列表页面, 全部新闻页面 */
	import Nav from "@/components/common/nav";
	import SearchWithSvg from "@/components/common/searchWithSvg";
	import newsListItem from "@/components/course/newsListItem";


	export default {
    	name: "newsList",
		components: {
    		"nav-bar": Nav,
			"search-with-svg": SearchWithSvg,
			"news-list-item": newsListItem
		},
		data() {
			return {
				placeholder:"请输入关键词搜索...",
				navObj: {
					text: "最新资讯",
					leftClass: "fa fa-angle-left",
					router: "/"
				},
				newsList: [
					{
						"id": 10,
						"title": "央视快评：守护绿水青山 永葆幸福之源",
						"from": "央视新闻网",
						"date": "2019年8月21日",
						"pic": require("@/assets/images/course/test_course.jpg")
					}, {
						"id": 10,
						"title": "央视快评：守护绿水青山 永葆幸福之源",
						"from": "央视新闻网",
						"date": "2019年8月21日",
						"pic": require("@/assets/images/course/test_course.jpg")
					}, {
						"id": 10,
						"title": "央视快评：守护绿水青山 永葆幸福之源",
						"from": "央视新闻网",
						"date": "2019年8月21日",
						"pic": require("@/assets/images/course/test_course.jpg")
					}, {
						"id": 10,
						"title": "央视快评：守护绿水青山 永葆幸福之源",
						"from": "央视新闻网",
						"date": "2019年8月21日",
						"pic": require("@/assets/images/course/test_course.jpg")
					}
				],
				isNodata: true
			}
		},
		methods: {
			searchEvent(value) {
				console.log(value)
			}
		},
  	}
</script>

<style lang="less" scoped>
	.blank {
		height: 49px;
		width: 100%;
	}
	.filter {
		margin-top: 18px;
		margin-bottom: 10px;
		border-bottom: 1px solid #e5e5e5;
	}
	.no-data {
		margin: 18px 0;
		p {
			font-size: 14px;
		}
	}

</style>
