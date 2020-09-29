<template>
	<div id="my">
		<!-- 最底部背景色，固定，全屏 -->
		<div id="windowScreen"></div>
		<!-- 背景图 -->
		<div class="background-blue">
			<img src="@/assets/img/user-img/bg.png" />
		</div>
		<!-- 内容区域 -->
		<div class="center">
			<!-- 头像部分 -->
			<div class="edit">
				<div class="edit-head">
					<img :src="userinfo.headportrait" />
				</div>
				<div class="edit-text">
					<div class="edit-top">
						<div class="edit-name">{{userinfo.username}}</div>
						<div class="edit-icon-xiaoxi">
							<i class="icon icon-lingdang"></i>
						</div>
					</div>

					<div class="edit-outcome">
						<div>总学分:{{userinfo.credit}}</div>
						<div>总学时:{{userinfo.period}}</div>
					</div>
				</div>
			</div>
			<div class="region-label">
				<div class="label-1">
					<div class="label-1-title">收藏</div>
					<div class="label-1-number">{{userinfo.collect}}</div>
				</div>
				<div class="label-1">
					<div class="label-1-title">浏览</div>
					<div class="label-1-number">{{userinfo.browse}}</div>
				</div>
				<div  class="label-1" style="border: 0;">
					<div class="label-1-title">证书</div>
					<div class="label-1-number">{{userinfo.certificate}}</div>
				</div>
			</div>
			<div class="region-function">
				<div class="function-switch">
					<div class="switch-1">
						<div :class="switchOpen=='teacher'?'switch-1-teacher1 switch-1-teacher3':'switch-1-teacher1'" @click="switchbtn('teacher')">教师</div>
						<div :class="switchOpen=='student'?'switch-1-teacher2 switch-1-teacher3':'switch-1-teacher2'" @click="switchbtn('student')">学生</div>
						<div :class="switchOpen=='student'?'switch-open2':'switch-open1'"></div>
					</div>
				</div>
				<div class="function-1" v-for="region of regionFunction" :key="region.id">
					<div class="function-1-icon">
						<img :src="region.icon" />
					</div>
					<div class="function-1-text">{{region.text}}</div>
				</div>
			</div>
			<div class="region-set-up">
				<div class="set-up-1" v-for="(setUp,index) of regionSetUp" :key='index'>
					<div class="set-up-1-left">
						<i :class="setUp.leftIcon"></i>
					</div>
					<div class="set-up-1-center">{{setUp.text}}</div>
					<div class="set-up-1-right">
						<i :class="setUp.rightIcon"></i>
					</div>
				</div>
				<div class="set-up-1" style="border: 0;">
					<div class="set-up-1-left">
						<i class="icon icon-tuichu"></i>
					</div>
					<div class="set-up-1-center">退出</div>
					<div class="set-up-1-right">
						<i class="fa fa-angle-right"></i>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 49px;"></div>
		<!-- 底部组件tabber栏 -->
		<Tabber title='我的' />
	</div>
</template>
<script>
	import Tabber from '@/components/common/tabBar.vue'
	export default {
		components: {
			Tabber,
		},
		data() {
			return {
				switchOpen:'student',
				userinfo:{},
				regionFunction:[
					{'id':'0','icon':require('@/assets/img/user-img/lianxicuoti.png'),'text':'练习错题'},
					{'id':'1','icon':require('@/assets/img/user-img/kaoshijilu.png'),'text':'考试记录'},
					{'id':'2','icon':require('@/assets/img/user-img/xuexijilu.png'),'text':'学习记录'},
					{'id':'3','icon':require('@/assets/img/user-img/wodedingdang.png'),'text':'我的订单'},
					{'id':'4','icon':require('@/assets/img/user-img/kechenwenda.png'),'text':'课程问答'},
					{'id':'5','icon':require('@/assets/img/user-img/xuexibiji.png'),'text':'学习笔记'},
					{'id':'6','icon':require('@/assets/img/user-img/wodexouye.png'),'text':'我的作业'},
				],
				regionSetUp:[
					{leftIcon:'icon icon-shucheng',text:'学时与学分',rightIcon:'fa fa-angle-right'},
					{leftIcon:'icon icon-bangding',text:'微信绑定',rightIcon:'fa fa-angle-right'},
					{leftIcon:'icon icon-shezhi',text:'设置',rightIcon:'fa fa-angle-right'}
				]
			}
		},
		mounted() {
			this.windowscreen()
			// 获取学生个人信息
			this.edituser()
		},
		methods:{
			// 获取屏幕分辨率的宽高，赋值让屏幕底部全部暗色
			windowscreen(){
				let Screen = document.getElementById('windowScreen');
				// 获取屏幕分辨率高度与宽度
				let screenwidth = window.screen.width;
				let screenheight = window.screen.height;
				Screen.style.width = `${screenwidth}px`;
				Screen.style.height = `${screenheight}px`;
			},
			// 获取个人信息
			edituser(){
				this.userinfo = {
					username:'请登录后查看昵称',//昵称
					credit:'0',//学分
					period:'0',//学时
					headportrait:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2304902608,2340246430&fm=26&gp=0.jpg',//头像
					collect:'0',// 收藏
					browse:'0',// 浏览
					certificate:'0',// 证书
				}
			},
			switchbtn(value){
				this.switchOpen = value;
			},
		},
	}
</script>

<style lang="less">
	#windowScreen{
		position: fixed;
		top: 0;
		background-color: #F0F0F0;
		z-index: -5;
	}
	.background-blue{
		width: 100%;
		height: 180px;
		position: absolute;
		top: 0px;
		background-size: 100%;
		// overflow: hidden;
		z-index: 0;
		img{
			width: 100%;
			height: 180px;
			z-index: 1;
		}
	}
	.center{
		z-index: 5;
		width: 100%;
		box-sizing: border-box;
		padding: 12px;
		position: relative;
		.edit{
			width: 100%;
			height: 80px;
			box-sizing: border-box;
			margin-top: 18px;
			padding: 0 10px;
			display: flex;
			.edit-head{
				width: 68px;
				height: 68px;
				border-radius: 50%;
				overflow: hidden;
				padding-top: 10px;
				img{
					width: 68px;
					height: 68px;
					object-fit: cover;
					border-radius: 50%;
				}
			}
			.edit-text{
				flex: 1;
				box-sizing: border-box;
				margin-left: 10px;
				height: 68px;
				.edit-top{
					display: flex;
					width: 100%;
					.edit-name{
						width: 200px;
						font-size: 18px;
						font-family: Segoe UI, Segoe UI-Bold;
						font-weight: 700;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-top: 20px;
						// color: #ffffff;
					}
					.edit-icon-xiaoxi{
						flex: 1;
						text-align: right;
						i{
							font-size: 25px;
							color: #fff;
						}
					}
				}

				.edit-outcome{
					width: 250px;
					height: 28px;
					display: flex;
					margin-top: 10px;
					div{
						flex: 1;
						font-size: 16px;
						font-family: Segoe UI, Segoe UI-Regular;
						font-weight: 400;
						text-align: left;
					}
				}
			}
		}
		.region-label{
			width: 100%;
			height: 86px;
			box-sizing: border-box;
			margin-top: 15px;
			background: #fff;
			border-radius: 10px;
			display: flex;
			padding: 15px 0px;
			.label-1{
				flex: 1;
				height: 56px;
				box-sizing: border-box;
				border-right: 1px solid #F2F2F2;
				.label-1-title{
					font-size: 16px;
					font-family: Segoe UI, Segoe UI-Bold;
					font-weight: 700;
					text-align: center;
					color: #000000;
				}
				.label-1-number{
					font-size: 14px;
					margin-top: 15px;
					font-family: Segoe UI, Segoe UI-Regular;
					font-weight: 400;
					text-align: center;
					color: #000000;
				}
			}
		}
		.region-function{
			width: 100%;
			height: 238px;
			box-sizing: border-box;
			margin-top: 15px;
			background: #fff;
			padding: 9px 0px;
			border-radius: 10px;
			display: flex;
			flex-wrap: wrap;
			.function-switch{
				width: 100%;
				height: 52px;
				padding: 8px 0px;
				box-sizing: border-box;
				.switch-1{
					width: 198px;
					height: 36px;
					border: 1px solid #3399ff;
					border-radius: 18px;
					font-size: 14px;
					font-family: Segoe UI, Segoe UI-Regular;
					font-weight: 400;
					box-sizing: border-box;
					margin: 0 auto;
					position: relative;
					.switch-1-teacher1{
						width: 99px;
						height: 36px;
						line-height: 36px;
						float: left;
						text-align: center;
						position: absolute;
						z-index: 1;
						left: 0px;
						transition: all 1s;
					}
					.switch-1-teacher2{
						width: 99px;
						height: 36px;
						float: left;
						line-height: 36px;
						text-align: center;
						position: absolute;
						left: 98px;
						z-index: 1;
						transition: all 1s;
					}
					.switch-1-teacher3{
						color: #fff;
						transition: all 1s;
					}
					.switch-open1{
						width: 104px;
						height: 36px;
						background: #3399ff;
						border: 1px solid #3399ff;
						box-sizing: border-box;
						border-radius: 18px;
						left: 0px;
						transition: all 1s;
						position: relative;
					}
					.switch-open2{
						width: 104px;
						height: 36px;
						background: #3399ff;
						border: 1px solid #3399ff;
						box-sizing: border-box;
						border-radius: 18px;
						left: 93px;
						transition: all 1s;
						position: relative;
					}
				}
			}
			.function-1{
				width: 25%;
				padding: 10px 0px;
				.function-1-icon{
					width: 50px;
					height: 50px;
					margin: auto;
					img{
						width: 50px;
						height: 50px;
					}
				}
				.function-1-text{
					font-size: 14px;
					font-family: Segoe UI, Segoe UI-Regular;
					font-weight: 400;
					text-align: center;
					color: #000000;
				}
			}
		}
		.region-set-up{
			width: 100%;
			height: 200px;
			box-sizing: border-box;
			margin-top: 15px;
			background: #fff;
			padding: 0 14px;
			border-radius: 10px;
			.set-up-1{
				width: 100%;
				height: 50px;
				box-sizing: border-box;
				display: flex;
				border-bottom: 1px solid #F2F2F2;
				.set-up-1-left{
					width: 22px;
					height: 22px;
					line-height: 50px;
					i{
						display: block;
						width: 22px;
						height: 22px;
						line-height: 50px;
					}
				}
				.set-up-1-center{
					flex: 1;
					margin-left: 10px;
					line-height: 50px;
					font-size: 14px;
					font-family: 微软雅黑;
					font-weight: 400;
					text-align: left;
					color: #000000;
				}
				.set-up-1-right{
					width: 16px;
					height: 16px;
					line-height: 50px;
					i{
						display: block;
						width: 16px;
						height: 16px;
						font-size: 16px;
						line-height: 50px;
					}
				}
			}
		}
	}
</style>
