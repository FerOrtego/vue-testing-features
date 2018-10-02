<template>
    <!--Contenedor de todas las cards de una misma disciplina-->
    <div class="card-wrapper" v-if="!!machineinfo && !!machineinfo.forms">
        <div class="card-wrapper-header">
            <div class="card-wrapper-header-discipline">
                {{ machineinfo.forms[0].name }}
            </div>
        </div>
        <div class="card-container">
            <div class="card-title">
                <span class="title"></span>
            </div>
            <div class="card-content"></div>
            <div class="card-product">

            </div>
            <div class="card-description">

            </div>
            <!--<div class="card-link">-->
                <!--<a-->
                        <!--:href=""-->
                        <!--target="_blank"> Go to Example</a>-->
                <!--<i class="link-arrow"/>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>

export default {
  name: 'Card',
  props: {
    machineinfo: { type: Object, required: true }
  },
  data: function () {
    return {

    }
  },
  mounted () {
    console.log(this.machineinfo)
  },
  computed: {

  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
