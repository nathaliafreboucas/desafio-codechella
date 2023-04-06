<template>
    <section class="line-up">
        <h1>/Line-Up/</h1>
        <div class="div-dia">
            <div class="linha-horizontal"></div>
            <p>SÁBADO &#60; 11/03 &#62; </p>
            <div class="linha-horizontal"></div>
        </div>
        
        <ul class="atracoes">
            <li class="headliner">System of a DOM</li>
            <li>Python Maiden</li>
            <li>Apollo Client 2001</li>
            <li>Bon Java</li>
            <li>NickCallback</li>
            <li>Linkin Promises</li>
            <li>Fullstack Fighters</li>
            <li>Papa React</li>
            <li>Angular in Chains</li>
            <li>Agnostic Front-end</li>
            <li>SlipkNode</li>
            <li>Pink Flutter</li>
            <li>Kiss</li>
        </ul>
        
        <div class="div-dia">
            <div class="linha-horizontal"></div>
            <p>DOMINGO &#60; 12/03 &#62;
            </p>
            <div class="linha-horizontal"></div>
        </div>
        <div>
            <ul class="atracoes">
                <li class="headliner">Lana Del Ploy</li>
                <li>The Backnd</li>
                <li>CSS Styles</li>
                <li>DJ Query</li>
                <li>ArrayAna Grande</li>
                <li>Miley Cypress</li>
                <li>The Bootstrap Boys</li>
                <li>Papa React</li>
                <li>CloudPlay</li>
                <li>Rubycat Dolls</li>
                <li>Dev Lovato</li>
                <li>Kylie MiLOG</li>
                <li>Jenkins Brothers</li>

            </ul>
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'LineUp',
}
</script>

<style scoped>
@import url('../assets/fonts/fonts.css');
    .line-up{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    h1 {
        font-family: "CalistogaRegular";
        font-size: 2.5rem;
    }
    .div-dia{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .linha-horizontal{
        width:300px;
        border-top: 1px solid #DF9010;
    }
    .div-dia p{
        font-family: "CalistogaRegular";
        font-size: 1.8rem ;
        background-color: #DF9010;
        margin: 0 2rem ;
        padding: .8rem;
        color: #fff;
    }
    .atracoes {
        display: grid;
        width: 80%;
        margin: 0 auto 3rem;
        list-style: none;
        grid-template-columns: auto auto auto auto;
        grid-auto-rows: 2rem;
        align-items: center;
        gap:1rem
    }
    .headliner{
        font-family: "RalewayBlack";
        font-size: 2rem;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3; 
    }
    li:nth-child(n+2):nth-child(-n+5){
        font-family: "RalewayBold";
        font-size: 1.7rem;
    }
    li:nth-child(n+6):nth-child(-n+9){
        font-family: "RalewayBold";
        font-size: 1.2rem;
    }
    li:nth-child(n+10):nth-child(-n+13){
        font-family: "RalewayMedium";
        font-size: 1.2rem;
    }
    .line-up h1{
        margin: 1rem 0;
    }
</style>