<template>
    <div class="products" v-if="!!machineinfo">
        <ul>
            <li class="item1">
                <router-link
                    to=""><Card
                        v-foreach="machineinfo.results in
                        machineinfo"
                        :machineinfo="machineinfo.results"
                    />
                </router-link>
            </li>
            <li class="item2"><router-link to=""><Card :machineinfo="machineinfo"/></router-link></li>
            <li class="item3"><router-link to="">CINTA 3</router-link></li>
            <li class="item4"><router-link to="">CINTA 4</router-link></li>
            <li class="item5"><router-link to="">CINTA 5</router-link></li>
        </ul>
        <swiper :options="swiperOption">
            <swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<swiper-slide><router-link to=""><Card :machineinfo="machineinfo"/></router-link></swiper-slide>-->
            <!--<div class="swiper-pagination" slot="pagination"></div> con esta linea se añaden bullets-->
        </swiper>
    </div>
</template>

<script>
import Card from './Card'
// import { HTTP } from '../http/http-config'
import service from '../services/fetch.js'

export default {
  name: 'Cintasdecorrer',
  components: { Card },
  data: function () {
    return {
      machineinfo: { Type: Object, Required: false },
      machines: null,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: {
    msg: String
  },
  created () {
    this.getData()
  },
  methods: {
    getData: async function () {
      let url = 'https://pokeapi.co/api/v2/pokemon/'
      service
        .callFetch(url)
        .then(data => {
          this.machineinfo = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    listMachines: function () {
      let result = this.machines
      result = this.machineinfo.results.length
      return result
    }
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
