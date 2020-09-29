import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios';
import API from "@/utils/api";

import VueAxios from 'vue-axios';
// 全局引入axios，并进行全局注册
import 'amfe-flexible'

//引入封装的axios
// Vue.use(VueAxios, axios);
// 通过cdn 引入 vue-lazyload
Vue.use(VueLazyload, {
	preLoad: 1.3, // 预加载位置
	loading: require("@/assets/images/default-img.gif"),  // 默认加载图
	attempt: 1
});

// 其他页面在使用 Ajax 的时候直接  this.API 就可以了
Vue.prototype.API = API;

Vue.config.productionTip = false;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
