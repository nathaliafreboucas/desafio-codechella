<template>
    <section id="comprar-ingresso">

        <img src="../../public/img/card1-home.png" alt="Pessoas curtindo um show" id="card1">
        
        <div id="texto-comprar-ingresso">
          <h3>
            &#60; 11 e 12 de Março &#62;
            <br>
            Aluródromo de São Paulo
          </h3>
          <p>
            Hora de programar nossa memória com novas lembranças! 
            Uma nova experiência sobre música, linguagens 
            e, claro, tecnologia! Somos um festival diverso, 
            com vários artistas e referências. Divirta-se!
          </p>
          
          <BaseButton :imagemBaseButton="imagemBaseButton" :altImagemBaseButton="altImagemBaseButton">
            <template v-slot:textoBaseButton>
              Comprar ingresso!
            </template>
          </BaseButton>
        </div>
      </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'HomeComprarIngresso',
  components: {
    BaseButton
  },
  data(){
    return{
      imagemBaseButton: '/img/ico-comprar-ingresso.png',
      altImagemBaseButton: 'Ingresso'
    }
  }
}
</script>

<style scoped>
  @import url('../assets/fonts/fonts.css');

  #comprar-ingresso {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    padding: 3rem;
  }
  #card1{
    width: 40%;
  }
  #texto-comprar-ingresso{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    width: 40%;
    padding: 1rem 0;
    font-family: "RalewayMedium";
  }
  h3,p{
    text-align: center;
    text-justify: center;
  }
  p{
    line-height: 2rem;
    font-size: 1.2rem;
  }
  h3{
    font-family: "RalewayBold";
    font-weight: bold;
    font-size: 1.6rem;
  }
  
</style>