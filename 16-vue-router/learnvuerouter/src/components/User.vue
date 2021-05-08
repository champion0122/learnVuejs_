<template>
  <div>
    <h2>用户</h2>
    <p>info about user</p>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  // computed: {
  //   userId(){
  //     return this.$route.params.userId
  //   }
  // }
}
</script>

<style>

</style>