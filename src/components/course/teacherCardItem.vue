<template>
	<section class="i-teach-wrap">
		<div class="i-teach-pic">
			<router-link :to="'/course/teacher/'+teacherData.id" :title="teacherData.name">
				<img v-lazy="teacherData.picPath" :alt="teacherData.name">
			</router-link>
		</div>
		<div class="info">
			<div class="mt10 hLh30 txtOf tac">
				<router-link :to="'/course/teacher/'+teacherData.id" :title="teacherData.name" class="fsize18 teacher-name c-666">
					{{teacherData.name}}
				</router-link>
			</div>
			<div class="hLh30 txtOf tac teacher-career">
				<span class="fsize14 c-999">
					{{teacherData.career}}
				</span>
			</div>
			<div class="hLh30 txtOf tac">
				<span class="fsize14 c-999" v-if="">
					{{ teacherData.isStar | isStar }}
				</span>
			</div>
			<div class="mt15 i-q-txt">
				<p class="c-999 f-fA">
					{{teacherData.education}}
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	/* 全部老师信息卡片 */

	export default {
    	name: "teacherCardItem",
		props: ["teacherData"],
		data() {
			return {
				key: ""
			}
		},
		methods: {
			name() {

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
			console.log(this.teacherData);
		}
	}
</script>

<style lang="less" scoped>

	.i-teach-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		box-shadow: 0 0 3px #c0c0c0;
		padding: 4px 10px;
		margin: 0 4px 18px 4px;
		background-color: #fff;
		.teacher-name {
			color: #3399FF;
		}
		.teacher-career {
			color: #000;
			border-bottom: 1px solid rgba(51,153,255,0.2);
		}
		.i-teach-pic {
			width: 28vw;
			height: auto;
			margin: 10px 0 0 0;
			:link, :visited {
				text-decoration: none;
			}
			img {
				display: block;
				border-radius: 50%;
				max-width: 100%;
				transition: .5s;
				-webkit-transition: .5s;
			}
		}
		.info {
			width: 50vw;
			div {
				width: 100%;
				text-align: left;
			}
			.mt10 {
				margin-top: 0;
			}
			.i-q-txt {
				height: 38px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				padding-top: 0;
				font-size: 13px;
			}
			.mt15 {
				margin-top: 0;
			}
		}
	}

</style>
