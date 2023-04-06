<template>
    <header id="header">
        <NavbarVue :logo="logo_src" :alt="alt_as" />
    </header>
</template>

<script lang="js">

import NavbarVue from './Navbar.vue';


export default {
    name: 'HeaderVue',
    components: {
        NavbarVue,
        
    },
    data(){
        return {
            logo_src: '/img/logo.png',
            alt_as:'Codechella'
        }
    }
}
</script>

<style scoped>
    #header{
        grid-area: header;
        height: 6rem;
    }
</style>
