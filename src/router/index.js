import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    name: 'film',
    component: () => import('../views/film/Film.vue'),
    children: [
      {
        path: 'nowPlaying',
        name: 'nowPlaying',
        component: () => import('../views/film/NowPlaying.vue')
      },
      {
        path: 'comingSoon',
        name: 'comingSoon',
        component: () => import('../views/film/ComingSoon.vue')
      },
      {
        path: '',
        redirect: '/film/nowPlaying'
      }
    ]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/cinema/Cinema.vue')
  },
  {
    // 动态路由
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/Detail.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/center/Center.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/center/City.vue')
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 全局的导航守卫
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/center') {
//     console.log('检查')
//     if (isLogin) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
