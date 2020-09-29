<template>
	<div class="">
		<nav-bar :text="navObj.text" :router="navObj.router" />
		<div class="blank"></div>
		<div class="filter-list">
			<scroll-filter :filter-data="filterList" />
		</div>
		<div class="teacher-list">
			<section class="container" >
				<div v-for="(item, index) of teacherList">
					<teacher-card-item  :teacherData="item" :key="index+'abc'"></teacher-card-item>
				</div>
			</section>
		</div>
		<!--这是全部老师-->
	</div>
</template>

<script>
	import Nav from "@/components/common/nav";
	import ScrollFilter  from "@/components/common/scrollFilter"
	import TeacherCardItem from "@/components/course/teacherCardItem"
	/* 讲师列表 */
	export default {
    	name: "teacherList",
		components: {
    		"nav-bar": Nav,
			"scroll-filter": ScrollFilter,
			"teacher-card-item": TeacherCardItem
		},
		data() {
			return {
				navObj: {
					"text": "讲师列表",
					"router": "/"
				},
				filterList: [

				],
				teacherList: [
					{
						id: 82,
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						name: "李嘉图",
						career: "十年课程研发和培训咨询经验，曾任国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业提供过培训与咨询服务，并担任近50个大型项目的总负责人。",
						education: "资深课程设计专家，专注10年AACTP美国培训协会认证导师",
						isStar : 1,  // 1. 高级讲师  2.首席讲师
					}, {
						id: 82,
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						name: "李嘉图",
						career: "十年课程研发和培训咨询经验，曾任国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业提供过培训与咨询服务，并担任近50个大型项目的总负责人。",
						education: "资深课程设计专家，专注10年AACTP美国培训协会认证导师",
						isStar : 1,  // 1. 高级讲师  2.首席讲师
					}, {
						id: 82,
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						name: "李嘉图",
						career: "十年课程研发和培训咨询经验，曾任国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业提供过培训与咨询服务，并担任近50个大型项目的总负责人。",
						education: "资深课程设计专家，专注10年AACTP美国培训协会认证导师",
						isStar : 1,  // 1. 高级讲师  2.首席讲师
					}, {
						id: 82,
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						name: "李嘉图",
						career: "十年课程研发和培训咨询经验，曾任国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业提供过培训与咨询服务，并担任近50个大型项目的总负责人。",
						education: "资深课程设计专家，专注10年AACTP美国培训协会认证导师",
						isStar : 1,  // 1. 高级讲师  2.首席讲师
					}, {
						id: 82,
						picPath: "http://localhost/images/upload/teacher/20150915/1442297885942.jpg",
						name: "李嘉图",
						career: "十年课程研发和培训咨询经验，曾任国企人力资源经理、大型外企培训经理，负责企业大学和培训体系搭建；曾任专业培训机构高级顾问、研发部总监，为包括广东移动、东莞移动、深圳移动、南方电网、工商银行、农业银行、民生银行、邮储银行、TCL集团、清华大学继续教育学院、中天路桥、广西扬翔股份等超过200家企业提供过培训与咨询服务，并担任近50个大型项目的总负责人。",
						education: "资深课程设计专家，专注10年AACTP美国培训协会认证导师",
						isStar : 1,  // 1. 高级讲师  2.首席讲师
					}
				]
			}
		},
		methods: {
			changeHandler(current) {
				console.log(current);
				this.current = current
			}
		},
		mounted() {
    		/*this.teacherList = [

			]*/
		}
	}
</script>

<style lang="less" scoped>
	.blank {
		width: 100%;
		height: 49px;
	}
	.filter-list {
		background-color: #fafafa;
		/deep/ .cube-scroll-nav-bar-items {
			background-color: #fff;
		}
	}
	.teacher-list {
		background-color: #fafafa;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.teacher-list section.container {
		padding: 0 12px;
	}
	.filter-list {
		height: 56px;
		/deep/ * {
			height: 97%;
		}
		/deep/ .cube-scroll-nav-bar .cube-scroll-nav-bar-item {
			line-height: 50px;
		}
	}

	/deep/ .cube-scroll-nav-bar-item_active {
		color: #3399FF;
		font-size: 16px;
		border-bottom: 4px solid #3399FF;
		span {
			font-weight: bold;
		}
	}
</style>
