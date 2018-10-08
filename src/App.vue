<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import comparador from './components/Comparador.vue'

export default {
  name: 'app',
  components: { comparador }
}
</script>

<style lang="scss">
  HTML, body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
