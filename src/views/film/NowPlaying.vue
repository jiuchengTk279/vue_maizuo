<template>
  <div>
      NowPlaying
      <ul v-infinite-scroll="loadMore"
        infinite-scroll-distance="0"
        infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check="false">
        <li v-for="(item,index) in dataList" :key="index" @click="handleChangePage(item)">
          <img :src="item.poster">
          <h3>{{ item.name }}</h3>
          <p>观众评分{{ item.grade }}</p>
          <p>主演：{{ item.director  }}</p>
          <!-- <p>{{ item.actors | actorfilter }}</p> -->
        </li>
      </ul>
      <div v-show="isShow">正在加载中...</div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.filter('actorFilter', function (data) {
  console.log(data)
  // var newList = (actor => actor.name)
  var newList = data.map(item => item.name)
  return newList.join('')
})

export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      dataList: [],
      loading: false,
      current: 1,
      total: 0,
      isShow: true
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9571762',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res)
      this.dataList = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    handleChangePage (id) {
      // console.log(id)
      // 编程式导航
      // eslint-disable-next-line quotes
      // this.$router.push(`/detail/${id}`)

      // 编程式导航，命名路由跳转，用名字标识路由
      this.$router.push({ name: 'detail', params: { id } })
    },
    loadMore () {
      console.log('到底了')
      this.loading = true // 禁用

      this.current++
      // 数据全部加载完
      if (this.dataList.length === this.total) {
        this.isShow = false
        return
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=9571762`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res)
        // this.dataList = res.data.data.films
        this.dataList = [...this.dataList, ...res.data.data.films]
        this.loading = false
      })
      // setTimeout(() => {
      //   this.loading = false
      // }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    li {
      padding: 10px;
      overflow: hidden;
      img {
        float: left;
        width: 100px;
      }
    }
  }
</style>
