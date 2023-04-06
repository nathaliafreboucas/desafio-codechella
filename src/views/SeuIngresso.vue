<template>
    <main class="main">
        <BaseBanner :imagemBaseBanner="imagemBaseBanner" :altBaseBanner="altBaseBanner">
            <template v-slot:titulo>
                Seu ingresso está aqui!
            </template>
        </BaseBanner>
        <section id="ingresso">
            <p>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do 
                evento e divirta-se!
            </p>
            <div id="div-ingresso">
                <div id="div-logos">
                    <img src="/img/logo2.png" alt="logo codechella " id="logo-codechella">
                    <img src="/img/ellipse4.png" alt="">
                </div>
                <div id="qrcode">
                    <img src="/img/qr-code.png" alt="qrcode">
                    <ul>
                        <li v-for="(valor, chave, index) in valores" :key="index">
                            <div v-if="chave == 'nome' || chave == 'Setor' ? chave = '' : chave = chave + ':' " id="div-chave">
                                {{ chave }}
                            </div>
                            <div class="div-valor">
                                {{ valor }}
                            </div>
                        </li> 
                        <!-- <li>Ingresso Cortesia</li>
                        <li>Setor Pista</li>
                        <li>Data: 11/03</li>
                        <li>Local: São Paulo-SP</li> -->
                    </ul>
                </div>

            </div>
        </section>
    </main>
</template>

<script>
import BaseBanner from '@/components/BaseBanner.vue';

export default {
    name: 'SeuIngresso',
    components: {
        BaseBanner
    },
    data () {
        return{
            imagemBaseBanner: '/img/banner-seu-ingresso-aqui.png',
            altBaseBanner: 'Seu ingresso está aqui.',
            valores: {
                nome: null,
                email: null,
                setor: null,
                data: null,
                local: null
            }
        }
    },
    methods: {
        mostra(){
            const valores = sessionStorage.getItem('valores');
            const valor = JSON.parse(valores);
            this.valores.nome = valor.nome;
            this.valores.email = valor.email;
            this.valores.setor = valor.ingresso.replace("-", " ").toUpperCase();
            this.valores.data = this.formatarData();
            this.valores.local = valor.local;
        },
        formatarData() {
            const valores = sessionStorage.getItem('valores');
            const valor = JSON.parse(valores);
            const data = new Date(valor.dataNascimento.replace("-"," "));

            const dataFormatada = data.toLocaleDateString();
            return dataFormatada;
        }
    },
    mounted(){
        this.mostra();
    }
   
}
</script>

<style scoped>
    #ingresso{
        width:50%;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    #ingresso p{
        font-family: "CalistogaRegular";
        font-size: 1.5rem;
        text-align: center;
    }
    #div-ingresso{
        background: linear-gradient(#bfdae6 0%, #fcf0dd 50%, #facf9d 100%);
        box-shadow:  9px 9px 15px rgba(0, 0, 0, 0.35);

    }
    #div-logos{
        display: flex;
        justify-content: space-between;
        padding: 1.8rem;
    }
    #qrcode{
        display: flex;
        padding: 1rem 1.8rem;
        gap: 2.5rem;
        height: 200px;
    }

    ul{
        list-style: none;
        font-family: 'RalewayMedium';
        line-height: 1.9rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
    }
    #qrcode ul li:first-child{
        font-family: "RalewayBold";
        font-size: 1.5rem;  
        margin-bottom: auto;
    }
    
    #logo-codechella{
        width: 150px;
    }
    li {
        display: flex;
        gap: .4rem;
    }
    #div-chave{
        text-transform: capitalize;

    }
    .div-valor {
        width: 100%;
    }
</style>