<template>
	<div id="collect">
		<!-- 最底部背景色，固定，全屏 -->
		<Windowscreen />
		<!-- 我的>>>>收藏 -->
		<div class="collect">
			<Nav text='收藏' />
			<!-- 下推盒子，以免导航栏遮盖内容 -->
			<div style="height: 49px;"></div>
			<!-- 内容区域 -->
			<Swiper :listdata="collectData" operation='取消' />
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/nav.vue';
	import Windowscreen from '@/components/user/windowscreen.vue';
	import Swiper from '@/components/user/userswiper.vue';
	export default {
		components: {
			Nav,
			Windowscreen,
			Swiper
		},
		data() {
			return {
				collectData:[]
			}
		},
		mounted() {
			this.getcollect();
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
			 */
			getcollect(){
				this.collectData = [
					{id:0,'url':require('@/assets/images/user/test_course.jpg'),'free':false,'title':'影想力摄影小课堂','subtitle':'趣味摄影','price':199,'purchase':false,'category':'file'},
					{id:1,'url':require('@/assets/images/user/test_course.jpg'),'free':false,'title':'Python基本编写方法和Python介绍','subtitle':'永久可看','price':199,'purchase':true,'category':'video'},
					{id:2,'url':require('@/assets/images/user/test_course.jpg'),'free':true,'title':'Python基本编写方法和Python介绍','subtitle':'永久可看','price':0,'purchase':true,'category':'video'}
				];
			},
		},
	}
</script>

<style lang="less" scoped>
	@import "~@/assets/css/userstyle.less";
</style>
