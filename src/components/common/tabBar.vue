<template>
	<div id="tabber">
		<div>
			<div class="tabber-box">
				<div v-for="(item,index) of tabs" :key='index' :class="item.label==title ? 'box-2':'box-1'" @click="btnroute(item.label)">
					<div class="box-1-top">
						<i :class="item.icon"></i>
					</div>
					<div class="box-1-bottom">{{item.label}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "tabBar",
		props:{
		    title:{
		    	type: String,
				required: true
			},//点击的当前页面
		},
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
				}],
				data: ""
			}
		},
		mounted(){
		    this.data = this.title;
		},
		methods: {
			// 跳转到其他页面
			btnroute(value){
				const that = this;
				console.log(value);
				if (!this.title) {
					throw "title of props must require"
				}
				// this.$route
				if(value !== this.title){
					switch(value) {
						case '课程':
							that.$router.push('/course');
							break;
						case '文档':
							that.$router.push('/files');
							break;
						case '考试':
							that.$router.push('/exam');
							break;
						case '我的':
							that.$router.push('/uc/index');
							break;
					}
				}
			}
		},
	}
</script>

<style lang="less">
	.tabber-box{
		width: 100%;
		height: 49px;
		display: flex;
		padding: 7px 0;
		position: fixed;
		bottom: 0;
		z-index: 20;
		box-sizing: border-box;
		background-color: #fff;
		box-shadow: 0 1px 6px #c0c0c0;
		.box-1{
			flex: 1;
			height: 35px;
			.box-1-top{
				width: 100%;
				height: 22px;
				i{
					width: 100%;
					display: block;
					height: 22px;
					line-height: 22px;
					font-size: 18px;
				}
			}
			.box-1-bottom{
				width: 100%;
				height: 13px;
				font-size: 12px;
			}
		}
		.box-2{
			flex: 1;
			height: 35px;
			.box-1-top{
				width: 100%;
				height: 22px;
				i{
					width: 100%;
					display: block;
					height: 22px;
					line-height: 22px;
					font-size: 18px;
					color: #1890ff;
				}
			}
			.box-1-bottom{
				width: 100%;
				height: 13px;
				font-size: 12px;
				color: #1890ff;
			}
		}
	}
</style>
