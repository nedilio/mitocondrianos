<template>
<div class="container" id="mitocondrianos">
    <div class="row">
        <h2>{{empleado.cargo}}</h2>
    </div>
    <div class="row">
        <div class="col-xs-12 text-center">
            <img v-bind:src="empleado.fotografia" class="img-responsive img-circle" v-bind:alt="empleado.nombre+' '+empleado.apellido">
            <h1>{{empleado.nombre+' '+empleado.apellido}}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>email</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.email}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>empresa:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.empresa}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>dirección:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.direccion}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>edad:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.edad}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>cargo:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.cargo}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>bio:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{empleado.bio}}</p>
        </div>
    </div>
</div>
</template>



<script>
import axios from 'axios'
export default {

    computed: {
      empleado () {
           var path = $nuxt.$route.fullPath.split('?')[1]
           var i = $nuxt.$route.path.split('/')[2]
           if (path == 'ejecutiva') {
            var traer = 'ejecutivas_de_cuentas'
        } else if (path == 'frontend') {
            var traer = 'frontend';
        }
        return this.$store.state.empleados[traer].integrantes[i];
      },
      title () {
          return this.$store.state.empleados[traer].nombre
      }
    },
  
}    
</script>