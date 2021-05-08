export default {
  state:{
    name: 'zhangsan'
  },
  mutations: {
    changeName(state,layout){
      state.name = 'lisi'
    }
  },
  getters: {
    newName(state,getters,rootState){
      return state.name + rootState.counter
    }
  },
  actions: {
    asyncChange(context){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('changeName')
        }, 1000);
      } )
    }
  }
}