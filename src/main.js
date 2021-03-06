import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import  axios from 'axios'
import router from './router' //引入路由配置

Vue.config.productionTip = false
Vue.prototype.$ajax=axios //修改Vue的原型属性
Vue.use(Element)

new Vue({
  render: h => h(App),
  router, //使用路由配置
}).$mount('#app')
