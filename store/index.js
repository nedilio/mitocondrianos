import Vuex from 'vuex'
import axios from 'axios'

const datosEmpleados = () => {
  return new Vuex.Store({
    state: {
      empleados: []
    },
    mutations: {
        setEmpleados: function (state, data) {
            state.empleados = data
      }
    },
    actions: {
        async nuxtServerInit({ commit },{req}) {
            const res = await axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
            // const res =0
            commit('setEmpleados', res.data)
        },


      
    }
  })
}

export default datosEmpleados