import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'

// 导入全局样式
import './assets/css/global.css'
//配置请求根目录
axios.defaults.baseURL = 'http://47.115.173.234:8002/';
axios.interceptors.request.use(config => {
  console.log(config)
  return config;
});

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
