
import Vue from 'vue'
import Router from 'vue-router'
import Comparador from '../components/Comparador'
import Cintasdecorrer from '../components/CintasDeCorrer'
import Elipticas from '../components/Elipticas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comparador',
      component: Comparador
    },
    {
      path: '/cintas-de-correr',
      name: 'CintasDeCorrer',
      component: Cintasdecorrer

    },
    {
      path: '/elipticas',
      name: 'Elipticas',
      component: Elipticas

    }
  ]
})
