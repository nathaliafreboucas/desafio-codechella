<template>
    <main class="main">
        <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
            <template v-slot:titulo>
                Mapa de Setores
            </template>
        </BaseBanner>        
        <MapaDosSetores />
        <DetalhesDoSetor />
    </main>
</template>

<script>
import BaseBanner from '@/components/BaseBanner.vue';
import MapaDosSetores from '@/components/MapaDosSetores.vue';
import DetalhesDoSetor from '@/components/DetalhesDoSetor.vue';


export default {
    name: 'AExperiencia',
    components: {
        BaseBanner,
        MapaDosSetores,
        DetalhesDoSetor
    },
    data (){
        return {
            imagemBaseBanner:'/img/banner-mapa-de-setores.png',
            altBaseBanner:'Mapa de setores',
        }
    }
}
</script>

<style scoped>

</style>