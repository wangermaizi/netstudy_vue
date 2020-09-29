<template>
	<div class="filter-content c-s-dl-li">
		<cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
	</div>
</template>

<script>
	/* 滚动筛选条件 */

	export default {
    	name: "scrollFilter",
		props:["filterData"],
		data() {
			return {
				current: "快车",
				filterList: [],
				labels:[
					'快车',
					'小巴',
					'专车',
					'顺风车',
					'代驾',
					'公交',
					'自驾租车',
					'豪华车',
					'二手车',
					'出租车'
				]
			}
		},
		methods: {
			changeHandler(cur) {
				console.log(cur);
				this.current = cur
			}
		},
		mounted() {
    		// const that = this;
    		// this.labels.map((value, index, array)=>{
			// 	 return this.filterData[0].name
			// });
    		// this.current = this.filterData[0].name
			if (this.filterData) {

			}
		}

	}
</script>

<style lang="less">
	.cube-scroll-wrapper {
		height: 100%;
		line-height: 34px;
	}
	.cube-scroll-nav-bar {
		background-color: transparent;
		.cube-scroll-nav-bar-item {
			padding: 0 14px;
		}
	}
</style>
