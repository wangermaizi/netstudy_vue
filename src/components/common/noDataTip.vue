<template>
	<div class="no-data">
		<p class="c-ccc" :style="'color: '+ color">
			<i :class="icon" aria-hidden="true"></i>
			{{text}}
		</p>
	</div>
</template>

<script>
	/* 没有数据时的提示模板 */
  	export default {
    	name: "noDataTip",
		props:{
    		"text": {
    			type: String,
				default: "没有更多了~~~"
			},
			"icon": {
    			type: String,
				default: "fa fa-refresh"
			},
			"color": {
    			type: String
			}
		}
  	}
</script>

<style lang="less" scoped>
	.no-data {
		margin: 18px 0;
		p {
			font-size: 14px;
		}
	}
</style>
