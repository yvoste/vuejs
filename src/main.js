import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import { BootstrapVue } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
