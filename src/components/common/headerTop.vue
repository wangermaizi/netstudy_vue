<template>
	<div>
		<header id="header">
			<section class="container">
				<!-- 左边内容 -->
				<a href="">
					<img src="@/assets/images/keyobond-logo.png" alt="">
				</a>
				<!-- 右边的内容 -->
				<ul class="h-r-login user-info">
					<!-- 登录li -->
					<li class="h-r-user" id="is-login-two" v-if="hasLogin">
						<router-link to="/uc/index" title="">
							<img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqklHnYt6lUnBqQh1pkeibY3zicdFiaIYODv3Cg6js8Bs5CpjibQuPNuYI7e9ZbotWNibOXHlq3uAAZNQ/132" width="30" height="30" class="vam picImg" alt="">
							<span class="vam disIb" id="userName" title="123456">123456</span>
						</router-link>
					</li>

					<!-- 未登录li -->
					<li v-else id="no-login">
						<a href="javascript: void (0)" @click="showLogin"  title="登录">
							<em class="icon18 login-icon">&nbsp;</em><span class="vam ml5">登录</span>
						</a>
					</li>

				</ul>
			</section>
		</header>
		<login-tpl v-if="showLoginFlag" @closeDialog="closeDialog">

		</login-tpl>
	</div>

</template>

<script>
	/* 这个头部导航栏 */
	import loginTpl from "@/components/common/loginTpl";

	export default {
    	name: "headerTop",
		components: {
    		"login-tpl": loginTpl
		},
		data() {
			return {
				userInfo: {
					age: 0,
					bannerUrl: null,
					courseStudyhistoryList: null,
					createTime: 1597891868000,
					ddUserID: null,
					email: "",
					isavalible: 1,
					lastSystemTime: 1597891868000,
					loginTimeStamp: 1601102233624,
					mobile: "15877031526",
					msgNum: 0,
					password: "",
					picImg: "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqklHnYt6lUnBqQh1pkeibY3zicdFiaIYODv3Cg6js8Bs5CpjibQuPNuYI7e9ZbotWNibOXHlq3uAAZNQ/132",
					scoreUserGradeList: null,
					sex: 0,
					showName: null,
					sysMsgNum: 1,
					teacherId: 69,
					userId: 518,
					userName: "123456"
				},
				hasLogin:false,
				showLoginFlag:false
			}
		},
		methods: {
			showLogin() {
				// console.log(this.API.common.isLogin)
				// this.API.common.isLogin().then(res => {
				// 	console.log(res)
				// });
				this.showLoginFlag = true
			},
			closeDialog() {
				this.showLoginFlag = false
			}
		},
  	}
</script>

<style lang="less" scoped>
	header#header {
		height: 49px;
		width: 100vw;
		background-color: #fff;
		padding: 0;
		z-index: 2;
		/*box-shadow: none;*/
		box-shadow: 0 2px 3px rgba(7,0,2,.04);
		position: fixed;
		left: 0;
		top: 0;

		/*border-bottom: 1px solid #ccc;*/
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			height: 100%;
		}
		.container a {
			width: 207px;
			height: 42px;
			display: flex;
			align-items: center;
			img {
				max-width: 100%;
				height: auto;
				vertical-align: middle;
			}
		}
		.h-r-login {
			float: none;
			padding: 0;
			position: relative;
		}
		/* 右边的内容 */
		.h-r-login li a {
			cursor: pointer;
			line-height: 50px;
			color: #666;
			font-size: 16px;
			transition: .3s;
			-webkit-transition: .3s;
			display: flex;
			align-items: center;
			width: auto;
			img {
				border-radius: 50%;
				width: 30px;
				height: 30px;
				display: inline-block;
			}
			span {
				display: inline-block;
				max-width: 70px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}

	}
	header#header:after {
		content: "";
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 49px;
		/*// padding-bottom: 49px;*/
	}
	@media (max-width: 1199px) and (min-width: 992px) {
		header#header .container {
			padding: 0;
		}
	}
</style>
