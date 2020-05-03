// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
Vue.prototype.axios = axios;
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/dist/css/swiper.css'
window.onload=function () {
        document.addEventListener('touchstart',function (event) {
            if(event.touches.length>1){
                event.preventDefault();
            }
        })
        var lastTouchEnd=0;
        document.addEventListener('touchend',function (event) {
            var now=(new Date()).getTime();
            if(now-lastTouchEnd<=300){
                event.preventDefault();
            }
            lastTouchEnd=now;
        },false)
    }
Vue.config.productionTip = false


Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
