<template>
	<div id="browse">
		<!-- 最底部背景色，固定，全屏 -->
		<Windowscreen />
		<!-- 我的>>>>收藏 -->
		<div class="browse">
			<Nav text='浏览' />
			<!-- 下推盒子，以免导航栏遮盖内容 -->
			<div style="height: 49px;"></div>
			<!-- 内容区域 -->
			<div class="browse-title">最近浏览</div>
			<Swiper :listdata="browseNews" />
			<div class="browse-title">历史浏览</div>
			<Swiper :listdata="browsehistory" />
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/nav.vue';
	import Windowscreen from '@/components/user/windowscreen.vue';
	import Funt from '@/components/user/Allfunction.vue';
	import Swiper from '@/components/user/userswiper.vue';
	export default {
		components: {
			Nav,
			Windowscreen,
			Swiper
		},
		data() {
			return {
				browseData:[],//获取到的全部数据
				browseNews:[],//最近浏览
				browsehistory:[],//历史记录
			}
		},
		mounted() {
			this.getbrowse();
		},
		methods:{
			// 请求得到收藏的数据
			/*
			 图片     url:String,//图片的网络地址，无则空
			 是否免费 free:Boolean,//true为免费，false为需要购买
			 标题     title:String,
			 副标题   subtitle:String,
			 价格     price:Number,
			 是否购买 purchase:Boolean,//true为购买，false为未购买
			 类别     category:String,//file为文档，video为视频
			 时间     creamTime:string,//最后浏览记录时间
			 */
			getbrowse(){
				this.browseData = [
					{id:0,'url':require('@/assets/images/user/test_course.jpg'),'free':false,'title':'影想力摄影小课堂','subtitle':'趣味摄影','price':199,'purchase':false,'category':'file',creamTime:'1601371935175'},
					{id:1,'url':require('@/assets/images/user/test_course.jpg'),'free':false,'title':'Python基本编写方法和Python介绍','subtitle':'永久可看','price':199,'purchase':true,'category':'video',creamTime:'1601285613987'},
					{id:2,'url':require('@/assets/images/user/test_course.jpg'),'free':true,'title':'Python基本编写方法和Python介绍','subtitle':'永久可看','price':0,'purchase':true,'category':'video',creamTime:'1601285613983'}
				];
				// 通过时间来判断数组,分为最近和历史
				let newsdate = Funt.timehandle(new Date().getTime());
				for(let i=0;i<this.browseData.length;i++){
					this.browseData[i].creamTime = Funt.timehandle(this.browseData[i].creamTime);
					if(this.browseData[i].creamTime===newsdate){
						this.browseNews.push(this.browseData[i]);
					}else{
						this.browsehistory.push(this.browseData[i]);
					}
				}
			},

		},
	}
</script>

<style lang="less" scoped>
	@import "~@/assets/css/userstyle.less";
	.browse-title{
		width: 100%;
		height: 40px;
		font-size: 14px;
		font-weight: 700;
		text-align: left;
		color: #3399ff;
		line-height: 40px;
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>
