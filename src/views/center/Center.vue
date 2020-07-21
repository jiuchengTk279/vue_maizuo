<template>
  <div>
    <v-touch  v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <div style="background:red; height:100px;">center</div>
    </v-touch>
    <!-- <el-button type="primary">按钮</el-button> -->
    <mt-button type="primary">按钮</mt-button>

    <mt-swipe :auto="4000" id="mint-swipe" :showIndicators="false">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import Vue from 'vue'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })

export default {
  // 组件内导航守卫
  // beforeRouteEnter (to, from, next) {
  //   console.log('局部检查')
  //   if (false) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  methods: {
    onSwipeLeft () {
      console.log('left')
    },
    onSwipeRight () {
      console.log('right')
      console.log('112')
    }
  }
}
</script>

<style lang="scss" scoped>
  #mt-swipe {
    height: 300px;
    .mint-swipe-indicator.is-active{
      background:red;
    }
  }
</style>
