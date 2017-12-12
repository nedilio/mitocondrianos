<template>
<div class="container" id="mitocondrianos">
    <div class="row">
        <div class="col-xs-12 text-center">
            <img v-bind:src="integrante[0].fotografia" class="img-responsive img-circle" v-bind:alt="integrante[0].nombre+' '+integrante[0].apellido">
            <h1>{{integrante[0].nombre+' '+integrante[0].apellido}}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>email</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].email}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>empresa:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].empresa}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>dirección:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].direccion}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>edad:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].edad}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>cargo:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].cargo}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-3">
            <p><strong>bio:</strong></p>
        </div>
        <div class="col-xs-9">
            <p>{{integrante[0].bio}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 text-center">
            <img src="/logo-mitocondria.jpg" alt="" class="img-responsive">
        </div>
    </div>
</div>
</template>



<script>
import axios from 'axios'
export default {
    async asyncData({ req, params }) {
        // We can return a Promise instead of calling the callback
        console.log(params);
        // console.log.(data);
        return axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
        .then((res) => {
            var integrantes = res.data.frontend.integrantes;
            var integranteArray = [];
            // return console.log(integrantes);
            integrantes.forEach(function(item, i){
                // console.log(item.id);
                if(item.id == params.id){
                    // console.log('hay alguien y es el id = '+item.id);
                    integranteArray.push(item)
                }
            });
            // console.log(params);
            return {integrante: integranteArray}
            
        }).catch(function (error) {
            console.log(error);
        })
    }
  
}    
</script>

<style>

</style>