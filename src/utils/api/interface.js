/*
*
* 作用: 定义所有请求的接口
* */
// const baseUrl = '/mj' //线上
// const baseUrl = '/myf' //本地
// const baseUrl = 'http://192.168.1.15:8088/wx/dj' //本地
const baseUrl = 'http://192.168.5.2:80/wbr'; //本地 本地请求需要统一添加 /wbr, 用于请求转向
// const baseUrl = 'http://mj.i2workman.com/djht'; // 远程

// const baseUrl = window.$common.baseUrl
export default {
	login: {
		/* 是否登录 */
		isLogin: {
			method: "POST",
			url: `${baseUrl}/uc/getloginUser`
		},
		/* 登录 */
		dialogLogin: {
			method: "POST",
			url: `${baseUrl}/uc/login`
		},
		/* 注册 */
		dialogRegister: {
			method: "POST",
			url: `${baseUrl}/uc/createuser`
		}
	},
	course: {
		/* 换一换接口 */
		huanyihuan: {
			method: "POST",
			url: `${baseUrl}/index/ajax/huanyihuan`
		}

	},
	//地图数据接口
	getCurrMapData:{
		method: "post",
		url: `${baseUrl}/dj/area/getMapinfoByAreaIndexParent`
	},
	//三级页面数据接口
	getInformationData: {
		method: "post",
		url: `${baseUrl}/dj/persons/getCunPXInfo`
	},
	//四级页面数据接口
	getInformationDetailData:{
		method: "post",
		url: `${baseUrl}/dj/persons/getCunPXList`
	}

};
