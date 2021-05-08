import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'https://httpbin.org/'
// }).then(res => {
//   console.log(res)
// })

// //axios sync
// axios.all([axios(

// ),axios()])
// .then(axios.spread((res1,res2) => {
//   return res1 + res2
// }))

const instance1 = axios.create({
  baseURL: '',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {

})

instance1({
  url: '/home/data',
  params:{
    type: '',
    page: 1
  }
}).then(res => {

})