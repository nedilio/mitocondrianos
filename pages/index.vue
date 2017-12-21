<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">
        mitocondrianos
        <!-- {{menuTitles}} -->
      </h1>
          <ul>
              <li v-for="item in menuItems" v-bind:key="menuItems.title">
                <nuxt-link :to="{ path: item.link }" ><span v-on:click="closeMenu()">{{item.title}}</span></nuxt-link>
              </li>
          </ul>
    </div>
  </section>
</template>

<script>

export default {
  computed: {
      menuItems () {
          const objeto = this.$store.state.empleados
          const keys = Object.keys(objeto)
          const menuLinks = [];

          keys.forEach(function(item){
            const par = {title: objeto[item].nombre, link : '/'+item.split('_')[0] }
            menuLinks.push(par)
            // console.log(objeto)
          });
          return menuLinks
      }
    },
}
</script>

<style>

</style>
