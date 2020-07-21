import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from './mutationType.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabBarShow: true,
    comingList: []
  },
  getters: {
    comingListGetter (state) {
      return state.comingList.filter((item, index) => index >= 1)
    }
  },
  // 唯一修改状态的地方
  mutations: {
    [HIDE_TABBAR_MUTATION] (state, data) {
      state.isTabBarShow = data
    },
    [SHOW_TABBAR_MUTATION] (state, data) {
      state.isTabBarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    // 异步发起数据请求
    getComingListAction (store) {
      Axios({
        url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=191923',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595151350850528078659587","bc":"440100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
