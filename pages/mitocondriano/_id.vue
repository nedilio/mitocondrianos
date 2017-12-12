<template>
<div class="container" id="mitocondrianos">
    <div class="row">
        <h2>{{integrante[0].cargo}}</h2>
    </div>
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
</div>
</template>



<script>
import axios from 'axios'
export default {

    async asyncData({ req, params }) {
                var path = $nuxt.$route.fullPath.split('/')[1]; //esto supongo no se debería hacer
        if (path == 'ejecutivas') {
            // console.log('Vengo de la pagina de ejecutivas');
            var traer = 'ejecutivas_de_cuentas'
        } else if (path == 'frontend') {
            // console.log('Vengo de la pagina de frontend');
            var traer = 'frontend';
            
        } else if (path == 'mitocondriano') {
            // console.log('recargando la misma pagina');  
            var recarga = $nuxt.$route.fullPath.split('?')[1]; 
            // console.log('recargando y traer datos de '+recarga);
            if (recarga == 'ejecutivas') {
                // console.log('recargando la misma pagina desde ejecutivas!');
                var traer = 'ejecutivas_de_cuentas';
                // console.log(traer);
            } else if (path == 'frontend') {
                // console.log('recargando la misma pagina desde frontend!');
                var traer = 'frontend'; 
                // console.log(traer);
                
            }      
        }
        
        return axios.get('http://pruebas.piloto.cl/JSONs/mitocondrianos.json')
        .then((res) => {
            console.log(traer);
            var integrantes = res.data[traer].integrantes;
            console.log('estoy leyendo los datos de: '+path);
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
    },
    data: () => ({
        function (){
            var title = $nuxt.$route.fullPath.split('/')[1]; //esto supongo no se debería hacer
            console.log('lhsadfjjsdafjlsdhjgfjgjfjl');
            // if (title == 'ejecutivas') {
            //     return{pageTitle: 'Ejecutivas de cuentas',}
            // } else {
                return{pageTitle: 'Frontend',}
                
            // }
        },
                // pageTitle: 'Frontend',
        
       
  }),
  
}    
</script>

<style>

</style>