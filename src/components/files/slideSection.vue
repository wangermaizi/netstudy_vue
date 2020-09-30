<template>
	<!-- 节内容 -->
	<div class="secondary-box">
		<div class="secondary-title">
			<span> {{sectionObj.name}} </span>
			<span class="ab-r">
				<i :class="sectionRightIcon"></i>
			</span>
		</div>

		<div class="card-list wrapper" ref="songScroll">
			<div class="box content" :style="">
				<file-card-item v-for="(item,index) of topList" :fileObj="item" :key="index+'wang'" />
			</div>
			<!--	<file-card-item -->
		</div>
		<div class="blank"></div>
<!--		<div class="card-list wrapper" ref="songScroll">-->
<!--			<div class="box content">-->
<!--				<file-card-item v-for="(item,index) of bottomList" :fileObj="item" :key="index+'wang'" />-->
<!--			</div>-->
<!--		</div>-->
		<!-- 第一列插槽 -->
		<!--<slot name="top"> </slot>-->
		<!-- 用于当作间隔的 -->
		<!--<slot name="middle"></slot>-->
		<!-- 第二列插槽 -->
		<!--<slot name="down"></slot>-->
	</div>
</template>

<script>
	// 引入Better-Scroll 实现横向优化滚动
	import BScroll from 'better-scroll'

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
				bottomList: [],  // 排在下面的list
				topListLength: 0,
				bottomListLength: 0,
			}
		},
		methods: {
			initalScroll() {
				if (!this.songScroll) {
					// console.log(2222);
					console.log(this.$refs.songScroll);
					this.songScroll = new BScroll(this.$refs.songScroll, {
						probeType: 1,
						click: true,
						/* 以下代码非常重要, 规定了BetterScroll滚动的方向 */
						eventPassthrough: 'vertical',
						scrollX: true,
						scrollY: false,
					});
				} else {
					this.songScroll.refresh();
				}
			}
		},
		mounted() {
			switch (this.sortType) {
				// 课程在上面的排序
				case "course":
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					this.topListLength = this.topList.length;
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					this.bottomListLength = this.bottomList.length;
					break;
				// 文档在上面的排序
				case "file":
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					this.topListLength = this.topList.length;
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					this.bottomListLength = this.bottomList.length;
					break;
				// 默认课程在上面
				default:
					this.topList = this.sectionObj.kpointFilesList.filter((value, index, array) => {
						return value.type === ".mp4" || value.type === ".MP4"
					});
					this.topListLength = this.topList.length;
					this.bottomList = this.sectionObj.kpointFilesList.filter((value, index, array)=>{
						return value.type !== ".mp4" && value.type !== ".MP4" && value.type !== 3
					});
					this.bottomListLength = this.bottomList.length;
					break;
			}
			this.$nextTick(() => {this.initalScroll(); });
		}
	}
</script>

<style lang="less" scoped>
	.secondary-title {
		padding-top: 4px;
		padding-left: 15px;
		border-top: 1px solid #f2f2f2;
		color: #666;
		padding-right: 40px;
		position: relative;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		span {
			color: #666;
			font-size: 15px;
		}
		.ab-r {
			position: absolute;
			top: calc(50% - 12px);
			right: 0.35rem;
			display: inline-block;
			transition: all .4s;
		}
	}
	.box {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		/*width: 100%;*/
		width: auto;
	}
	.box:after {
		content: "";
		display: block;
		clear: both;
		height: 0;
		width: 100%;
	}
	.box .card-list-item:first-child {
		margin-left: 0;
	}
	.horizontal-scroll-list-wrap{
		/*border: 1px solid rgba(0, 0, 0, 0.1);*/
		border-radius: 5px;
		.cube-scroll-content {
			display: inline-block;
		}
		.list-wrapper {
			/*padding: 0 10px;*/
			line-height: 60px;
			white-space: nowrap;
		}
		.list-item {
			display: inline-block;
		}
	}
	.blank {
		height: 8px;
	}
	.card-list {
		width: 355px;
		overflow: hidden;
		/*overflow: scroll;*/
	}
</style>
