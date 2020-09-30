<template>
	<div class="course-list">
		<nav-bar :text="navObj.text" :router="navObj.router"/>
		<div class="blank"></div>

		<div class="comm-title">
			<search-with-svg placeholder="请输入关键字搜索..." @change="searchEvent" />
			<h2>
				<span class="c-333"> 全部课程 </span>
			</h2>
		</div>
		<div class="course-content">
			<course-card-item v-for="(item, index) of courseList" :courseItem="item" :key="index+ 'wang'" />
		</div>
	</div>
</template>

<script>
	/* 更多课程, 课程列表 */
	import Nav from "@/components/common/nav";
	import CourseCardItem from "@/components/common/courseCardItem";
	import SearchWithSvg from "@/components/common/searchWithSvg";
	// import TabBar from "@/components/common/tabBar";


	export default {
    	name: "courseList",
  		components:{
    		"nav-bar": Nav,
			"course-card-item": CourseCardItem,
			"search-with-svg": SearchWithSvg,
			// "tab-bar": TabBar
		},
		data() {
			return {
				navObj: {
					text: "课程列表",
					leftClass: "fa fa-angle-left",
					router: "/"
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
						tip: "精品课程"
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
						tip: "精品课程"
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
						tip: "精品课程"
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
						tip: "精品课程"
					}
				]
			}
		},
		methods: {
    		/* 监听搜索框事件 */
			searchEvent(value) {
				console.log(value);
			}
		},
	}
</script>

<style lang="less" scoped>
	.blank {
		height: 49px;
		width: 100%;
	}
	.course-list {
		min-height: 100vh;
		background-color: #fafafa;
	}
	.comm-title {
		text-align: left;
		padding: 0 18px;
		padding-bottom: 14px;
		border-bottom: 1px solid #ccc;
		h2 {
			text-align: left;
			span {
				font-size: 18px;
			}
		}
	}
	.course-content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 14px;
	}
	/deep/ .course-item {
		margin-top: 0;
	}
</style>
