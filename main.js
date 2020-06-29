import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

App.mpType = 'app'
// process.env.Mock && require('util/mock.js')
const app = new Vue({
	store,
    ...App
})
app.$mount()
