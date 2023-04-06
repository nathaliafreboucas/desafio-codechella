<template>
    <main class="main">
        <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
            <template v-slot:titulo>
                A Experiência
            </template>
        </BaseBanner>
        <section id="a-experiencia">
            <div class="cards-a-experiencia">
                <img src="../../public/img/aexperiencia1.png" alt="Mulher preta sorrindo de braços abertos" class="cards-a-experiencia-imagem">
                <div class="a-experiencia-texto">
                    <h1>Acessibilidade e Inclusão</h1>
                    <p>Nosso evento tenta abraçar um público mais amplo em 
                        todos os sentidos, de todas as idades, corpos, gostos e 
                        pensamentos!  Isso está presente no  espaço físico, na sinalização,
                         no treinamento da equipe de apoio, na comunicação em libras, 
                         braile, visual e tátil. Além disso, 
                        dispomos de ingressos gratuitos para pessoas com deficiência e
                         acompanhantes, pessoas idosas e crianças!</p>
                </div>
            </div>

            <div class="cards-a-experiencia">
                <img src="../../public/img/aexperiencia2.png" alt="garrafas recicláveis em uma sacola" class="cards-a-experiencia-imagem">
                <div class="a-experiencia-texto"> 
                    <h1>Sustentabilidade</h1>
                    <p>Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, 
                        levamos o futuro do nosso planeta a sério. Nosso 
                        festival é carbono zero, 
                        com utilização de copos retornáveis, coleta e destinação adequada 
                        de resíduos, e transporte coletivo.</p>
                </div>
            </div>

            <div class="cards-a-experiencia">
                <img src="../../public/img/aexperiencia3.png" alt="Montanha russa com um céu azul ensolarado" class="cards-a-experiencia-imagem">
                <div class="a-experiencia-texto">
                    <h1>Atrações</h1>
                    <p>
                        Intervenções artísticas e culturais para todos os gostos! Durante 
                        os intervalos dos shows, nossa experiência contará com recreação 
                        ,para crianças, oficina de cerâmica, origami, circo e aquarela! 
                        Além disso, nosso espaço contra com 3 praças de alimentação, roda 
                        gigante e outros brinquedos!
                    </p>
                </div>
            </div>
        </section>
    </main>
    
</template>
<script>
import BaseBanner from '@/components/BaseBanner.vue';

export default {
    name: 'AExperiencia',
    components: {
        BaseBanner
    },
    data (){
        return {
            imagemBaseBanner:'/img/banner-a-experiencia.png',
            altBaseBanner:'A experiência',
        }
    }
}
</script>

<style scoped>
@import url('../assets/fonts/fonts.css');
    #a-experiencia {
        display: flex;
        flex-direction: column;
        margin: 3.5rem 0;
        gap: 5rem;
        
    }
    .cards-a-experiencia{
        display: flex;
        justify-content: center;
        gap: 2.5rem
    }
    .cards-a-experiencia:nth-child(2n){
        flex-direction: row-reverse;
        text-align: end;
    }
    .cards-a-experiencia-imagem{
        width: 40%;
        
    }
    .a-experiencia-texto{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
        line-height: 2rem;
    }
    .a-experiencia-texto h1{
        font-family: "RalewayBold";
        font-size: 1.8rem;
    }
    .a-experiencia-texto p{
        font-family: "RalewayMedium";
        font-size: 1.25rem;
    }

</style>