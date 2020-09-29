<template>
	<div class="course-item">
	  	<section class="course-img">
			<img v-lazy="courseItem.imgUrl" class="img-responsive" alt="">
			<div class="cc-mask">
				<router-link :to="'/course/couinfo/'+courseItem.courseId" :title="courseItem.name" class="comm-btn c-btn-1">
					{{courseItem.name}}
				</router-link>
			</div>
			<div class="info-card-tip">
				<div class="info">{{courseItem.tip}}</div>
			</div>
		</section>

		<div class="hLh30 txtOf mt10 course-title">
			<router-link :to="'/front/couinfo/'+courseItem.courseId" :title="courseItem.name" class="course-title fsize18 c-333">
				{{courseItem.name}}
			</router-link>
		</div>
		<div class="teacher-school">
			<div class="teach">
				{{courseItem.teach.name}}
			</div>
			<div class="school">
				{{courseItem.teach.edu}}
			</div>
		</div>
		<section class="mt10 hLh20 of study-comment">
			<div class="c-999 f-fA studyCount">
				{{courseItem.studyCount}}人学习
			</div>
			<div class="c-999 f-fA">
				|
			</div>
			<div class="c-999 f-fA">
				{{courseItem.commentCount}}人评论
			</div>
		</section>
  	</div>
</template>

<script>
	export default {
    	name: "courseCardItem",
	  	props:["courseItem"],
		data() {
			return {

			}
		},
		methods: {
			name() {

			}
		},
  	}
</script>

<style lang="less" scoped>
	.course-item {
		width: 47%;
		position: relative;
		background-color: #fff;
		margin: 14px 0;
		border-radius: 5px;
		.course-img {
			height: 96px;
			position: relative;
			overflow: hidden;
		}
		.img-responsive {
			height: 100%;
			border-radius: 5px 5px 0 0;
		}
		.cc-mask {
			background: rgba(0,0,0,.4);
			height: 100%;
			left: 0;
			opacity: 0;
			filter: alpha(opacity=0);
			position: absolute;
			right: 0;
			top: 0;
			transition: all .3s ease 0s;
			width: 100%;
			-webkit-transition: .3s;
			.c-btn-1 {
				left: 50%;
				margin-left: -72px;
				margin-top: -16px;
				position: absolute;
				top: 100%;
				transition: .3s;
				-webkit-transition: .3s;
			}
		}
		.info-card-tip {
			position: absolute;
			left: 0;
			top: 8px;
			color: #fff;
			background-color: #101010;
			padding: 2px 4px 2px 0;
			border-radius: 0 4px 4px 0;
			font-size: 12px;
			.info {
				padding: 2px 4px;
			}
		}
		.course-title {
			text-align: left;
			font-size: 16px;
		}
		.hLh30 {
			height: 25px;
			line-height: 25px;
			margin-top: 0;
			padding: 0 8px;
		}
		.teacher-school {
			display: flex;
			height: 18px;
			line-height: 18px;
			justify-content: space-between;
			padding: 0 8px;
			align-items: center;
			color: #666;
			font-size: 12px;
		}
		section.mt10 {
			padding-bottom: 5px;
			height: 18px;
			line-height: 18px;
			margin-top: 0;
			font-size: 12px;
			padding-top: 0;
			.c-999 {
				color: #999999;
				font-size: 100%;
			}
			.f-fA {
				font-family: SimSun;
			}
		}
		.study-comment {
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			padding: 0 8px;
		}

	}
</style>
