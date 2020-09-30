<template>
	<div>
		<h2 class="obtain" ref="chapterTitle" @click="toggleChapterTitle">
			<span>
				<i class="fa fa-circle arrowRot" aria-hidden="true"></i>
				{{chapterData.name}}
			</span>
			<i :class="chapterRightIcon"></i>
		</h2>
		<!-- 不一定显示二级展开 -->
		<div class="secondary" v-if="extendRank === 2">
			<slide-section v-for="(item, index) of chapterData.kpointList" :sortType="sortType" :section-obj="item" :key="index+'wang'" />
		</div>
		<!-- 只显示节的内容 -->
		<div class="secondary" v-if="extendRank === 1">

		</div>
	</div>
</template>

<script>
	/* 垂直下拉组件 */
	import SlideSection from "@/components/files/slideSection";

	export default {
		name: "silde",
		props: {
			"chapterData": {
				type: Object,
				required: true
			},
			"chapterRightIcon": {
				type: String,
				default: "fa fa-angle-right"
			},
			sortType: {
				type: String,
				default: "course"  // 按课程优先排序
				// "file"
			},
			extendRank: {
				type: Number,
				default: 2 // 默认展开二级
			}
		},
		components:{
			"slide-section": SlideSection
		},
		data() {
			return {
				/* 当前 */
				videoList: [],
				docList: []
			}
		},
		methods: {
			toggleChapterTitle() {
				// console.log();
				let chapterTitleEL = this.$refs.chapterTitle;
				let className = chapterTitleEL.className;
				className = className === "obtain"? "obFocus" : "obtain";
				chapterTitleEL.className = className
			}
		},
	}
</script>

<style lang="less" scoped>
	h2 {
		text-decoration: none;
		font-weight: normal;
	}
	h2 {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: left;
		color: #000000;
		font-size: 18px;
		padding: 0.15rem 0;
		-webkit-transition: all 0.6s ease;
		-moz-transition: all 0.6s ease;
		-o-transition: all 0.6s ease;
		-ms-transition: all 0.6s ease;
		span {
			font-size: 17px;
			display: inline-block;
			max-width: 90%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			i {
				color: #3399ff;
				font-size: 10px;
				position: relative;
				/* line-height: 0.45rem; */
				top: -2px;
			}
		}
		> i {
			position: absolute;
			top: calc(50% - 0.31rem);
			right: 0.35rem;
			font-size: 0.82rem;
			display: inline-block;
			transition: all .4s;
		}
	}
	.secondary {
		overflow: hidden;
		height: auto;
		-webkit-transition: all 0.6s ease;
		-moz-transition: all 0.6s ease;
		-o-transition: all 0.6s ease;
		-ms-transition: all 0.6s ease;
		.secondary-title {
			padding-top: 4px;
			padding-left: 0.45rem;
			border-top: 1px solid #f2f2f2;
			color: #666;
			padding-right: 40px;
			position: relative;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 15px;
			.ab-r {
				position: absolute;
				top: calc(50% - 0.31rem);
				right: 0.35rem;
				display: inline-block;
				transition: all .4s;
			}
		}
	}
	.secondary-box.active {
		overflow: hidden;
		height: 35px;
	}
	.obtain + .secondary {
		height: 0;
	}
	.obFocus > i {
		transform: rotateZ(90deg);
	}

</style>
