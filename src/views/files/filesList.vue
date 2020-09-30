<template>
	<div class="files-list">
		<div>
			<nav-bar :text="navObj.text" :right-class="navObj.RightClass" :activeRightClass="navObj.activeRightClass" :router="navObj.router" @change="navChange" />
		</div>
		<div class="blank"></div>
		<div class="search-content">
			<search-with-svg placeholder="请输入关键字搜索..." @change="searchFile" />
		</div>
		<div class="course-content">
			<section class="container">
				<course-card-item v-for="(item, index) of courseList" :courseItem="item" :key="index+'wang'" />
			</section>
			<no-data-tip color="#666"/>
		</div>
		<div class="shadow">

		</div>
	</div>
</template>

<script>
	/* 全部文档的文档列表 */
	import Nav from "@/components/common/nav";
	import CourseCardItem from "@/components/common/courseCardItem";
	import NoDataTip from "@/components/common/noDataTip";
	import SearchWithSvg from "@/components/common/searchWithSvg";

	export default {
    	name: "filesList",
		components: {
    		"nav-bar": Nav,
			"course-card-item": CourseCardItem,
			"no-data-tip": NoDataTip,
			"search-with-svg": SearchWithSvg
		},
		data () {
    		return {
				navObj: {
					text: "更多文档",
					router: "/files"
					// 干嘛要自己折磨自己呢
					// RightClass: "fa fa-list",
					// activeRightClass: "fa fa-close"
				},
				courseList: [
					{
						logo: require("@/assets/images/course/test_course.jpg"),
						courseName: "零基础入门python",
						teach: {
							name: "李嘉图",
							edu: "华北电力大学"
						},
						pageViewcount: 122,
						commentCounts: 155,
						courseId:10,
						tip: "文档",
						linkType: "file"
					}, {
						logo: require("@/assets/images/course/test_course.jpg"),
						courseName: "零基础入门python",
						teach: {
							name: "李嘉图",
							edu: "华北电力大学"
						},
						pageViewcount: 122,
						commentCounts: 155,
						courseId:10,
						tip: "文档",
						linkType: "file"
					}, {
						logo: require("@/assets/images/course/test_course.jpg"),
						courseName: "零基础入门python",
						teach: {
							name: "李嘉图",
							edu: "华北电力大学"
						},
						pageViewcount: 122,
						commentCounts: 155,
						courseId:10,
						tip: "文档",
						linkType: "file"
					}, {
						// logo: require("@/assets/images/course/test_course.jpg"),
						courseName: "零基础入门python",
						teach: {
							name: "李嘉图",
							edu: "华北电力大学"
						},
						pageViewcount: 122,
						commentCounts: 155,
						courseId:10,
						tip: "文档",
						linkType: "file"
					}
				],
				isNodata: true
			}
		},
		methods: {
			navChange() {
				console.log("触发发生改变")
			},
			searchFile(value) {
				console.log(value)
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	.blank {
		width: 100%;
		height: 49px;
	}
	.files-list {
		background-color: #fafafa;
		min-height: 100vh;
	}
	.course-content {
		section.container {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0 14px;
		}
	}
	.search-content{
		margin-top: 20px;
	}
</style>
