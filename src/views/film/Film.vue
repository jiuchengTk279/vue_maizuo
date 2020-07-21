<template>
  <div>
    <Swiper :key="banner.length" ref="swiper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <img :src="item.imgUrl">
      </div>
    </Swiper>
    <FileHeader :class="isFixed ? 'fixed' : ''"></FileHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from '@/views/film/Swiper.vue'
import FileHeader from '@/views/film/FileHeader.vue'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      banner: [],
      isFixed: false
    }
  },
  components: {
    Swiper,
    FileHeader
  },
  mounted () {
    Indicator.open({
      text: '加载中',
      spinnerType: 'fading-circle'
    })
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=8668911',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      // console.log(res)
      this.banner = res.data.data
      console.log(this.banner)
      Indicator.close()
    })
    // window 是全局的，在离开页面的时候需要销毁
    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      // 滚动的距离大于等于轮播图的高度，说明需要吸顶。如果小于就不需要吸顶
      if (document.documentElement.scrollTop >= this.$refs.swiper.$el.offsetHeight) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
