<template>
  <main class="main">
    <div>
      <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
        <template v-slot:titulo>
          Boas-vindas ao #CodeChella2023!
        </template>
      </BaseBanner>
    </div>

   <HomeComprarIngresso />
   <LineUp />

   <BaseBanner :imagemBaseBanner="imagemBaseBanner2" :altBaseBanner="altBaseBanner2"/>
    
  </main>
</template>

<script> 
import BaseBanner from '../components/BaseBanner.vue';
import HomeComprarIngresso from '../components/HomeComprarIngresso.vue';
import LineUp from '../components/LineUp.vue';

export default {
  name: 'HomeView',
  components: {
    BaseBanner,
    HomeComprarIngresso,
    LineUp
  },
  data () {
    return{
      imagemBaseBanner: '/img/banner-Homepage.png',
      altBaseBanner:'Boas-vindas ao #CodeChella2023! imagem',
      imagemBaseBanner2: '/img/banner-Homepage2.png',
      altBaseBanner2:'Pessoas curtindo o festival'
    }
  }

}
</script>
<style>
  
  .main{
    grid-area: main;
    background: linear-gradient(#bfdae6 0%, #fcf0dd 50%, #facf9d 100%);
    color: #444444;
  }
  
</style>
