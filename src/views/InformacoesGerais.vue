<template>
    <main class="main">
        <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
            <template v-slot:titulo>Informações Gerais</template>
        </BaseBanner>
        <section class="infos">
            <h1 id="titulo">Perguntas Frequentes: </h1>

            <BaseAccordion>
                <template v-slot:pergunta>Quais as atrações?</template>
                <template v-slot:resposta>
                    A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado 
                    dos pais ou responsáveis legais. 
                    Menores de 10 anos não podem entrar.
                </template>

            </BaseAccordion>
            <BaseAccordion>
                <template v-slot:pergunta>Qual é a classificação etária?</template>
                <template v-slot:resposta>
                    Teremos dois dias de show, o primeiro(11/03) com bandas de rock, 
                    e o segundo(12/03) com bandas pop. 
                    <a>Confira o line-up em detalhes clicando neste link!</a>
                </template>

            </BaseAccordion>
            <BaseAccordion>
                <template v-slot:pergunta>Quais são os setores disponíveis?</template>
                <template v-slot:resposta>
                    Pista Premium<br>
                    Pista Comum <br>
                    Cadeiras térreo <br>
                    Cadeiras superiores<br>
                    Rampas
                </template>

            </BaseAccordion>
            <BaseAccordion>
                <template v-slot:pergunta>Quais são os itens proibidos?</template>
                <template v-slot:resposta>
                    Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, 
                    cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes,
                     correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico,
                      corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.
                </template>

            </BaseAccordion>
            <BaseAccordion>
                <template v-slot:pergunta>Quem tem direito a meia-entrada?</template>
                <template v-slot:resposta>
                    De acordo com a Lei Federal, têm direito ao benefício da meia-entrada 
                    aqueles que preencherem os requisitos
                    e apresentarem os documentos comprobatórios.
                </template>

            </BaseAccordion>
        </section>
    </main>
</template>
<script>
import { defineComponent } from 'vue';
import BaseBanner from '@/components/BaseBanner.vue';
import BaseAccordion from '@/components/BaseAccordion.vue'

export default defineComponent({
    name: 'InformacoesGerais',
    components: {
        BaseBanner,
        BaseAccordion
    },
    data(){
        return{
            imagemBaseBanner: '/img/banner-infosgerais.png',
            altBaseBanner: 'informações gerais',
        }
    }
})
</script>
<style scoped>
    @import '../assets/css/fonts.css';
    .infos{
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    #titulo{
        text-align: center;
        font-family: "CalistogaRegular";
        font-size: 2rem;
        color: #444;
        padding: 2rem 0;
    }
    dt{
        background-color: #2E7BA2;
        padding: 1.3rem;
        font-family: "RalewayBold";
        font-size: 1.2rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        list-style-type: '';
        align-items: center;
    }

    details{
        transition: height .5s ease;
        overflow: hidden;
    }
    
    details:not([open]){
        height: 4rem;
    }

    details[open]{
        height: 11rem;
    }
    dd div{
        background-color: #C8DEEF;
        padding: 1rem;
        font-family: "RalewayRegular";
    }
   
    
</style>
