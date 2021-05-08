const {add,mull} = require('./js/mathUtils')


console.log(add(7,9))

console.log(mull(33,10))

import {why} from './js/info'

console.log(why.age)
console.log(why.height)
console.log(why.name)

require('./css/normal.css')

require('./css/special.less')

import Vue from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el: "#app",
  template: '<App/>',
  components: {
    App
  }
})

document.writeln(`<span>我刚加的</span>`)