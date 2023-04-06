<template>
    <footer id="footer">
        <div id="div-redes">
            <img src="../../public/img/logo2.png" alt="" id="logo-cinza"> <!--Não eh essa logo, trocar para a logo escura -->
            <p id="p-redes">
                Acesse nossas redes: 
                <img src="../../public/img/iconesredessocias-16.png" alt="">
                <img src="../../public/img/iconesredessocias-17.png" alt="">
                <img src="../../public/img/iconesredessocias-18.png" alt="">
                <img src="../../public/img/iconesredessocias-19.png" alt="">
            </p>
        </div>
        <p id="copyright">
            &copy; Desenvolvido por Nathália Rebouças. <br>
            Projeto fictício sem fins comerciais.
        </p>

    </footer>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterVue'
})
</script>
<style scoped>
@import url('./../assets/fonts/fonts.css');

    #footer{
        grid-area: footer;
        background-color: #FACF9D;
        display: flex;
        justify-content: space-between;
        padding: 0 7rem;
        height: 10rem;
        align-items: center;

    }
    #div-redes{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #logo-cinza{
        width: 180px
    }
    p img{
        width: 1.5rem;
        margin-left: .7rem;

    }
    #p-redes{
        display: flex;
        align-items: center;
        font-family: "RalewayMedium";
        color: #444444;

    }
    #copyright{
        font-family: "RalewayMedium";

        color: #444444;
        line-height: 2.2rem;
    }
</style>
