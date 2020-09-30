<template>
	<div class="content-list-item" v-show="current === index">
		<slot name="courseItem" ></slot>
		<slot name="examOnline" ></slot>
	</div>
</template>

<script>
  	/* 切换时显示的内容 */
	export default {
    	name: "toggleContent",
		props: {
    		"index": {
    			type: Number,
				default: 0,
				required: true
			},
    		"current": {
    			type: Number,
				default: 0,
    			required: true
			},
			// 是否需要启动插槽显示内容, 默认为 false
			/*"needSlot": {
    			type: Boolean,
				default: false
			}*/
		},
		mounted() {
    		// 为了不出差错, 需要字符串转数字
    		this.index = Number(this.index);
    		this.current = Number(this.current);
    		console.log(this.current);
    		console.log(this.index);
		},

	}
</script>

<style scoped>

</style>
