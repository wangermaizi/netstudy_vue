<template>
  <div class="title">
    <div class="box">
      <cube-button>{{errorTitle}}</cube-button>
    </div>
  </div>
</template>
<script>
	/* 报错页面主模块 */
	export default {
		name: "index",
		data() {
			return {
				errorTitle: "这是报错页面"
			}
		}
	}
</script>

<style lang="less" scoped>
.box {
  padding: 20px;
}
</style>
