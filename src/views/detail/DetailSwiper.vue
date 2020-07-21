<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.scss'
export default {
  props: ['perview', 'myclassname'],
  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line no-new
      new Swiper('.' + this.myclassname, {
        loop: true,
        autoplay: {
          delay: 2000
        },
        slidesPerView: this.perview,
        spaceBetween: this.myclassname === 'actorswiper' ? 20 : 10,
        freeMode: true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
    img {
      width: 100%
    }
  }
  .film-swiper-pagination {
    text-align: right;
  }

</style>
