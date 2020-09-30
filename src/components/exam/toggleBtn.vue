<template>
  	<div class="nav-list-item" :data-label="text" @click="toggle">
		<div class="nav-list-item-icon">
			<img v-lazy="img" :alt="text">
		</div>
		<div class="nav-list-item-title" :class="{active:current === index}">
			{{text}}
		</div>
	</div>
</template>

<script>
	/* 考试的切换按钮 */
  	export default {
    	name: "toggleBtn",
		props:{
    		img: {
    			type: String,
				required: true
			},
			text: {
    			type: String,
				required: true
			},
			index: {
    			type: Number,
				required: true
			},
			current: {
    			type: Number,
				required: true
			}
		},
		methods: {
			toggle() {
				this.$emit("toggle", this.index)
			}
		}
  	}
</script>

<style lang="less" scoped>
	.nav-list-item {
		width: auto;
		height: auto;
		padding: 0 10px;
		flex-shrink: 0;
		.nav-list-item-icon {
			width: 46px;
			margin: 0 auto;
		}
		img {
			width: 100%;
			height: 100%;
		}
		.nav-list-item-title {
			text-align: center;
			font-size: 14px;
		}
		.nav-list-item-title.active {
			color: #428bac;
		}
	}
</style>
