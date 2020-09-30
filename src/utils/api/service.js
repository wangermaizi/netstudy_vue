import axios from "axios";


// 创建axios实例
let service = {};
service = axios.create({
	baseURL: "/", // api的base_url
	timeout: 50000 // 请求超时时间
});

// request拦截器 axios的一些配置
service.interceptors.request.use(
	(config) => {
		// 本来是不需要这一步配置的, 但迁移的接口请求, 与当前axios的存在冲突, 需要进行配置
		// 将原本的json 转成 formData 形式
		if (config.data) {
			let formData = new FormData();
			for (const key in config.data) {
				formData.append(key, config.data[key]);
			}
			config.data = formData;
			// console.log(2222);
			// config.data = JSON.parse(config.data)
		}
		// console.log(config);
		// 加载进度条
		NProgress.start();
		return config;
	},
	(error) => {
		// Do something with request error
		console.error("error:", error); // for debug
		NProgress.done();
		return Promise.reject(error);
	}
);

// respone拦截器 axios的一些配置 (相应拦截器配置)
service.interceptors.response.use(
	(response) => {
		NProgress.done();
		return response;
	},
	(error) => {
		NProgress.done();
		console.error("error:" + error); // for debug
		// 相应错误统一触发, 网络请求错误
		return Promise.reject(error);
	}
);

export default service;
