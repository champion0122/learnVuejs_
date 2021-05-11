<template>
  <div id="app">
    <get-weather></get-weather>
  </div>
</template>

<script>
import getWeather from '@/components/getWeather'
export default {
  name: 'App',
  components: {
    getWeather
  }
}
</script>

<style>
#app {
  margin-top: 200px;
  text-align: center;
}
</style>
