<template>
	<div class="search-box">
		<form class="box-content" @submit="submitValue" action="javascript: void(0)">
			<input type="text" v-model="searchValue" class="head__input" id="query_courseName" :placeholder="placeholder">
			<svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
				<path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"></path>
			</svg>

			<input type="reset" name="reset" id="reset-search" class="search-box-cancel" value="取消">
			<!--<input type="submit" v-else name="submit" id="reset-search" class="search-box-cancel" value="确定">-->
		</form>
	</div>
</template>

<script>
	/* 带有svg 的搜索框 */
  	export default {
    	name: "searchWithSvg",
		props:{
    		"placeholder" : {
    			type: String,
				default: ""
			}
		},
		data() {
    		return {
				searchValue: ''
			}
		},
		methods: {
			submitValue() {
				this.searchValue = this.searchValue.trim();
				if (this.searchValue === "") {
					return false
				} else {
					this.$emit("change", this.searchValue)
				}
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	.search-box {
		width: 100%;
		max-width: 335px;
		position: relative;
		-webkit-perspective: 500px;
		perspective: 500px;
		margin-left: auto;
		margin-right: auto;
		/*position: static;
		left: 0;
		top: 0;*/
	}
	.head__input {
		padding: 12px 34px 12px 38px;
		border: none;
		font-size: 14px;
		letter-spacing: .4px;
		caret-color: #007991;
		color: #007991;
		outline: none;
		width: 100%;
		max-width: 265px;
		/* box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.1); */
		border-radius: 40px;
		margin-bottom: 14px;
		background-color: #f2f2f2;
		font-style: inherit;
		font-weight: inherit;
	}
	.box-content .icon {
		position: absolute;
		left: 8px;
		top: 8px;
		/* fill: #6E6E6E; */
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		fill: #3399ff;
	}
	.box-content .search-box-cancel {
		position: absolute;
		right: 12px;
		top: 10px;
		font-size: 14px;
		border: none;
		outline: none;
	}
</style>
