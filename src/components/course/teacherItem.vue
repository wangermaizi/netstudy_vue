<template>
	<div class="teacher-list">
		<section class="i-teach-wrap" v-for="(item, index) of showTeacherList" :key="index+'wang'">
			<div class="i-teach-pic">
				<router-link :to="'/course/teacher/'+item.id" :title="item.name">
					<img :alt="item.name" v-lazy="item.picPath">
				</router-link>
			</div>
			<div class="teacher-name">
				<router-link :to="'/course/teacher/'+item.id" :title="item.name" class="fsize18 c-666">
					{{item.name}}
				</router-link>
			</div>
			<div class="teacher-education">
			<span class="fsize14 c-999">
				{{item.education}}
			</span>
			</div>
			<div class="teacher-career">
				<p class="c-999 f-fA">
					{{item.career}}
				</p>
			</div>
		</section>
	</div>

</template>

<script>
	export default {
		name: "teacherItem",
		props:["teacherList"],
		data() {
			return {
				currentIndex: 0,
				showTeacherList: []
			}
		},
		created() {
			this.showTeacherList[0] = this.teacherList[(this.currentIndex * 2)];
			this.showTeacherList[1] = this.teacherList[this.currentIndex * 2 + 1]
			// this.showTeacherList = this.teacherList.map((value, index, array)=>{
			// 	return
			// })
		},
		mounted() {
			console.log(this.showTeacherList)
		}
	}
</script>

<style lang="less" scoped>
	.teacher-list {
		display: flex;
		justify-content: space-evenly;
	}
	.i-teach-wrap {
		width: 44%;
		padding: 0;
		margin-bottom: 0;
		/* margin-left: 25px; */
		border-radius: 10px;
		background-color: transparent;
		.i-teach-pic {
			width: 60%;
			margin: 5px auto 0;
			img {
				display: block;
				border-radius: 50%;
				max-width: 100%;
				transition: .5s;
				-webkit-transition: .5s;
			}
		}
		.teacher-name {
			margin-top: 4px;
			a.fsize18 {
				font-size: 14px;
			}
		}
		.teacher-education {
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			line-height: 30px;
			span.fsize14 {
				font-size: 14px;
			}
		}
		.teacher-career {
			padding-top: 7px;
			border-top: 1px dotted #e2e2e2;
			height: 25px;
			font-size: 13px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden

		}
	}
</style>
