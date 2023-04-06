<template>
    <section id="mais-detalhes">
        <h1>
            Mais detalhes sobre os setores:
        </h1>
        <div id="cards">
            <div class="card">
                <img src="../../public/img/mapa-de-setores2.png" alt="">
                <h2>Pista</h2>
                <p>Pista convencional, atendida pelos bares 
                    e banheiros das laterais do estádio. 
                    Espaço amplo, com local para sentar e descansar. 
                    Separada da pista premium por uma grade.
                </p>
            </div>
            <div class="card">
                <img src="../../public/img/mapa-de-setores3.png" alt="">
                <h2>Pista Premium</h2>
                <p>Pista mais próxima do palco, com acesso 
                    muito próximo a banheiros e bares num 
                    raio de 100m. Todas as pessoas idosas 
                    e/ou com deficiência têm direito a acesso 
                    gratuito a essa área.
                </p>
            </div>
            <div class="card">
                <img src="../../public/img/mapa-de-setores4.png" alt="">
                <h2>Cadeiras</h2>
                <p>
                    Opção de cadeiras térreas ou elevadas. 
                    Acesso próximo a banheiros e bares, visão
                     um pouco elevada em relação às pistas.
                </p>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'Detalhes-Do-Setor',
}
</script>

<style>
    #mais-detalhes{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    #mais-detalhes h1{
        font-family: "RalewayBold";
        font-size: 2.2rem;
    }
    #cards{
        width:85%;
        display: flex;
        gap: 2rem;
        height: 550px;
    }
    .card:nth-child(2n){
        align-self: flex-end;
    }
    .card{
        width: 33%;
        text-align: center;
        line-height: 2rem;
    }
    .card img{
        width: 100%;
    }
    .card h2{
        font-family: "RalewayBold";
        margin: .7rem 0 1.4rem 0;
        font-size: 1.8rem;
    }
    .card p{
        font-family: "RalewayMedium";
        font-size: 1.15rem;
    }
</style>