<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: null,
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {},
}
</script>
<style lang="less">
@import '~@/assets/css/font-awesome.css';
@import '~@/assets/fonts/Abb-inconfont/iconfont.css';
@import '~@/assets/fonts/userIcon/iconfont.css'; 
html {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-box {
  height: 44px;
}
</style>
