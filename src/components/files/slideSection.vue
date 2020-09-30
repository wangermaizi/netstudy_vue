<template>
	<!-- 节内容 -->
	<div class="secondary-box">
		<div class="secondary-title">
			<span> {{sectionObj.name}} </span>
			<span class="ab-r">
				<i :class="sectionRightIcon"></i>
			</span>
		</div>

		<div class="card-list">
			<!--	<file-card-item -->
			<div class="box">
				<file-card-item v-for="(item,index) of topList" :fileObj="item" :key="index+'wang'" />
			</div>
		</div>
		<div class="blank"></div>
		<div class="card-list">
			<div class="box">
				<file-card-item v-for="(item,index) of bottomList" :fileObj="item" :key="index+'wang'" />
			</div>
		</div>
		<!-- 第一列插槽 -->
		<!--<slot name="top"> </slot>-->
		<!-- 用于当作间隔的 -->
		<!--<slot name="middle"></slot>-->
		<!-- 第二列插槽 -->
		<!--<slot name="down"></slot>-->
	</div>
</template>

<script>
	/* 循环节的内容 */
	import FileCardItem from "@/components/files/fileCardItem";

	export default {
		name: "slideSection",
		props:{
			sectionObj:{
				type: Object,
				required: true
			},
			sortType:{
				type: String,
				required: true
			},
			"sectionRightIcon": {
				type: String,
				default: "fa fa-angle-right"
			},
		},
		components:{
			"file-card-item": FileCardItem
		},
		data() {
			return {
				topList: [],  // 排在上面的list
				bottomList: []  // 排在下面的list
			}
		},
		mounted() {
			switch (this.sortType) {
				// 课程在上面的排序
				case "course":
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					break;
				// 文档在上面的排序
				case "file":
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					break;
				// 默认课程在上面
				default:
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					break;
			}

		}
	}
</script>

<style scoped>

</style>
