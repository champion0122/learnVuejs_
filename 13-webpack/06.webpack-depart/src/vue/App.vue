<template>
  <div>
  <h2 class="title">{{message}}</h2>
  <cpn></cpn>
  <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
import cpn from "./Cpn.vue"
export default {
  components: {
    cpn
  },
  data(){
    return {
      message: "芜湖"
    }
  },
  methods: {
    btnClick(){
      console.log(this.message + '起飞')
    }
  }
}
</script>

<style>
  .title {
    color: green;
  }
</style>