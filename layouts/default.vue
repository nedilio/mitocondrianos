<template>
  <div class="container">
    <HeaderApp/>
    <nuxt/>
    <FooterApp/>
  </div>
</template>

<script>
import HeaderApp from '~/components/Header'
import FooterApp from "~/components/Footer";

export default {
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>

</style>