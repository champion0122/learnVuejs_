<template>
  <div id="app">
    <keep-alive><router-view /></keep-alive>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "@/components/TabBarMain";

export default {
  name: "App",
  components: {
    TabBarMain,
  },
};
</script>
<style>
@import url("./assets/css/base.css");
</style>
