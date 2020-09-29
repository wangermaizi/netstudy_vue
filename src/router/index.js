import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
  	// 首页
	{
		path:"/",
		redirect: "/course"
	},
	// 默认加载课程
	{
		path: "/course",
		name: "course",
		component: () => import("@/views/course/index")
	},
	// 课程详情
	{
		path: "/course/courseInfo",
		name: "courseInfo",
		component: () => import("@/views/course/courseInfo")
	},
	// 新闻列表页面
	{
		path:"/course/newslist",
		name: "newsList",
		component: ()=> import("@/views/course/newsList")
	},
	// 新闻详情页面
	{
		path:"/course/news/:newsId",
		name: "newsInfo",
		component: ()=> import("@/views/course/newsInfo")
	},
	// 讲师列表
	{
		path: "/course/teacherlist",
		name: "teacherList",
		component: () => import("@/views/course/teacherList")
	},
	// 讲师详情
	{
		path: "/course/teacher/:teacherId",
		name: "teacherInfo",
		component: () => import("@/views/course/teacherInfo")
	},
	/* ******************************************************************** */

	// 文档主页面
	{
		path:"/files",
		name: "files",
		component: ()=> import("@/views/files/index.vue")
	},

	/*  **************************************************************** */

	// 考试主页面
	{
		path:"/exam",
		name: "exam",
		component: ()=> import("@/views/exam/index.vue")
	},

	/* **************************************************************** */

  	// 我的页面
  	{
    	path: "/uc",
    	// name: 'My',
    	// component: My,
		redirect: "/uc/index"
  	},
	{
		path: "/uc/index",
		name: "My",
		component: () => import("@/views/user/index.vue")
	},
	// 教师登录页面
	{
		path: "/teacher",
		name: "teacher",
		component: () => import("@/views/user/teacher.vue")
	},
	/* 补抓报错页面 */
	{
		path: '*',
		name: 'Err',
		component: () => import("@/views/error/Err.vue"),
	}
];

const router = new VueRouter({
  	mode: "hash",
	routes
});


// router.beforeEach((to, from, next) => {

// })

export default router
