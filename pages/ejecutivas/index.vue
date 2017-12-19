<template>
<div class="container" id="mitocondrianos">
    <div class="row">
        <h2>{{title}}</h2>
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
export default {

 computed: {
      empleados () {
        return this.$store.state.empleados.ejecutivas_de_cuentas.integrantes
      },
      title () {
          return this.$store.state.empleados.ejecutivas_de_cuentas.nombre
      }
    }
  
}      
</script>