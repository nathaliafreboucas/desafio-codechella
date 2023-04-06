<template>
    <section id="mapa-dos-setores">
        <img src="../../public/img/mapa-setores1.png" alt="mapa de setores" id="imagem-mapa-setores">
        <ul id="legenda">
            <li class="itens-da-lista">Legenda:</li>
            <li class="itens-da-lista"><svg width="30" height="30">
                <rect width="30" height="30" style="fill:rgb(14,125,241)" />
              </svg>Pista Premium</li>
            <li class="itens-da-lista"><svg width="30" height="30">
                <rect width="30" height="30" style="fill:rgb(254,1,110)" />
              </svg>Pista Comum</li>
            <li class="itens-da-lista"><svg width="30" height="30">
                <rect width="30" height="30" style="fill:rgb(1,168,158)" />
              </svg>Cadeiras térreo</li>
            <li class="itens-da-lista"><svg width="30" height="30">
                <rect width="30" height="30" style="fill:rgb(63,81,181)" />
              </svg>Cadeiras superiores</li>
            <li class="itens-da-lista"><svg width="30" height="30">
                <rect width="30" height="30" style="fill:rgb(14,125,241)" />
              </svg>Rampas</li>
        </ul>
    </section>
    
</template>

<script>
export default {
    name: 'MapaDosSetores'
}
</script>

<style scoped>
    @import url('../assets/fonts/fonts.css');

    #mapa-dos-setores{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3.2rem;
        margin: 2rem 0 4rem 0;
    }
    #imagem-mapa-setores{
        width: 40%;
    }
    #legenda{
        width: 40%;
        display: flex;
        flex-direction: column;   
        list-style: none;
    }
    .itens-da-lista{
        font-family: "RalewayMedium";
        font-size: 1.2rem;
        line-height: 3.6rem;
        display: flex;
        align-items: center;
        gap: 1rem
    }
    .itens-da-lista:nth-child(1){
        font-family: "RalewayBold";
        font-size: 2rem;
        list-style: none;
    }
</style>