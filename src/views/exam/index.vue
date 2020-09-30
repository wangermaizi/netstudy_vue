<template>
	<div class="exam">
		<!-- 头部标题栏 -->
		<header-top />
		<div class="blank"></div>
		<div class="pt10 exam-header">
			<div class="exam-title">
				<HeaderTitle :title="titleObj.title" :img="titleObj.img" />
				<input-tpl @searchEvent="searchExamEvent"></input-tpl>
			</div>
			<nav class="navbar-header">
				<ToggleBtn v-for="(item, index) of toggleList" :img="item.img" :text="item.text" :current="current" :index="index" @toggle="toggleIndex" />
			</nav>
		</div>
		<div class="pb20 exam-body">
			<div class="container">
				<!-- 下方四个内容的显示内容 -->
				<!--  -->
				<div class="content-list-item"  v-show="current === 0">
					<exam-course-list :practise-list="chapterPractiseList" :more-btn-obj="chapterMoreBtn" label-title="章节" @change="changeEvent" />
				</div>
				<div class="content-list-item"  v-show="current === 1">
					<exam-course-list :practise-list="comboList" :more-btn-obj="comboMoreBtn" label-title="套题" @change="changeEvent" />
				</div>
				<div class="content-list-item"  v-show="current === 2">
					<exam-course-list :practise-list="errorList" :more-btn-obj="errorMoreBtn" label-title="错题" @change="changeEvent" />
				</div>
				<div class="content-list-item" v-show="current === 3">
					<div class="item-content" slot="examOnline">

					</div>
				</div>
			</div>
		</div>
		<div class="blank"></div>
		<!-- 底部导航栏 -->
		<tab-bar title="考试" />
	</div>
</template>

<script>
	import HeaderTop from "@/components/common/headerTop";
	import InputTpl from "@/components/common/inputTpl"
	import HeaderTitle from "@/components/common/headerTitle";
	// import MoreChangeBtn from "@/components/common/moreChangeBtn";
	import CourseCardItem from "@/components/common/courseCardItem";
	import TabBar from "@/components/common/tabBar";
	import ToggleBtn from "@/components/exam/toggleBtn";
	import ExamCourseList from "@/components/exam/examCourseList";

	// import ToggleContent from "@/components/exam/toggleContent";



	/* 考试模块页面 */
  	export default {
    	name: "index",
		components: {
			HeaderTop,
			TabBar,
			InputTpl,
			HeaderTitle,
			// MoreChangeBtn,
			ToggleBtn,
			CourseCardItem,
			ExamCourseList,
			// ToggleContent
		},
		data() {
			return {
				// 课程列表, 只会显示四个
				titleObj: {
					title: "快速考试入口",
					img: require("@/assets/images/exam/exam_quick.png")
				},
				// 切换导航栏列表
				toggleList: [
					{
						text: "章节练习",
						img: require("@/assets/images/exam/exam_practise_icon.png")
					}, {
						text: "套题练习",
						img: require("@/assets/images/exam/exam_combo_icon.png")
					}, {
						text: "错题练习",
						img: require("@/assets/images/exam/exam_error_icon.png")
					}, {
						text: "在线考试",
						img: require("@/assets/images/exam/exam_online_icon.png")
					}
				],
				// 章节练习题列表
				chapterPractiseList: [
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
						tip: "章节练习"
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
						tip: "章节练习"
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
						tip: "章节练习"
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
						tip: "章节练习"
					}
				],
				chapterMoreBtn: {
					title: "更多章节",
					router: "/"
				},
				// 套题练习列表
				comboList: [
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
						tip: "套题练习"
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
						tip: "套题练习"
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
						tip: "套题练习"
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
						tip: "套题练习"
					}
				],
				comboMoreBtn: {
					title: "更多套题",
					router: "/"
				},
				// 错题练习列表
				errorList:[
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
						tip: "错题练习"
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
						tip: "错题练习"
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
						tip: "错题练习"
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
						tip: "错题练习"
					}
				],
				errorMoreBtn: {
					title: "更多错题",
					router: "/"
				},
				// 最近发布的考试列表
				recentlyExamList: [

				],
				// 我的考试列表
				myExamList:[

				],



				current: 0
			}
		},
		methods: {
			searchExamEvent(value) {
				console.log("触发搜索考试事件: "+ value)
			},
			toggleIndex(index) {
				this.current = index
			},
			changeEvent(label) {
				console.log("触发换一换: "+label)
			}
		},
		created() {
    		// 注意,页面挂载的时候只获取,章节练习的数据
			// 当前切换选项时, 优先判断列表是否为空, 为空则初始化发送请求, 不为空则直接切换
			// this
		}

	}
</script>

<style lang="less" scoped>
	.blank {
		width: 100%;
		height: 49px;
	}
	.exam {
		min-height: 100vh;
		background-color: #f5f5f5;
	}
	.exam-header {
		background-color: #fff;
	}
	.exam-title	{
		display: flex;
		justify-content: space-between;
		padding: 15px 16px 16px;
		border-bottom: 1px solid #ccc;
	}
	.navbar-header {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 8px 0;
		background-color: #fff;
	}
	.exam-body {
		.container {
			padding: 16px 18px 0;
		}
	}

</style>
