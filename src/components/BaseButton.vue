<template>
    <button @click="Onclick" >
      <slot name="textoBaseButton"></slot>
      <img :src="imagemBaseButton" :alt="altImagemBaseButton">
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    
    props: {
        imagemBaseButton:{
          type:String,
          default: ''
        },
        altImagemBaseButton:{
          type:String,
          default: ''
        },
    },
    methods: {
      Onclick(){
        this.$emit('clicou');
      }
    }

}
</script>
<style scoped>
  button{
    color: white;
    background-color: #2E7BA2;
    border: transparent;
    padding: .8rem 1rem;
    margin: auto;
    border-radius: 13px;
    box-shadow: 4px 4px black;
    font-family: 'RalewayBold';
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button:hover{
    transition: .5s;
    background-color: #519EC5;
  }
  button img{
    width: 13%;
  }
</style>