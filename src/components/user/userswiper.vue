<template>
	<div id="userswiper">
		<!-- 我的>>>>收藏 -->
		<div>
			<!-- 内容区域 --> 
			<div class="swiper-box">
				<div class="swiper-box-box" v-for="item of listdata" :key='item.id'>
					<div class="swiper-ul">
						<div class="swiper-li-title">
							<div class="swiper-li-img">
								<img src="@/assets/img/user-img/test_course.jpg" />
								<i v-if="item.category==='video'" class="fa fa-play-circle-o"></i>
							</div>
							<div class="swiper-li-text">
								<div class="li-text-title">{{item.title}}</div>
								<div class="li-text-category">{{item.subtitle}}</div>
								<div class="li-text-state">
									<div class="li-text-state-price">￥{{item.price}}.00</div>
									<div class="li-text-state-button" v-if="item.free === false && item.purchase === false">立即购买</div>
									<div class="li-text-state-button" v-if="item.free === false && item.purchase === true">已购买</div>
									<div class="li-text-state-button li-text-state-button2" v-if="item.free === true ">免费</div>
								</div>
							</div>
						</div>
						<div class="swiper-li-del" v-on:click="delbtn(item.id)">{{operation}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			listdata:{
				type: Array,
				default: []
			},
			operation:{
				type: String,
				default: '删除'
			},
			delbtn:{
				type: Function,
				default: null
			},
		},
		data() {
			return {}
		},
		methods:{
			delbtn(id){
				// 删除某位置的数组
				for(let i=0;i<this.listdata.length;i++){
					if(this.listdata[i].id===id){
						this.listdata.splice(i,1)
					}
				}
			},
		},
	}
</script>

<style lang="less" scoped>
	@import "~@/assets/css/userstyle.less";
</style>
