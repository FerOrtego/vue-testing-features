<template>
    <div class="products" v-if="machineinfo !=null">
        <ul>
            <li class="item1"><router-link to=""><Card :machineinfo="machineinfo"/></router-link> </li>
            <li class="item2"><router-link to="">CINTA 2</router-link></li>
            <li class="item3"><router-link to="">CINTA 3</router-link></li>
            <li class="item4"><router-link to="">CINTA 4</router-link></li>
            <li class="item5"><router-link to="">CINTA 5</router-link></li>
        </ul>
    </div>
</template>

<script>
import Card from './Card'
import { HTTP } from '../http/http-config'

export default {
  name: 'Cintasdecorrer',
  components: { Card },
  data: function () {
    return {
      machineinfo: { Type: Object, Required: false }
    }
  },
  props: {
    msg: String
  },
  mounted () {
    HTTP.get('https://pokeapi.co/api/v2/pokemon/1/')
      .then((response) => {
        console.log(response.data)
        this.machineinfo = response.data
      }).catch(error => {
        console.log(error)
      })
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
