<template>
    <div>
        <header>
            <div class="header">
                <span class="header-title">COMPARADOR MÁQUINAS CARDIO TRAINING</span>
            </div>
            <div class="header-bottom-bar">

            </div>
        </header>
        <section>
            <div class="main">
                <div class="products">
                    <ul class="products-list">
                        <li class="categoria">
                            <router-link to="/cintas-de-correr">
                                <div class="nombre-categoria"><span>CINTAS DE CORRER</span></div>
                                <div class="logo-categoria"></div>
                            </router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="/elipticas">BICICLETAS ELÍPTICAS</router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="">BICICLETAS ESTATICAS</router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="">BIKING</router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="">REMOS</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
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

    header .header {
        width: 100%;
        height: 259px;
        background-color: #0082C9;
        text-align: center;
        .header-title {
            position: absolute;
            left: 10%;
            top: 10%;
            vertical-align: middle;
            font-family: 'Roboto', sans-serif;
            font-size: 75px;
            font-weight: bold;
            font-style: italic;
            font-stretch: condensed;
            line-height: 0.8;
            letter-spacing: -2.3px;
            color: #ffffff;
            margin: 0 auto;
        }
    }

    header .header-bottom-bar {
        height: 10px;
        background-color: #e86430;
    }

    .products .products-list {
        list-style: none;
        padding: 0 2%;
        li {
            width: 100%;
            height: 350px;
            background-color: #ffffff;
            box-shadow: 0 0 10px 0.1px rgba(0, 0, 0, 0.4);
        }
    }

    .categoria {
        width: 100%;
        height: 350px;
        background-color: #ffffff;
        box-shadow: 0 0 10px 0.1px rgba(0, 0, 0, 0.4);
        .nombre-categoria {
            width: 70;
            font-family: 'Roboto', sans-serif;
            font-size: 70px;
            font-weight: bold;
            font-style: italic;
            font-stretch: condensed;
            line-height: 0.91;
            letter-spacing: -4.4px;
            color: #242323;
        }
        .logo-categoria {
            width: 30%;
            height: 350px;
            background-color: #0082c9;
        }
    }
</style>
