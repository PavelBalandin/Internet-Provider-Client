import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vuelidate from "vuelidate/src";
import MessagePlugin from './utils/message.plugin'

Vue.use(Vuelidate)
Vue.use(MessagePlugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
