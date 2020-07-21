<template>
  <div>
    <ul>
      <!-- $store.state.comingList -->
      <li v-for="(item,index) in $store.getters.comingListGetter" :key="index" @click="handleClick(item.isPresale, item.filmId)">
          <img :src="item.poster">
          <h3>{{ item.name }}</h3>
          <p>观众评分{{ item.grade }}</p>
          <p>主演：{{ item.director  }}</p>
          <!-- <p>{{ item.actors | actorfilter }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { MessageBox } from 'mint-ui'

export default {
  computed: {
    ...mapState(['comingList'])
  },
  mounted () {
    if (this.comingList.length === 0) {
      // 发起 ajax 请求
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    handleClick (data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '没有排期，看其它电影吧',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            console.log('回到首页')
            this.$router.push('/film/nowPlaying')
          }
        })
      }
      this.$router.push({ name: 'detail', params: { id } })
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
