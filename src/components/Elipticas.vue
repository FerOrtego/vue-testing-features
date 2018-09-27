<template>
    <div class="products">
        <ul>
            <li class="item1"><router-link to="">Eliptica 1</router-link> </li>
            <li class="item2"><router-link to="">Eliptica 2</router-link></li>
            <li class="item3"><router-link to="">Eliptica 3</router-link></li>
            <li class="item4"><router-link to="">Eliptica 4</router-link></li>
            <li class="item5"><router-link to="">Eliptica 5</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Elipticas',
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
