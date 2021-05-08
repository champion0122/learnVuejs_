<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 如果不放到div中，属性会被覆盖 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive(){
      // return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path == this.path
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      // console.log(this.$route.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    /* 居中 */
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    /* 去掉图片本身的下面三像素 */
  }
  /* .active {
    color: red;
  } */
</style>