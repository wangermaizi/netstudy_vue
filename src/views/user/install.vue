<template>
	<div id="install">
		<!-- 设置页面 -->
		<Nav text='设置' />
		<div style="height: 49px;"></div>
		<div>
			<div class="install">
				<div class="install-top-switch">
					<div class="top-switch-box">
						<div @click="installstate='message'" :class="installstate==='message'?'switch-box-1 color':'switch-box-1'">基本资料</div>
						<div @click="installstate='pwd'" :class="installstate==='pwd'?'switch-box-1 color':'switch-box-1'">密码设置</div>
					</div>
					<div class="top-switch-underline">
						<div :class="installstate==='message'?'switch-underline-1':'switch-underline-2'"></div>
					</div>
				</div>
			</div>
			<div></div>
			<div>
				<!-- 根据点击不同,使用不同的组件内容 -->
				<components v-if="installstate==='message'" :is="'InstallMessage'" />
				<components v-if="installstate==='pwd'" :is="'InstallPwd'" />
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/nav.vue';
	import InstallMessage from '@/components/user/installMessage.vue';
	import InstallPwd from '@/components/user/installPwd.vue';
	export default {
		components: {
			Nav,
			InstallMessage,
			InstallPwd
		},
		data() {
			return {
				installstate:'message',//切换基本信息message,以及密码pwd
			}
		},
	}
</script>

<style lang="less" scoped>
	.install{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		height: 46px;
		box-sizing: border-box;
		padding: 0 15px;
		.install-top-switch{
			width: 100%;
			border-bottom: 2px solid #CCCCCC;
			height: 46px;
			box-sizing: border-box;
			.top-switch-box{
				width: 100%;
				height: 40px;
				display: flex;
				.switch-box-1{
					width: 64px;
					height: 42px;
					line-height: 46px;
					font-size: 16px;
					font-weight: 700;
					text-align: left;
					color: #333333;
					margin-right: 28px;
				}
				.color{
					color: #3399ff !important;
				}
			}
			.top-switch-underline{
				width: 100%;
				height: 4px;
				.switch-underline-1{
					position: relative;
					background: #3399ff;
					height: 4px;
					width: 64px;
					top: 2px;
					left: 0px;
					transition: all 0.5s;
				}
				.switch-underline-2{
					position: relative;
					background: #3399ff;
					height: 4px;
					width: 64px;
					top: 2px;
					left: 92px;
					transition: all 0.5s;
				}
			}
		}
	}
</style>
