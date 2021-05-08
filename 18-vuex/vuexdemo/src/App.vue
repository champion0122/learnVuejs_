<template>
  <div id="app">
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return {
      message: ''
    }
  }
}
</script>

<style>

</style>
