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
