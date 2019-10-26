import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import "./style/bootstrap/css/bootstrap.css";
import "./style/app.css";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data(){
    return {
      Height:0
    }
  },
  methods:{
    IsPC(){
      let userAgentInfo = navigator.userAgent;
      let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone","iPad", "iPod"];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
              flag = false;
              break;
         }
      }
      return flag;
    }
  },
  conponents:{
    App
  },
  router
}).$mount('#app')
