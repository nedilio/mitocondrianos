import Vuex from 'vuex'
import axios from 'axios'

export const api = axios.create({
    baseURL: '/static'
  })

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
            await axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
                .then((res) => {
                    commit('setEmpleados', res.data)
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })

        }
    }
  })
}

export default datosEmpleados