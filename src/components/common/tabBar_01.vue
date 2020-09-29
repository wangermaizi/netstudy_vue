<template>
	<div class="footer-sticky">
		<cube-tab-bar
			v-model="selectedLabelDefault"
			:data="tabs"
			@click="clickHandler"
			@change="changeHandler">
		</cube-tab-bar>
	</div>
</template>

<script>
	// import {TabBar} from "cube-ui";
	/* 项目底部导航栏 */
	export default {
    	name: "tabBar",
		data() {
			return {
				selectedLabelDefault: '课程',
				tabs: [{
					label: '课程',
					icon: 'fa fa-graduation-cap'
				}, {
					label: '文档',
					icon: 'fa fa-folder-open'
				}, {
					label: '考试',
					icon: 'fa fa-file-text'
				}, {
					label: '我的',
					icon: 'fa fa-user'
				}]
			}
		},
		methods: {
			changeHandler(label) {

			},
			clickHandler(label) {

			}
		},

  	}
</script>

<style lang="less" scoped>
	.footer-sticky {
		position: fixed;
		left: 0;
		bottom: 0;
		height: 49px;
		width: 100vw;
		background-color: #fff;
		box-sizing: border-box;
		/deep/ .cube-tab-bar {
			height: 100%;
			height: 49px;
			display: flex;
			box-sizing: border-box;
			padding: 7px 0px;
		}
		/deep/ .cube-tab {
			padding: 0;
			color: #999999;
			flex: 1;
			height: 35px;
			box-sizing: border-box;
			align-content:space-between;
			/deep/ div {
				font-size: 13px;
				height: 13px;
			}
			/deep/ i {
				font-size: 18px;
				display: block;
				height: 22px;
				line-height: 22px;
			}
			/deep/ i.fa-file-text {
				font-size: 18px;
				position: relative;
				top: -4px;
			}
			/deep/ i.fa-user {
				position: relative;
				top: -2px;
			}
		}
		/deep/ .cube-tab_active {
			color: #1890ff;
		}
	}
</style>
