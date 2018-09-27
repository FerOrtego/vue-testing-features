<template>
    <div class="products">
        <ul>
            <li class="item1"><router-link to="/cintas-de-correr">CINTAS DE CORRER</router-link> </li>
            <li class="item2"><router-link to="/elipticas">BICICLETAS ELÍPTICAS</router-link></li>
            <li class="item3"><router-link to="">BICICLETAS ESTATICAS</router-link></li>
            <li class="item4"><router-link to="">BIKING</router-link></li>
            <li class="item5"><router-link to="">REMOS</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Comparador',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products ul{
        list-style: none;
        top: 50%;
        left: 50%;
    }
</style>
