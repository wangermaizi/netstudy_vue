<template>
	<div class="file-info">
		<div>
			<nav-bar text="文档详情" router="/file/list"/>
		</div>
		<div class="blank"></div>
		<div class="file-content">
			<!-- 树形结构图 -->
			<div id="body">
				<div class="title">
					<div class="title-content">
						<i class="fa fa-bookmark" aria-hidden="true"></i>
						<span>零基础入门学习Python课程学习</span>
					</div>
				</div>
				<div id="menu">
					<div id="open">
						<div class="navBox">
							<slide v-for="(item, index) of fileData.parentKpointList" v-if="item.kpointType !== 2 && item.kpointType !== 3" sort-type="file" :chapter-data="item" :key="index+'abc'">
							</slide>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from "@/components/common/nav";
	import Silde from "@/components/common/silde";


	/* 文档详情页面 */
	export default {
		name: "filesInfo",
		components: {
			"nav-bar": Nav,
			"slide": Silde
		},
		data() {
			return {
				/* 用于接收文件数据 文件数据 */
				fileData: {
					"freeVideoId": 335,
					"parentKpointList": [
						{
							"kpointId": 303,
							"courseId": 10,
							"name": "考试",
							"parentId": 0,
							"addTime": 1591167260000,
							"sort": 0,
							"playCount": 0,
							"free": 1,
							"videoUrl": "污渍不行????",
							"teacherId": 0,
							"playTime": "",
							"kpointType": 2,
							"videoType": "",
							"kpointList": [],
							"kpointFilesList": [],
							"fileType": "undefined",
							"content": "2020-05-26 16:02:20--2030-06-30 16:02:20",
							"grade": 0.0,
							"approve": 0
						}, {
							"kpointId": 1,
							"courseId": 10,
							"name": "第一章",
							"parentId": 0,
							"addTime": 1427793431000,
							"sort": 8,
							"playCount": 0,
							"free": 2,
							"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
							"teacherId": 74,
							"playTime": "",
							"kpointType": 0,
							"videoType": "",
							"kpointList": [
								{
									"kpointId": 2,
									"courseId": 10,
									"name": "第二节",
									"parentId": 1,
									"addTime": 1427793666000,
									"sort": 12,
									"playCount": 0,
									"free": 2,
									"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
									"teacherId": 73,
									"playTime": "11:20",
									"kpointType": 1,
									"videoType": "uploadVideo",
									"kpointList": [],
									"kpointFilesList": [
										{
											"fileId": 84,
											"kpointId": 2,
											"type": ".mp4",
											"url": "5c3ea3bd4a1448f98555b789c0b71c58",
											"openType": "INXEDUVIDEO",
											"fileName": "video_20200324_170312.mp4",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 87,
											"kpointId": 2,
											"type": ".xls",
											"url": "/images/upload/inxedu/20200415/1586947710299.xls",
											"openType": "uploadVideo",
											"fileName": "全校课表.xls",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 88,
											"kpointId": 2,
											"type": ".xls",
											"url": "/images/upload/inxedu/20200415/1586947729984.xls",
											"openType": "uploadVideo",
											"fileName": "import_student.xls",
											"courseId": 10, "courseKpoint": null
										}, {
											"fileId": 91,
											"kpointId": 2,
											"type": ".docx",
											"url": "/images/upload/inxedu/20200415/1586948157589.docx",
											"openType": "uploadVideo",
											"fileName": "消息模版处理类简介.docx",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 205,
											"kpointId": 2,
											"type": ".pdf",
											"url": "/images/upload/inxedu/20200904/1599209818544.pdf",
											"openType": "uploadVideo",
											"fileName": "D3.js 4.x API中文手册.pdf",
											"courseId": 0,
											"courseKpoint": null
										}],
									"fileType": "VIDEO",
									"content": null,
									"grade": 0.0,
									"approve": 0
								}, {
									"kpointId": 5,
									"courseId": 10,
									"name": "第一节",
									"parentId": 1,
									"addTime": 1427854323000,
									"sort": 30,
									"playCount": 0,
									"free": 1,
									"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
									"teacherId": 76,
									"playTime": "01:20",
									"kpointType": 1,
									"videoType": "",
									"kpointList": [],
									"kpointFilesList": [
										{
											"fileId": 80,
											"kpointId": 5,
											"type": ".mp4",
											"url": "/images/upload/inxedu/20200415/1586947619734.mp4",
											"openType": "uploadVideo", "fileName": "video_20200324_170312.mp4",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 89,
											"kpointId": 5,
											"type": ".docx",
											"url": "/images/upload/inxedu/20200415/1586947765276.docx",
											"openType": "uploadVideo",
											"fileName": "消息推送表简介.docx",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 94,
											"kpointId": 5,
											"type": ".mp4",
											"url": "/images/upload/inxedu/20200423/1587634952220.mp4",
											"openType": "uploadVideo",
											"fileName": "java 内置观察者.mp4",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 95,
											"kpointId": 5,
											"type": ".mp4",
											"url": "28a9ad48cfb34f9eb2c43726bc638c65",
											"openType": "INXEDUVIDEO",
											"fileName": "video_20200324_170312.mp4",
											"courseId": 10, "courseKpoint": null
										}, {
											"fileId": 96,
											"kpointId": 5,
											"type": ".doc",
											"url": "/images/upload/inxedu/20200427/1587979045622.doc",
											"openType": "uploadVideo",
											"fileName": "新建 DOC 文档.doc",
											"courseId": 10,
											"courseKpoint": null
										}, {
											"fileId": 217,
											"kpointId": 5,
											"type": "3",
											"url": "12",
											"openType": "3",
											"fileName": "模拟考试车",
											"courseId": 10,
											"courseKpoint": null
										}], "fileType": "VIDEO", "content": null, "grade": 0.0, "approve": 0
								}],
							"kpointFilesList": [],
							"fileType": "VIDEO",
							"content": null,
							"grade": 0.0,
							"approve": 0
						}, {
							"kpointId": 3,
							"courseId": 10,
							"name": "第二章",
							"parentId": 0,
							"addTime": 1427854319000,
							"sort": 9,
							"playCount": 0,
							"free": 1,
							"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
							"teacherId": 74,
							"playTime": "",
							"kpointType": 0,
							"videoType": "uploadVideo",
							"kpointList": [{
								"kpointId": 4,
								"courseId": 10,
								"name": "第一节",
								"parentId": 3,
								"addTime": 1427854322000,
								"sort": 0,
								"playCount": 0,
								"free": 2,
								"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
								"teacherId": 74,
								"playTime": "33:00",
								"kpointType": 1,
								"videoType": "uploadVideo",
								"kpointList": [],
								"kpointFilesList": [{
									"fileId": 73,
									"kpointId": 4,
									"type": ".txt",
									"url": "/images/upload/inxedu/20200411/1586574506096.txt",
									"openType": "uploadVideo",
									"fileName": "企业.txt",
									"courseId": 10,
									"courseKpoint": null
								}, {
									"fileId": 172,
									"kpointId": 4,
									"type": ".xlsx",
									"url": "/images/upload/inxedu/20200727/1595847196292.xlsx",
									"openType": "uploadVideo",
									"fileName": "3_学习机家长端功能定义0518.xlsx",
									"courseId": 10,
									"courseKpoint": null
								}, {
									"fileId": 206,
									"kpointId": 4,
									"type": ".ppt",
									"url": "/images/upload/inxedu/20200904/1599210128364.ppt",
									"openType": "uploadVideo",
									"fileName": "PPT模板.ppt",
									"courseId": 0,
									"courseKpoint": null
								}, {
									"fileId": 218,
									"kpointId": 4,
									"type": ".mp4",
									"url": "/images/upload/inxedu/20200908/1599557992650.mp4",
									"openType": "uploadVideo",
									"fileName": "1.Axure9.0下载、安装、汉化、授权.mp4",
									"courseId": 0,
									"courseKpoint": null
								}],
								"fileType": "VIDEO",
								"content": null,
								"grade": 0.0,
								"approve": 0
							}, {
								"kpointId": 335,
								"courseId": 10,
								"name": "第二节",
								"parentId": 3,
								"addTime": 1595847150000,
								"sort": 0,
								"playCount": 0,
								"free": 1,
								"videoUrl": "",
								"teacherId": 0,
								"playTime": "",
								"kpointType": 1,
								"videoType": "uploadVideo",
								"kpointList": [],
								"kpointFilesList": [{
									"fileId": 171,
									"kpointId": 335,
									"type": ".xlsx",
									"url": "/images/upload/inxedu/20200727/1595847175336.xlsx",
									"openType": "uploadVideo",
									"fileName": "3_学习机家长端功能定义0518.xlsx",
									"courseId": 10,
									"courseKpoint": null
								}, {
									"fileId": 214,
									"kpointId": 335,
									"type": "3",
									"url": "12",
									"openType": "3",
									"fileName": "模拟考试车",
									"courseId": 10,
									"courseKpoint": null
								}],
								"fileType": "VIDEO",
								"content": null,
								"grade": 0.0,
								"approve": 0
							}],
							"kpointFilesList": [],
							"fileType": "VIDEO",
							"content": null,
							"grade": 0.0,
							"approve": 0
						}, {
							"kpointId": 48,
							"courseId": 10,
							"name": "第三章",
							"parentId": 0,
							"addTime": 1442629303000,
							"sort": 10,
							"playCount": 0,
							"free": 1,
							"videoUrl": "/video/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E7%9A%84%E6%B3%A8%E6%84%8F%E7%82%B9.mp4",
							"teacherId": 83,
							"playTime": "",
							"kpointType": 0,
							"videoType": "",
							"kpointList": [{
								"kpointId": 188,
								"courseId": 10,
								"name": "新创建视频",
								"parentId": 48,
								"addTime": 1587636414000,
								"sort": 0,
								"playCount": 0,
								"free": 1,
								"videoUrl": "",
								"teacherId": 0,
								"playTime": "",
								"kpointType": 1,
								"videoType": "",
								"kpointList": [],
								"kpointFilesList": [{
									"fileId": 98,
									"kpointId": 188,
									"type": ".mp4",
									"url": "d3490aa3dd644693ab4ca9a57f95cb04",
									"openType": "INXEDUVIDEO",
									"fileName": "智迈汇宣传片.mp4",
									"courseId": 10,
									"courseKpoint": null
								}, {
									"fileId": 141,
									"kpointId": 188,
									"type": ".mp4",
									"url": "9c5b9e5e718a42bb9be1e96b5ad23e41",
									"openType": "INXEDUVIDEO",
									"fileName": "video_20200324_170312.mp4",
									"courseId": 0,
									"courseKpoint": null
								}, {
									"fileId": 148,
									"kpointId": 188,
									"type": ".jpg",
									"url": "/images/upload/inxedu/20200526/1590464860284.jpg",
									"openType": "uploadVideo",
									"fileName": "14452.28483841.jpg",
									"courseId": 0,
									"courseKpoint": null
								}, {
									"fileId": 215,
									"kpointId": 188,
									"type": "3",
									"url": "12",
									"openType": "3",
									"fileName": "模拟考试车",
									"courseId": 10,
									"courseKpoint": null
								}],
								"fileType": "VIDEO",
								"content": null,
								"grade": 0.0,
								"approve": 0
							}],
							"kpointFilesList": [],
							"fileType": "VIDEO",
							"content": null,
							"grade": 0.0,
							"approve": 0
						}]
				}
			}
		},
		methods: {
			load() {

			}
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	body {
		height: 100vh;

	}
	#body > .title {
		margin: 21px auto 11px;
		padding: 0 14px;
		font-size: 18px;
		text-align: left;
		.title-content i {
			color: #3399ff;
			padding-right: 8px;
		}
	}
	#open {
		/* width: 2.6rem; */
		width: 100%;
		height: 100%;
		/* background-color: #363a45; */
		padding-bottom: 4px;
		padding-left: 16px;
		box-sizing: border-box;
		-webkit-transition: all 0.8s ease;
		-moz-transition: all 0.8s ease;
		-o-transition: all 0.8s ease;
		-ms-transition: all 0.8s ease;
		color: #101010;
	}

	.blank {
		width: 100%;
		height: 49px;
	}
</style>
