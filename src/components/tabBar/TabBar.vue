<template>
  <div class="nav">
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/film" tag="li" active-class="myactive">
        <i class="iconfont icon-category"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="li" active-class="myactive">
        <i class="iconfont icon-favorite"></i>
        cinema
      </router-link>
      <router-link to="/center" tag="li" active-class="myactive">
        <i class="iconfont icon-form"></i>
        center
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .myactive {
    color: red;
  }

  .nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: white;
    ul {
      display: flex;
      li {
        flex: 1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
