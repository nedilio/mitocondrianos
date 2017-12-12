<template>
  <header>
      <div class="row">
        <div class="col-xs-12">
            <h3>Mitocondria</h3>
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
                <li>
                <nuxt-link to="/ejecutivas" ><span v-on:click="closeMenu()">Ejecutivas de Cuentas</span></nuxt-link>

                </li>
                <li>

                    <nuxt-link to="/frontend" ><span v-on:click="closeMenu()">Frontend</span></nuxt-link>

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

</style>
