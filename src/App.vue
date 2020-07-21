<template>
  <div id="app">
    <tab-bar v-if="isTabBarShow"></tab-bar>
    <!-- 路由容器 -->
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TabBar from './components/tabBar/TabBar.vue'
// import bus from '@/bus'

export default {
  data () {
    return {
      // isShow: true
    }
  },
  components: {
    TabBar
  },
  computed: {
    ...mapState(['isTabBarShow'])
  },
  beforeMount () {
    // bus.$on('tabHide', (data) => {
    //   this.isShow = data
    // })
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%
}

li {
  list-style: none;
}
</style>
