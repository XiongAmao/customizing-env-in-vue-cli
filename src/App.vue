<template>
  <div id="app">
    <div>url: {{ url }}</div>
  </div>
</template>

<script>
  const url = process.env.VUE_APP_URL
  const wtfEnv = MY_CUSTOM_ENV

  export default {
    name: 'App',
    components: {},
    data() {
      return {
        url,
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
