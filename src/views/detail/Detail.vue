<template>
  <div v-if="filmInfo">
    <div class="poster">
      <img :src="filmInfo.poster">
    </div>
    <h2>{{ filmInfo.name }}</h2>

    <h3>演职人员</h3>
    <Swiper perview="4" class="actorswiper" myclassname="actorswiper">
      <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
        <img :src="item.avatarAddress">
        <p>{{ item.name }}</p>
      </div>
    </Swiper>

    <h3>剧照</h3>
    <Swiper perview="4" class="photoswiper" myclassname="photoswiper">
      <div class="swiper-slide" v-for="(item,index) in filmInfo.photos" :key="index">
        <img :src="item">
      </div>
    </Swiper>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from './DetailSwiper.vue'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '../../store/mutationType.js'
// import bus from '@/bus'

export default {
  data () {
    return {
      id: this.$route.params.id.filmId,
      filmInfo: {}
    }
  },
  components: {
    Swiper
  },
  beforeMount () {
    // bus.$emit('tabHide', false)
    // this.$store.state.isTabBarShow = false
    this.$store.commit(HIDE_TABBAR_MUTATION, false)
  },
  mounted () {
    // console.log(this.$route.params)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=880246`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // bus.$emit('tabHide', true)
    // this.$store.state.isTabBarShow = true
    this.$store.commit(SHOW_TABBAR_MUTATION, true)
  }
}
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
