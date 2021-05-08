<template>
  <div>
    <h2>Profile组件</h2>
    <ul>
      <li v-for="item in $route.query" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created(){
    console.log('created')
  },
  destroyed(){
    console.log('destroyed')
  }
}
</script>

<style>

</style>