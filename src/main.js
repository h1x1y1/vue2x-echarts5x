import Vue from 'vue'
import App from './App.vue'
import "./App.css";// 全局样式
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
