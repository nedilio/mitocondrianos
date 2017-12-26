<template>
  <header>
      <div class="row">
        <div class="col-xs-12">
          <nuxt-link to="/"><h3>Mitocondria</h3></nuxt-link>
            
            <button class="nav-toggle" v-on:click="openMenu()">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
      </div>
      <div id="menu" class="menuLateral">
          <button class="nav-toggle2" v-on:click="closeMenu()">
              <span class="glyphicon glyphicon-remove"></span>
          </button>
          <ul>
              <li v-for="item in menuItems" v-bind:key="menuItems.title">
                <nuxt-link :to="{ path: item.link }" ><i :class="'fa '+item.icon"></i><span v-on:click="closeMenu()"> {{item.title}}</span></nuxt-link>
              </li>
          </ul>
      </div>
  </header>
</template>
<script>

export default {



  methods: {
    openMenu: function() {
      document.getElementById("menu").style.right=0;
    },
    closeMenu: function() {
      document.getElementById("menu").style.right="-100%";
    },
  },
  computed : {
    menuItems () {
          const objeto = this.$store.state.empleados
          const keys = Object.keys(objeto)
          const menuLinks = [];

          keys.forEach(function(item){
            const par = {title: objeto[item].nombre, link : '/'+item.split('_')[0], icon:'fa-desktop' }
            menuLinks.push(par)
            // console.log(objeto)
          });
          return menuLinks
      }
  }
  
};
</script>

<style>
  h3 {
    margin-bottom: 0;
    font-size: 18px;
  }

  h2 {
    margin-top: 0;
    font-size: 25px;
  }

  .btn {
    position: absolute;
    right: 5px;
    top: 10px;
  }

  .icon-bar {
    background-color: #000;
    width: 100%;
    display: block;
    height: 2px;
    margin-bottom: 3px;
  }

  .nav-toggle {
    position: absolute;
    right: 10px;
    top: 10px;
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
  }
    .nav-toggle2 {
        display: block;
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
  }

  .menuLateral {
    background-color: rgba(86,86,86,0.95);
    color: #fff;
    top: 0;
    padding: 20px;
    position: absolute;
    width: 80%;
    z-index: 100;
    right: -100%;
    height: 100%;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  .menulateral>ul {
      list-style: none;
  }
  .menuLateral ul li {
      margin-bottom: 20px;
  }
  .menuLateral ul li a {
      color: #fff;
      font-size: 18px;
  }
  ul {
    list-style-type: none;
    padding: 10px;
  }

</style>
