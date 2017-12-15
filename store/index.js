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
        async nuxtServerInit({commit}, {req}) {
            const  data  =  axios.get('/mitocondrianos.json')
            .then((res) => {
                return { res }
            }).catch(function (error) {
                console.log(error);
            })
            // const  data  =  0;
            commit('setEmpleados', data )
        }
    }
  })
}

export default datosEmpleados