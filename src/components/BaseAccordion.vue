<template>
    
            <dl>
                <dt>
                    
                    <div><slot name="pergunta"></slot> </div>

                    <button
                    :aria-expanded="aberto"
                    :aria-controls="resposta"
                    @click="accordion()"
                    >
                        <img src="/img/arrow_drop_down.png" alt=""
                        :class="{
                            'rotate-180': aberto,
                          }"
                        >
                    </button>
                   
                    
                </dt>
                <dd>

                    <div v-show="aberto" :id="resposta">
                        <slot name="resposta">
                           
                        </slot>
                        
                    </div>

                </dd>
            </dl>
            


</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BaseComponent',
    data(){
        return{
            aberto: false,
        };
    },
    
    methods: {
        accordion(){
            this.aberto = !this.aberto        
        }
    }
})
</script>

<style scoped>

    dt{
        background-color: #2E7BA2;
        height: 3.5rem;
        padding: 0 1.3rem;
        font-family: "RalewayBold";
        font-size: 1.2rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        list-style-type: '';
        align-items: center;
    }

    dd div{
        background-color: #C8DEEF;
        padding: 1rem;
        font-family: "RalewayRegular";
    }
    button{
        background-color: transparent;
        border:none;
        height: 100%;
        padding: 0 1.3rem
    }
    @keyframes seta {
        0%, 100%{
            transform: rotate(-180deg);
        }
    }
    .rotate-180{
        animation: seta  0.50s ease-in-out infinite
    }

</style>
