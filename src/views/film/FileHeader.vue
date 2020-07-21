<template>
  <div>
    <ul>
      <router-link to="/film/nowPlaying" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/film/comingSoon" tag="li" active-class="active">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: white;
  }
}

.active {
  color: red;
  border-bottom: 2px solid red;
}

.fixed {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 40px;
  background:white;
}
</style>
