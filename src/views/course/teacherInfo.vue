<template>
	<div>
		<nav-bar :text="navObj.text" :router="navObj.router" />
		<div class="blank"></div>
		<div class="teacher-content">
			<section class="container">
				<header class="comm-title">
					<h2 class="fl tac">
						<span class="c-333">讲师介绍</span>
					</h2>
				</header>
				<div class="t-infor-wrap">
					<section class="fl t-infor-box c-desc-content">
						<div class="mt20 ml20">
							<div class="teacher">
								<section class="t-infor-pic">
									<img v-lazy="teacherObj.picPath" :alt="teacherObj.name">
								</section>
								<div class="teach-info">
									<h3 class="hLh30">
										<span class="fsize24 c-333">{{teacherObj.name}}&nbsp;{{teacherObj.isStar | isStar}}</span>
									</h3>
									<section class="mt10">
										<span class="t-tag-bg">{{teacherObj.education}}</span>
									</section>
								</div>
							</div>

							<section class="t-infor-txt">
								<p class="mt20">
									{{teacherObj.career}}
								</p>
							</section>
							<div class="clear"></div>
						</div>
					</section>
				</div>
				<section class="mt30">
					<div>
						<header class="comm-title all-teacher-title c-course-content">
							<h2 class="fl tac">
								<span class="c-333">主讲课程</span>
							</h2>
							<section class="c-tab-title">
								<a href="javascript: void(0)">&nbsp;</a>
							</section>
							<div class="clear">

							</div>
						</header>
						<!-- /无数据提示 开始-->
						<!-- /无数据提示 结束-->
						<article class="comm-course-list">
							<ul class="of">
								<li v-for="(item, index) of courseList" :key="index+ 'wang'">
									<div class="cc-l-wrap">
										<section class="course-img">
											<img v-lazy="item.logo" class="img-responsive" alt="">
											<div class="cc-mask">
												<router-link :to="'/course/couinfo/'+item.courseId" title="开始学习" class="comm-btn c-btn-1">开始学习</router-link>
											</div>
										</section>
										<h3 class="hLh30 txtOf mt10">
											<router-link :to="'/course/couinfo/'+item.courseId" :title="item.courseName" class="course-title fsize18 c-333">
												{{item.courseName}}
											</router-link>
										</h3>
									</div>
								</li>
							</ul>
							<div class="clear"></div>
						</article>
					</div>
				</section>
			</section>
			<!--当前老师Id为: {{teacherId}}-->
		</div>
	</div>
</template>

<script>
	import Nav from "@/components/common/nav";

	/* 讲师详情 */
  	export default {
    	name: "teacherInfo",
		components: {
    		"nav-bar": Nav
		},
		data() {
			return {
				teacherId: "",
				navObj: {
					text: "讲师详情",
					router: "/course/teachlist"
				},
				teacherObj: {
					id: 82,
					name: "陈晓薇",
					education: "北京师范大学法学院副教授",
					career: "北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。",
					isStar: "1",
					picPath: "https://localhost/images/upload/teacher/20150915/1442297885942.jpg"
				},
				courseList: [
					{
						courseId: 20,
						courseName: "C4D零基础",
						logo: "http://localhost/images/upload/course/20150915/1442295604295.jpg",
						pageBuyCount: 10,
						pageViewcount: 404
					}, {
						courseId: 20,
						courseName: "C4D零基础",
						logo: "http://localhost/images/upload/course/20150915/1442295604295.jpg",
						pageBuyCount: 10,
						pageViewcount: 404
					}, {
						courseId: 20,
						courseName: "C4D零基础",
						logo: "http://localhost/images/upload/course/20150915/1442295604295.jpg",
						pageBuyCount: 10,
						pageViewcount: 404
					}, {
						courseId: 20,
						courseName: "C4D零基础",
						logo: "http://localhost/images/upload/course/20150915/1442295604295.jpg",
						pageBuyCount: 10,
						pageViewcount: 404
					}
				]
			}
		},
		filters: {
			isStar: function (value) {
				value = Number(value);
				if (isNaN(value) && value !== "") {
					throw "isStar type Error!!!"
				}
				switch (value) {
					case 1:
						return "高级讲师";
					case 2:
						return "首席讲师";
					default :
						return ""
				}

			}
		},
		mounted() {
    		let teacherId = this.$route.params.teacherId;
    		teacherId = Number(teacherId);
    		if ( isNaN(teacherId) ) {
    			this.$router.push("/err");
    			throw "teacherId type error";
			}
    		this.teacherId = teacherId;
    		console.log(this.teacherId)
		}
	}

</script>

<style lang="less" scoped>
	.blank {
		height: 49px;
		width: 100%;
	}
	.comm-title {
		overflow: hidden;
		clear: both;
		margin: 20px 0 15px;
		h2 span {
			font-size: 17px;
		}
	}
	.t-infor-wrap {
		border-bottom: none;
		border-top: 1px solid #e2e2e2;
		padding-top: 10px;
	}
	.t-infor-box {
		width: 100%;
		.ml20 {
			margin-left: 10px;
			.t-infor-pic {
				float: left;
				width: 37%;
				margin: 0 18px 0 0;
				img {
					margin: 20px auto;
					width: 90%;
					display: block;
				}
			}
			.teach-info {
				float: left;
				width: 57%;
			}
		}
	}
	.tac {
		text-align: center;
	}
	.t-tag-bg {
		background: #f2f2f2;
		display: inline-block;
		padding: 10px 15px;
		overflow: hidden;
		font-size: 14px;
		color: #888;
	}
	.t-infor-txt {
		margin: 20px 10px 0;
		line-height: 200%;
		font-size: 14px;
		color: #777;
	}
	.t-infor-txt p {
		text-indent: 24px;
		text-align: justify;
	}
	.comm-title.all-article-title, .comm-title.all-teacher-title {
		overflow: visible;
	}
	.comm-course-list ul {
		margin: 0 5px;
	}
	.comm-course-list li, .i-teacher-list ul li {
		width: 50%;
	}
	.comm-title {
		clear: both;
		margin: 20px 0 15px;
	}

	.all-teacher-title .c-tab-title {
		margin-bottom: 20px;
		height: auto;
	}
	.comm-course-list .of li .cc-l-wrap {
		 background-color: #fff;
		 border-radius: 5px;
	 }
</style>
