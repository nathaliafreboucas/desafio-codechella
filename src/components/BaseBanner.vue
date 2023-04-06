<template>
    <div class="banner">
        <img :src="imagemBaseBanner" :alt="altBaseBanner" id="banner-imagem">
        <h1 id="texto" v-if="$slots.titulo"> 
            <slot name="titulo"></slot> 
        </h1>
    </div>
</template>
<script>

export default {
    name: 'BaseBanner',
    props: {
        imagemBaseBanner:{
            type: String,
            default: ''
        },
        altBaseBanner:{
            type: String,
            default: '',
        } 
    }
}
</script>
<style>
    .banner{
       margin:0;
       position: relative;
    }
    #banner-imagem{
        width: 100%;
    }
    #texto{
        display: flex;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'CalistogaRegular';
        font-weight: 900;
        font-size: 3rem;
        color: #444444;
    }
</style>