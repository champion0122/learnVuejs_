<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click='addition'>+</button>
    <button @click="substraction">-</button>
    <button @click="additionNum(5)">+5</button>
    <button @click="additionNum(10)">+10</button>
    <button @click="actionAdditionNum(8)">+8 dalay</button>
    <p>----------power result----------</p>
    <h2>{{$store.getters.powerCounter}}</h2>
    <p>----------module---------------</p>
    <h2>{{$store.state.a.name}}</h2>
    <button @click='changeName'>moduleA change</button>
    <button @click='changeNameDelay'>moduleA delay change</button>
    <h2>{{$store.getters.newName}}</h2>
  </div>
</template>

<script>
import {INCREMENT, DECREMENT ,INCREMENTCOUNT ,ACTIONINCREMENTCOUNT} from '@/store/mutations-types'

export default {
  name: "HelloVuex",
  methods: {
    addition(){
      this.$store.commit(INCREMENT)//commit methods in mutation 
    },
    substraction(){
      this.$store.commit(DECREMENT)
    },
    additionNum(count){
      //normal
      this.$store.commit(INCREMENTCOUNT,count)

      // this.$store.commit({
      //   type: 'incrementCount',
      //   count
      // })
    },
    actionAdditionNum(overlay){
      this.$store.dispatch(ACTIONINCREMENTCOUNT,overlay).then(res => console.log(res))
    },
    changeName(){
      this.$store.commit('changeName')
    },
    changeNameDelay(){
      this.$store.dispatch('asyncChange')
    }
  }
}
</script>

<style>

</style>