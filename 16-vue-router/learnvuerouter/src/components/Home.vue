<template>
  <div>
    <h2>首页</h2>
    <p>content in home</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      path: 'home/news'
      }
  },
  created(){
    console.log('home created')
  },
  destroyed(){
    console.log('home destroy')
  },
  //activated函数只有使用了keep-alive才会生效
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from ,next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>