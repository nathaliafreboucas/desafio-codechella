<template>
  <HeaderVue />
  <router-view/>
  <FooterVue />
  
</template>
<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  }
}
</script>

<style >
  @import './assets/fonts/fonts.css';
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app{
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
      'header'
      'main'
      'footer'
    ;
    
  }
  

</style>