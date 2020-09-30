<template>
	<div class="files">
		<header-top />
		<div class="blank"></div>
		<!-- 轮播图 -->
		<swipe-list :dataList="swipeList"></swipe-list>
		<div class="pt10">
			<section class="container">
				<!-- 文档 -->
				<div class="files-title">
					<header-title :title="filesTitleObj.title" :img="filesTitleObj.img"></header-title>
					<input-tpl @searchEvent="searchCourseEvent"></input-tpl>
				</div>

				<!-- 筛选条件 -->
				<div class="filter">
					<div class="c-tab-title">
						<div class="filter-list">
							<div class="filter-title">
								<span class="c-999 fsize14">专业归属</span>
							</div>
							<scroll-filter :filterData="filterCourseMajor"></scroll-filter>
						</div>
						<div class="filter-list">
							<div class="filter-title">
								<span class="c-999 fsize14">课程类型</span>
							</div>
							<scroll-filter :filterData="filterCourseType"></scroll-filter>
						</div>
						<div class="filter-list">
							<div class="filter-title">
								<span class="c-999 fsize14">课程类型</span>
							</div>
							<scroll-filter :filterData="filterCourseSort"></scroll-filter>
						</div>
					</div>
				</div>

				<!-- 课程内容 -->
				<div class="pb20">
					<div class="comm-course-list">
						<course-card-item v-for="(item, index) of courseList" :courseItem="item" :key="index+'wang'" />
					</div>
					<section class="tac pt10">
						<more-change-btn :moreTitle="moreAndChange.moreTitle" :moreIcon="moreAndChange.moreIcon" :moreRouter="moreAndChange.moreRouter" @change="changeFiles"></more-change-btn>
					</section>
				</div>
			</section>
		</div>
		<div class="blank"></div>
		<tab-bar title="文档" />
	</div>
</template>

<script>
	/* 文档模块主页面 */
	import HeaderTop from "@/components/common/headerTop";
	import TabBar from "@/components/common/tabBar";
	import SwipeList from "@/components/common/swiper/swipeList"
	import HeaderTitle from "@/components/common/headerTitle";
	import InputTpl from "@/components/common/inputTpl";
	import ScrollFilter from "@/components/common/scrollFilter";
	import CourseCardItem from "@/components/common/courseCardItem";
	import MoreChangeBtn from "@/components/common/moreChangeBtn";

	export default {
		name: "index",
		components: {
			"header-top": HeaderTop,
			"swipe-list": SwipeList,
			"header-title": HeaderTitle,
			"input-tpl": InputTpl,
			"scroll-filter": ScrollFilter,
			"course-card-item": CourseCardItem,
			"more-change-btn": MoreChangeBtn,
			"tab-bar": TabBar,
		},
		data() {
			return {
				moreAndChange: {
					moreTitle: "更多文档",
					moreIcon: "fa fa-play-circle-o",
					moreRouter: "/files/list"
				},
				swipeList: [{
					background:"red",
					url:"/",
					imgUrl: "http://localhost/images/upload/image/20200616/1592289916103.png",
				},{
					background:"red",
					url:"/",
					imgUrl: "http://localhost/images/upload/image/20150915/1442313573533.jpg"
				},{
					background:"red",
					url:"/",
					imgUrl: "http://localhost/images/upload/image/20200616/1592289916103.png",
				},{
					background:"red",
					url:"/",
					imgUrl: "http://localhost/images/upload/image/20150915/1442313573533.jpg"
				}
				],
				filesTitleObj: {
					img: require("@/assets/images/files/document.png"),
					title: "全部文档"
				},
				filterCourseMajor:[
					{
						name: "全部",
						filterId: 0,
					}, {
						name:"智UP器材",
						filterId: 1
					}, {
						name:"新建专业",
						filterId: 2
					}, {
						name: "一年级",
						filterId: 3
					}, {
						name: "二年级",
						filterId: 4
					}, {
						name: "三年级",
						filterId: 5
					}, {
						name: "四年级",
						filterId: 6
					}
				],
				filterCourseType: [
					{
						name: "全部",
						filterId: 0,
					}, {
						name:"智UP器材",

					}, {
						name:"新建专业",
						filterId: 1
					}, {
						name: "一年级"
					},{
						name: "二年级",
						filterId: 4
					}, {
						name: "三年级",
						filterId: 5
					}, {
						name: "四年级",
						filterId: 6
					}
				],
				filterCourseSort:[
					{
						name: "全部",
						filterId: 0
					}, {
						name: "热门",
						filterId: 1
					}, {
						name: "最新",
						filterId: 2
					}
				],
				courseList:[
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
						tip: "精品课程",
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
						tip: "精品课程",
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
						tip: "精品课程",
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
						tip: "精品课程",
						linkType: "file"
					}
				],
			}
		},
		methods: {
			changeFiles() {
				console.log("触发换一换")
			}
		},
		mounted() {
			console.log(this.courseList)
		}
	}
</script>

<style lang="less" scoped>
	.files {
		min-height: 100vh;
		background-color: #fafafa;
	}
	.files-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.blank {
		height: 49px;
		width: 100%;
	}
	.comm-course-list {
		display: flex;
		justify-content: space-between;
		/*align-items: center;*/
		flex-wrap: wrap;
	}
	/* 筛选条件 */
	.filter {
		margin-top: 5px;
		border-top: 1px solid #ccc;
	}
	.filter-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;
		border-bottom: 1px dotted #ddd;
		.filter-title {
			display: flex;
			align-items: center;
		}
		.filter-content {
			/*width: calc(100% - 80px);*/
			margin-left: 14px;
			flex: 1;
			overflow-x: scroll;
		}

	}

	@media (max-width: 768px) and (min-width: 320px) {
		.container {
			padding: 0 18px;
		}
	}
</style>
