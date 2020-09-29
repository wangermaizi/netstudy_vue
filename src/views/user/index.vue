<template>
	<div id="my">
		<components v-if="isLogin==='0'" :is="'User'" />
		<components v-if="isLogin==='1'" :is="'User'" />
		<components v-if="isLogin==='2'" :is="'Student'" />
		<components v-if="isLogin==='3'" :is="'Teacher'" />
	</div>
</template>
<script>
	import User from '@/components/user/user.vue'
	import Teacher from '@/components/user/teacher.vue'
	import Student from '@/components/user/student.vue'
	export default {
		components: {
			User,
			Teacher,
			Student
		},
		data() {
			return { 
				isLogin:'3',//0:未登录，1：学生登录，2：教师登录时的学生界面，3：教师登录时的教师页面
			}
		},
		mounted() {
		},
		methods:{
		},
	}
</script>

<style lang="less">
</style>
