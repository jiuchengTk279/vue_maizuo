<template>
  <div class="cinema" :style="cmstyle">
    <ul>
      <li v-for="(item,index) in cinemaList" :key="index">
        {{ item.name }}
        <p style="font-size: 12px">{{ item.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaList: [],
      cmstyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    console.log(document.documentElement.clientHeight)
    this.cmstyle.height = document.documentElement.clientHeight - 50 + 'px'

    var id = localStorage.getItem('cyId')
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=7228409`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"440100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res)
      this.cinemaList = res.data.data.cinemas

      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
li {
  height: 50px;
}

.cinema {
  height: 500px;
  overflow: hidden;
  position: relative;
}
</style>
