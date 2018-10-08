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
                                <div class="categoria-texto-contaner">
                                    <div class="nombre-categoria"><span>CINTAS DE CORRER</span></div>
                                    <div class="numero-articulos"><span>12 articulos</span></div>
                                </div>
                                <div class="logo-categoria"></div>
                            </router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="/elipticas">
                                <div class="categoria-texto-contaner">
                                    <div class="nombre-categoria"><span>BICICLETAS ELÍPTICAS</span></div>
                                    <div class="numero-articulos"><span>12 articulos</span></div>
                                </div>
                                <div class="logo-categoria"></div>
                            </router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="/cintas-de-correr">
                                <div class="categoria-texto-contaner">
                                    <div class="nombre-categoria"><span>BICICLETAS ESTATICAS</span></div>
                                    <div class="numero-articulos"><span>12 articulos</span></div>
                                </div>
                                <div class="logo-categoria"></div>
                            </router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="/cintas-de-correr">
                                <div class="categoria-texto-contaner">
                                    <div class="nombre-categoria"><span>BIKING</span></div>
                                    <div class="numero-articulos"><span>12 articulos</span></div>
                                </div>
                                <div class="logo-categoria"></div>
                            </router-link>
                        </li>
                        <li class="categoria">
                            <router-link to="/cintas-de-correr">
                                <div class="categoria-texto-contaner">
                                    <div class="nombre-categoria"><span>REMOS</span></div>
                                    <div class="numero-articulos"><span>12 articulos</span></div>
                                </div>
                                <div class="logo-categoria"></div>
                            </router-link>
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

    section{
        padding-top: 1%;
        padding-bottom: 2%;
    }
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
        display: inline-block;
        width: 100%;
        height: 350px;
        background-color: #ffffff;
        box-shadow: 0 0 10px 0.1px rgba(0, 0, 0, 0.4);
        margin: 1% 0;
        .categoria-texto-contaner {
            width: 70%;
            float: left;
            padding-top: 5%;
            padding-left: 9%;
            .nombre-categoria {
                span {
                    font-size: 70px;
                    font-weight: bold;
                    font-style: italic;
                    font-stretch: condensed;
                    line-height: 0.91;
                    letter-spacing: -4.4px;
                    color: #242323;
                }
            }
            .numero-articulos {
                height: 157px;
                span {
                    font-size: 42px;
                    font-weight: normal;
                    font-style: italic;
                    font-stretch: condensed;
                    line-height: 1.52;
                    letter-spacing: -2.6px;
                    color: #0082c9;
                }
            }
        }
        .logo-categoria {
            display: inline-block;
            width: 30%;
            height: 350px;
            background-color: #0082c9;
        }
        .logo-categoria:after{
            width: 63px;
            height: 350px;
            display: block;
            position: relative;
            top: 0;
            left: -32px;
            background: #0082C9;
            content: '';
            -webkit-transform: skewX(10deg);
            transform: skewX(10deg);
        }
    }

</style>
