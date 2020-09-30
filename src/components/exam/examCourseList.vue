<template>
  	<!-- 用于渲染 套题练习, 章节练习, 错题练习 -->
	<div>
		<div class="item-content">
			<course-card-item v-for="(item, index) of practiseList" :course-item="item" :key="index+'wang'" />
		</div>
		<div>
			<more-change-btn :more-title="moreBtnObj.title" :more-router="moreBtnObj.router" @change="changeEvent" />
		</div>
	</div>
</template>

<script>
	import CourseCardItem from "@/components/common/courseCardItem";
	import MoreChangeBtn from "@/components/common/moreChangeBtn";

	export default {
    	name: "examCourseList",
		props: {
    		practiseList: {
    			type: Array,
				required: true
			},
			moreBtnObj: {
    			type: Object,
				required: true
			},
			"label-title": {
    			type: String,
				required: true
			}
		},
		components: {
    		CourseCardItem,
			MoreChangeBtn
		},
		methods: {
			changeEvent() {
				this.$emit("change", this.labelTitle)
			}
		}


	}
</script>

<style lang="less" scoped>
	.item-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
