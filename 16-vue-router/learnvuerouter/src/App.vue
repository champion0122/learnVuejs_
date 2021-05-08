<template>
  <div id="app">
    <router-link to='/home' tag='button' replace>首页</router-link>
    <router-link to='/about' tag='button' replace>关于</router-link>
    <!-- <button @click='homeClick'>首页</button>
    <button @click='aboutClick'>关于</button> -->
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link :to="{
      path: '/profile',
      query: {name: 'why',
      age: 17,
      height: 185}
    }" tag='button'>档案</router-link>
    <!-- <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button> -->
    <keep-alive exclude="Profile"><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.replace('/user/' + this.userId)
    },
    profileClick(){
      this.$router.replace({
        path: '/profile',
        query: {
          name: 'why',
          age: 18,
          height: 187
        }
      })
    }
  }
}
</script>

<style>

</style>
