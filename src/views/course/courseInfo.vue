<template>
	<div>
		<nav-bar :text="navObj.text" />
		当前课程Id为: {{courseId}}
	</div>
</template>

<script>
	import Nav from "@/components/common/nav";

	/* 课程详情 */
	export default {
    	name: "courseInfo",
		components:{
    		"nav-bar": Nav
		},
		data() {
			return {
				navObj: {
					text: "课程详情",
				},

				courseId: ""
			}
		},
		methods: {

		},
		mounted() {
    		this.courseId = this.$route.params.courseId;
    		// console.log()
		}
	}
</script>

<style scoped>

</style>
