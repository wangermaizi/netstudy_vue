<template>
	<form class="search" action="javascript:void (0)" method="post">
		<label>
			<!-- 这个需要处理 @keydown.enter 会与blur冲突, 导致触发两次的问题 -->
			<input type="text" placeholder="请搜索" @keydown.enter.native="$event.target.blur" @blur="searchEvent" name="queryCourse.courseName" v-model="iptValue">
			<button type="submit" @click="searchEvent" class="s-btn">搜</button>
		</label>
	</form>
</template>

<script>
	export default {
		name: "inputTpl",
		data() {
			return {
				iptValue: ""
			}
		},
		methods: {
			searchEvent() {
				this.iptValue = this.iptValue.trim();
				if (this.iptValue !== "") {
					this.$emit("searchEvent", this.iptValue)
				}
			}
		},
  	}
</script>

<style lang="less" scoped>
	.search {
		display: block;
		/*position: absolute;
		right: 0;
		top: 8px;*/
		height: 29px;
		width: auto;
		label {
			height: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			input {
				width: 120px;
				height: 27px;
				border: 1px solid #BBBBBB;
				border-radius: 5px 0 0 5px;
				outline: none;
				font-size: 13px;
				text-indent: 8px;
			}
			button {
				width: 32px;
				height: 100%;
				line-height: 29px;
				text-align: center;
				background-color: #428BCA;
				font-size: 14px;
				outline: none;
				border: none;
				margin: 0;
				color: #fff;
				border-radius: 0 5px 5px 0;
			}
		}

	}
</style>
