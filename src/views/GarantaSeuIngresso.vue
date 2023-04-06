<template>
    <main id="garanta-seu-ingresso">
        <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
            <template v-slot:titulo>
                Garanta seu Ingresso
            </template>
        </BaseBanner>
        <BaseFormulario/>
       
    </main>
</template>
<script>
import BaseBanner from '@/components/BaseBanner.vue';
import BaseFormulario from '@/components/Formulario.vue'

import BaseButton from '@/components/BaseButton.vue';

import { defineComponent } from 'vue';


export default defineComponent({
    name: 'GarantaSeuIngresso',
    components: {
        BaseBanner,
        BaseFormulario,
        BaseButton
    },
    data(){
        return {
            imagemBaseBanner: '/img/banner-garanta-seu-ingresso.png',
            altBaseBanner: 'Vários objetos jogados para cima com o azul do céu',
        }
    }

})
</script>

<style scoped>
    #garanta-seu-ingresso{
        background: linear-gradient( #fcf0dd 50%, #facf9d 100%);
    }
</style>
