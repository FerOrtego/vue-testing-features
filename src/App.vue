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
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
</style>
