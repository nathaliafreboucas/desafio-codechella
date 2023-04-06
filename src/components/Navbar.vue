<template>
    <nav class="nav">
        <div class="div-logo">
            <router-link to="/"><img :src="logo" :alt="alt" id="logo"></router-link>
        </div>
        <div class="div-nav">
            <router-link to="/AExperiencia" class="link-nav">A experiência</router-link> 
            <router-link to="/MapaDeSetores" class="link-nav">Mapa de Setores</router-link>
            <router-link to="/InformacoesGerais" class="link-nav">Informações</router-link> 
            <router-link to="/GarantaSeuIngresso" class="link-nav">Ingresso</router-link>
        </div>
        
    </nav>
</template>

<script>


export default {
    name: 'NavbarVue',
    props: {
        logo:"",
        alt:""
    }
}
</script>

<style scoped>
    @import '../assets/fonts/fonts.css';
    .nav{
        background-color: #2E7BA2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .7rem 5rem;
        height: 100%;
    }
    #logo{
       height: 3rem;
    }
    .link-nav{
        
        text-decoration: none;
        color: #ffff;
        padding-left: 2rem;
        font-family: "RalewayBold";
        font-size: .9rem;
        font-weight: 700;
        

    }


</style>
