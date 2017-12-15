<template>
<div class="container" id="mitocondrianos">
    <div class="row">
        <h2>{{pageTitle}}</h2>
    </div>
    <div class="row" v-for="empleado in empleados" v-bind:key="empleado.id">
        <div class="col-xs-4">
            <nuxt-link :to="{ path: '/mitocondriano/'+empleado.id+'?ejecutiva'}"><img v-bind:src="empleado.fotografia" class="img-responsive img-circle" alt=""></nuxt-link>

        </div>
        <div class="col-xs-8">
          <nuxt-link :to="{ path: '/mitocondriano/'+empleado.id+'?ejecutiva'}" class="linkName"><h3>{{empleado.nombre+' '+empleado.apellido}}</h3></nuxt-link>
            <p class="pFicha">{{empleado.email}}</p>
            <p class="pFicha">{{empleado.empresa}}</p>
            <p>{{empleado.direccion}}</p>
        </div>
    </div>

</div>
</template>



<script>
import axios from 'axios'
export default {
    async asyncData({ req, params }) {
        // We can return a Promise instead of calling the callback
        return axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
        .then((res) => {
            return { empleados: res.data.ejecutivas_de_cuentas.integrantes }
        }).catch(function (error) {
            console.log(error);
        })
    },
    data: () => ({
    pageTitle: 'Ejecutivas de Cuentas',
  }),
  
}    
</script>

<style lang="scss">
@import '~assets/css/main.scss';

    .pFicha {
        margin-bottom: 0;
    }
</style>