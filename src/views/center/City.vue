<template>
  <div>
    <mt-index-list ref="myList">
      <mt-index-section :index="item.index" v-for="item in cityList" :key="item.index">
        <div @click="handleClick(city.cityId)" v-for="city in item.list" :key="city.cityId">
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    // console.log(this.$refs.myList.$el)
    this.$refs.myList.$el.style.height = document.documentElement.clientHeight - 50 + 'px'

    axios({
      url: 'https://m.maizuo.com/gateway?k=756399',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res)
      // this.cityList = res.data.data.cities
      this.cityList = this.handleCity(res.data.data.cities)
    })
  },
  methods: {
    handleCity (cityList) {
      console.log(cityList)

      // 生成 A-Z 的英文字母
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)

      // 对城市进行分类，以英文字母开头，如 B，包含北京等等
      var newList = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = cityList.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      console.log(newList)
      return newList
    },
    handleClick (id) {
      console.log(id)
      localStorage.setItem('cyId', id)
      // eslint-disable-next-line quotes
      this.$router.push(`/cinema`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
