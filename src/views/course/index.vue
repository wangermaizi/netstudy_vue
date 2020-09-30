<template>
	<div class="course">
		<!-- 吸顶头部 -->
		<header-top :title="greet"></header-top>
		<div class="blank"></div>
		<!-- 轮播图 -->
		<swipe-list :dataList="swipeList"></swipe-list>
		<!--<div class="greet">
			<cube-button>
				{{greet}}
			</cube-button>
		</div>-->

		<div>
			<section class="container">
				<!-- 课程 -->
				<div class="pb10">
					<div class="course-title">
						<header-title :title="courseTitleObj.title" :img="courseTitleObj.img"></header-title>
						<input-tpl @searchEvent="searchCourseEvent"></input-tpl>
					</div>
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

					<div>
						<div class="comm-course-list">
							<course-card-item v-for="(item, index) of courseList" :courseItem="item" :key="index+'wang'" />
						</div>
						<section class="tac pt10">
							<more-change-btn :moreTitle="moreAndChange.moreTitle" :moreIcon="moreAndChange.moreIcon" :moreRouter="moreAndChange.moreRouter" @change="changeCourse"></more-change-btn>
						</section>
					</div>
				</div>

				<!-- 网校名师 -->
				<div class="pb20">
					<div class="course-title teacher-title-content">
						<header-title :title="teacherTitleObj.title" :img="teacherTitleObj.img"></header-title>
						<input-tpl @searchEvent="searchTeacherEvent"></input-tpl>
					</div>
					<div class="teacher-content">
						<teacher-item :teacherList="teacherList" />
					</div>
					<section class="tac pt10">
						<router-link to="/course/teacherlist" title="全部讲师" class="comm-btn c-btn-2">
							全部讲师
						</router-link>
					</section>
				</div>
			</section>
			<!-- 新闻咨询 -->
			<div class="news">
				<section class="container">
					<div class="course-title news-list">
						<header-title :title="newsTitleObj.title" :img="newsTitleObj.img"></header-title>
						<div class="tac c-000 more-news">
							<router-link to="/course/newsList">
								<span class="more-news"> 更多资讯 </span>
								<i class="fa fa-angle-right" aria-hidden="true"></i>
							</router-link>
						</div>
					</div>
				</section>
				<div class="news-list">
					<news-list-item v-for="(item, index) of newsList" :newsData="item" />
				</div>
			</div>
		</div>
		<div class="blank"></div>
		<tab-bar title="课程"/>
	</div>
</template>

<script>
	import HeaderTop from "@/components/common/headerTop";
	import SwipeList from "@/components/common/swiper/swipeList"
	import HeaderTitle from "@/components/common/headerTitle";
	import InputTpl from "@/components/common/inputTpl";
	import ScrollFilter from "@/components/common/scrollFilter";
	import CourseCardItem from "@/components/common/courseCardItem";
	import MoreChangeBtn from "@/components/common/moreChangeBtn";
	import TabBar from "@/components/common/tabBar";
	import TeacherItem from "@/components/course/teacherItem"
	import NewsListItem from "@/components/course/newsListItem";

	// import service from "@/utils/api/service";

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
			"teacher-item": TeacherItem,
			"news-list-item": NewsListItem
		},
		data() {
			return {
				greet: "hello world",
				moreAndChange: {
					moreTitle: "更多课程",
					moreIcon: "fa fa-play-circle-o",
					moreRouter: "/course/list"
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
				courseTitleObj : {
					img:require("@/assets/images/course/course.png"),
					title: "网校课程"
				},
				teacherTitleObj: {
					img: require("@/assets/images/course/teacher.png"),
					title: "网校名师"
				},
				newsTitleObj: {
					img: require("@/assets/images/course/news.png"),
					title: "新闻资讯"
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
					}
				],
				teacherList: [
					{
						id: 10,
						name: "李嘉图",
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						education: "北京师范大学法学院副教授",
						career: "北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。"
					}, {
						id: 10,
						name: "李嘉图",
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						education: "北京师范大学法学院副教授",
						career: "北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。"
					}, {
						id: 10,
						name: "李嘉图",
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						education: "北京师范大学法学院副教授",
						career: "北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。"
					}, {
						id: 10,
						name: "李嘉图",
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						education: "北京师范大学法学院副教授",
						career: "北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。"
					}
				],
				/* 新闻咨询只会显示两条 */
				newsList:[
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
					}
				]
			}
		},
		methods: {
    		/* 搜索课程 */
			searchCourseEvent(value) {
				console.log(value)
			},
			/* 搜索讲师 */
			searchTeacherEvent(value) {
				console.log(value)
			},
			/* 触发换一换 */
			changeCourse() {
				console.log("触发换一换")
			}
		},
		created(){

		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	.blank {
		width: 100%;
		height: 49px;
		border-bottom: 1px solid #ccc;
	}
	.greet {
		font-size: 16px;
	}
	/*section.container {
		padding: 0 18px;
	}*/
	.course {
		background-color: #f5f5f5;
		min-height: 100vh;
	}
	.course-title {
		padding-top: 14px;
		padding-bottom: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}
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
	.fsize14 {
		font-size: 14px;
	}
	.comm-course-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.teacher-content {
		margin-top: 20px;
		margin-bottom: 10px;
		border-top: 1px solid #ccc;
	}
	.teacher-title-content {
		padding-bottom: 10px;
	}
	@media (max-width: 768px) and (min-width: 320px) {
		.container {
			padding: 0 18px;
		}
	}
	.pb20 {
		padding-bottom: 20px;
	}
	.news {
		background-color: #fff;
	}
	.more-news {
		font-size: 16px;
	}
	.news-list {
		padding-bottom: 14px;
	}
	.news .container {
		position: relative;
	}
	.news-list:after {
		content: "";
		display: block;
		height: 0;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		border-bottom: 1px solid #f2f2f2;
	}
	a.comm-btn {
		font-size: 16px;
		width: 80px;
		height: 32px;
		line-height: 32px;
		padding: 0 8px;
		display: inline-block;
		text-align: center;
		border: 1px solid #ea562e;
		color: #ea562e;
	}
	/deep/ .teacher-list {

		justify-content: space-between;
	}
	/deep/ .i-teach-wrap {
		width: 42%;
		border: 1px solid #418bca;
		background-color: #fff;
	}
</style>
