<template>
    <div class="products" v-if="!!machineinfo">
        <ul>
            <li class="item1">
                <router-link
                    to=""><Card v-for="item in machineinfo" :key="item.index" :machineinfo="item"/>
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
import axios from 'axios'

export default {
  name: 'Cintasdecorrer',
  components: { Card },
  data: function () {
    return {
      machineinfo: { Type: Object, Required: false },
      machines: null,
      test: '',
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
  },
  created () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.machineinfo = response.data
      }, error => {
        console.error(error)
      })
  }
  // methods: {
  //   mipost: function () {
  //     let data = {
  //       id: 1,
  //       name: 'aaaa'
  //     }
  //     let options = {
  //       headers: {
  //         Authorization: 'Bearer ' + token
  //       }
  //     }
  //     axios.post('http://jsonplaceholder.typicode.com/posts', data, options)
  //       .then(response => {
  //         this.machineinfo = response.data
  //       }, error => {
  //         console.error(error)
  //       })
  //   },
  //   computed: {}
  // }
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
