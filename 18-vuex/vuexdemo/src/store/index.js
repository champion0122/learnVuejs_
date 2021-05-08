import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store