import Vuex from 'vuex'
import axios from 'axios'

const datosEmpleados = () => {
  return new Vuex.Store({
    state: {
      empleados: [],
    //   frontend:[]
    },
    mutations: {
        setEmpleados: function (state, data) {
            state.empleados = data
        },
        // setFrontend: function (state, data) {
        //     state.frontend = data
        // }
    },
    actions: {
        async nuxtServerInit({ commit },{req}) {
            const res = await axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
            commit('setEmpleados', res.data)
            console.log('llenando datos')
            // commit('setFrontend', res.data.frontend.empleados)
        }
    }
  })
}

export default datosEmpleados