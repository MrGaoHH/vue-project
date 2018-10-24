// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'  


// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//设置请求根路径
Vue.http.options.root = 'http://027xin.com:8899';


import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


//
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(MintUI)
//
import '@/assets/mui/css/mui.min.css'
//
import '@/assets/mui/css/icons-extra.css'
Vue.config.productionTip = false
//导入router.js 路由模块\

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
