<template>
	<div>
		<div class="bMask" @click="closeLogin()"></div>
		<div class="dialogWrap">
			<div class="dialog-ele">
				<!-- 登录注册切换栏 -->
				<div class="d-s-head pr">
					<div @click="closeLogin" title="关闭" class="icon16 pa">
						<i class="fa fa-close"></i>
					</div>
					<div id="d-s-head-tab" class="d-s-head-tab">
						<a href="javascript:void(0)" @click="toggleLoginActive(0)" :class="{'current': activeIndex === 0}">
							登录
						</a>
						<a href="javascript:void(0)" @click="toggleLoginActive(1)" :class="{'current': activeIndex === 1}">
							注册
						</a>
					</div>
				</div>

				<div class="of">
					<div id="lrEleWrap" class="mt10 mb20 ml20">
						<div id="d-s-head-cont" class="lrWrap">
							<!-- 登录页面 -->
							<section class="dis e-login-ele" v-show="activeIndex === 0">
								<div class="mt10"><p class="e-l-jy"></p></div>
								<div>
									<ol class="e-login-options">
										<li>
											<input
												id="u-email"
												type="text"
												placeholder="请输入登录邮箱" name=""
												value="mj@mj.ink">
											<p class="lr-tip-wrap"></p>
										</li>
										<li>
											<input id="u-password"
												   type="password"
												   placeholder="请输入密码"
												   name=""
												   value="Passw0rd">
											<p class="lr-tip-wrap"></p>
										</li>
									</ol>
									<section class="hLh30 of pl10 fz12 txtlf"><span class="fl"><label class="hand c-999 vam"><input
										type="checkbox" style="vertical-align: -2px;" id="autoThirty">自动登录</label>
										<router-link class="vam ml10 c-blue" title="" to="/login/passwordRecovery">
											忘记密码?
										</router-link>
									</span>
									</section>
									<section class="mt20 tac"><a href="javascript:void(0)" title="登 录"
																 class="e-login-btn" onclick="dialogLogin(1)">登 录</a>
									</section>
								</div>
							</section>
							<!-- 注册页面 -->
							<section class="undis e-login-ele" v-show="activeIndex === 1">
								<div class="mt10">
									<p class="e-l-jy"></p>
								</div>
								<div>
									<ol class="e-login-options">
										<li>
											<input
												id="u-email-reg"
												type="text"
												placeholder="请输入登录邮箱"
												name=""
												value="">
											<p class="lr-tip-wrap"></p>
										</li>
										<li>
											<input id="u-mobile-reg"
												   type="text"
												   placeholder="请输入用户手机号"
												   name=""
												   value=""
												   maxlength="11">
											<p class="lr-tip-wrap"></p></li>
										<li>
											<input
												id="u-password-reg"
												type="password"
												placeholder="请输入密码"
												name=""
												value="">
											<p class="lr-tip-wrap"></p></li>
										<li>
											<input
												id="u-passwordre-reg"
												type="password"
												placeholder="请再输入一次密码"
												name=""
												value="">
											<p class="lr-tip-wrap"></p></li>
										<li>
											<input
												id="u-randomcode-reg"
												class="fl"
												style="width: 100px;"
												type="text"
												placeholder="请输入验证码"
												name=""
												value=""
												maxlength="4">

											<div class="code-box">
												<canvas ref="canvasCode"></canvas>
											</div>
										</li>
									</ol>
									<section class="mt20 tac">
										<a href="javascript: void(0)"
										   @click="dialogRegister()"
										   title="注 册"
										   class="e-login-btn">
											注 册
										</a>
									</section>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/* 移动端微信环境外部的登录页面 */
	import Captcha from 'captcha-mini'
	export default {
		name: "loginTpl",
		data() {
			return {
				index: 0,
				closeStyle: {
					backgroundImage: "url("+require("@/assets/images/icon.png")+")",
					"background-position": "-42px -215px"
				},
				activeIndex: 0,
				loginActive: false,
				canvasCode: ""
			}
		},
		methods: {
			login() {

			},
			/* 注册方法 */
			dialogRegister() {

			},
			/* 切换登录,注册 */
			toggleLoginActive(activeIndex) {
				this.activeIndex = activeIndex
				// this.loginActive = !this.loginActive
			},
			/* 点击登录 */
			closeLogin() {
				this.$emit("closeDialog")
			}
		},
		mounted() {
			this.$nextTick(() => {
				let canvasCode = this.$refs.canvasCode;
				canvasCode.width = 100;
				canvasCode.height = 43;
				let captcha = new Captcha({});
				captcha.draw(canvasCode, (r) => {
					this.canvasCode = r.toLowerCase()
				})
			})
		}
	}
</script>

<style lang="less" scoped>
	.bMask {
		background: #000;
		opacity: .3;
		filter: alpha(opacity=30);
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 99999;
	}
	.dialogWrap {
		background: #fff;
		position: fixed;
		left: calc(50% - 159px);
		transition: all .3s ease 0s;
		z-index: 9999999;
		top: 115.5px;
	}
	.d-s-head-tab {
		text-align: left;
		height: 40px;
		a {
			padding: 0 14px;
			width: 80px;
			line-height: 40px;
			font-size: 20px;
		}
	}
	.d-s-head, .d-s-head-infor {
		border-bottom: 1px solid #e2e2e2;
		height: 40px;
		line-height: 40px;
		padding: 0 15px;
		/*width: 100%;*/
		width: 288px;
	}
	.dClose {
		right: 10px;
		top: 15px;

		background-repeat: no-repeat;
	}
	.dClose, .icon-close {

	}
	:link, :visited, ins {
		text-decoration: none;
	}
	.icon16 {
		display: inline-block;
		right: 15px;
		top: 0;
		height: 16px;
		width: 16px;
		vertical-align: middle;
		i {
			font-size: 18px;
			color: #ea562e;
		}
	}
	.pa {
		position: absolute;
	}
	.dialog-ele .of {
		overflow: hidden;
		.lrWrap {
			width: 280px;
		}
		.e-login-ele {
			.mt10 {
				margin-top: 0;
			}
			ol, ul {
				list-style: none;
				text-align: left;
				position: relative;
				li {
					position: relative;
				}
			}


		}
	}
	.e-login-options li input {
		width: 260px;
		padding: 0;

	}
	.e-login-options li input {
		background: #fff;
		border: 1px solid #ddd;
		color: #666;
		height: 38px;
		font: 16px/38px 'Microsoft YaHei';
		/*width: 300px;*/
		padding-left: 8px;
		vertical-align: middle;
	}
	.e-login-options li .lr-tip-wrap {
		margin-top: 5px;
		height: 18px;
		line-height: 18px;
	}
	.hLh30 {
		line-height: 30px;
	}
	.pl10 {
		padding-left: 10px;
	}
	.c-999 {
		color: #999;
	}
	.hand {
		cursor: pointer;
	}
	.vam {
		vertical-align: middle;
	}
	.fz12 {
		font-size: 14px;
	}
	.c-blue {
		color: #3580DE;
	}
	.e-l-jy {
		display: block;
		height: 20px;
		line-height: 20px;
		text-align: center;
	}
	.mt20 {
		margin-top: 20px;
	}

	.mt10 {
		margin-top: 0;
	}
	.ml20 {
		margin-left: 20px;
	}
	.mb20 {
		margin-bottom: 20px;
	}
	.txtlf {
		text-align: left;
	}
	.e-login-btn, .e-register-btn, .order-submit {
		background: #985054;
		border-radius: 3px;
		color: #fff;
		width: 180px;
		font-size: 16px;
	}
	.e-login-btn, .e-register-btn {
		display: block;
		width: 300px;
		margin: 0 auto;
		height: 34px;
		text-align: center;
		font: 18px/34px SimHei;
		color: #fff;
	}
	.e-login-btn, .e-register-btn {
		width: 100%;
	}
	.d-s-head-tab a.current {
		border-color: #ea562e;
		color: #ea562e;
	}
	.code-box {
		display: inline-block;
		vertical-align: middle;
		position: relative;
		top: 2px;
		left: 10px;
	}
	input[type="checkbox"] {
		font-size: 18px;
		width: 13px;
		height: 13px;
	}
</style>
