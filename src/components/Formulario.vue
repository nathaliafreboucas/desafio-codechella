<template>
    <form id="form" @submit.prevent="ingresso()">
        <p>Preencha o formulário a seguir:</p>
        <label for="nome-completo" class="label-form">Nome Completo:</label>
        <input name="nome" type="text" minlength=2 id="nome-completo" placeholder="Digite seu nome" required class="input-form" v-model="valores.nome">
        <span ></span>

        <label for="email" class="label-form">Email:</label>
        <input name="email" type="email" id="email" placeholder="Ex: email@dominio.com" required class="input-form" v-model="valores.email">
        <span></span>


        <div id="data-tipo">
            <div class="div-data-tipo">
                <label for="tipo-ingresso" class="label-form">Tipo de ingresso</label>
                <select name="ingresso" id="tipo-ingresso" class="input-form" v-model="valores.ingresso" required>
                    <option value="">selecione</option>
                    <option value="pista-premium">Pista Premium</option>
                    <option value="pista-comum">Pista Comum</option>
                    <option value="cadeiras-terreo">Cadeiras térreo</option>
                    <option value="cadeiras-superiores">Cadeiras superiores</option>
                    <option value="rampas">Rampas</option>
                </select>
                <span></span>
            </div>

            <div class="div-data-tipo">
                <label for="data" class="label-form">Data de nascimento:</label>
                <input name="dataNascimento" type="date" id="data" required class="input-form" v-model="valores.dataNascimento">
                <span></span>
            </div>
            
        </div>
        
        <BaseButton :imagemBaseButton="imagemBaseButton" :altImagemBaseButton="altImagemBaseButton" type="submit" @clicou="setValores(), buscaCampos()" >
            <template v-slot:textoBaseButton>
                Avançar
            </template>
        </BaseButton>
    </form>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'BaseFormulario',
    components: {
        BaseButton
    },
    data(){
        return{
            imagemBaseButton: '/img/local_activity.png',
            altImagemBaseButton: 'Comprar ingresso',
            mensagem: '',

            valores: {
                nome: '',
                email: '',
                ingresso:'',
                dataNascimento: '',
                local:'São Paulo',
            },
            tiposDeErro: [
                'valueMissing',
                'patternMismatch',
                'tooShort',
                'customError'
            ],
            mensagens: {
                nome: {
                    valueMissing: 'O campo de nome não pode estar vazio.',
                    tooShort: "Por favor, preencha um nome válido."
                },
                email: {
                    valueMissing: "O campo de e-mail não pode estar vazio.",
                    typeMismatch: "Por favor, preencha um email válido.",
                    customError: "Por favor, preencha um e-mail válido."
                }, 
                ingresso: {
                    valueMissing: 'Você deve escolher seu ingresso.',
                },
                dataNascimento: {
                    valueMissing: "O campo de data de nascimento não pode estar vazio.",
                    customError: "Você deve ter mais que 13 anos."
                }  

            }
            
        }
    },
   
    methods: {
        setValores(){
            const valores = this.valores;
            sessionStorage.setItem('valores', JSON.stringify(valores));
        },
       
        ingresso() {
            this.$router.push('/SeuIngresso');
        },
        buscaCampos(){
            const campos = document.querySelectorAll('[required]');
            campos.forEach(input => {
                this.verificaErro(input);

                input.addEventListener('invalid', (e) => {
                    e.preventDefault();
                    this.verificaErro(input);
                });
                input.addEventListener('blur', () => this.verificaErro(input));
                 
            })
        },
        verificaErro(input){
            this.mensagem = ''

            if(input.name == 'email') {
                this.verificaEmail(input, this.valores.email);
            }
            if(input.name == 'dataNascimento'){
                this.verificaData(input, this.valores.dataNascimento)
            }
            if(input.name == 'ingresso'){
               this.verificaTipo(input, this.valores.ingresso)
           }

            this.tiposDeErro.forEach(erro => {
                if(input.validity[erro]){
                    this.mensagem = this.mensagens[input.name][erro];
                    //nextSibling pega o proximo elemento irmão
                    input.nextSibling.innerHTML = this.mensagem;
                }
                else{
                    input.nextSibling.innerHTML = this.mensagem;
                }
            })

            
        }, 
        verificaEmail(input, email){
            let re = /\S+@\S+\.\S+/;

            if(email == ''){
                input.setCustomValidity('');
            }
            else if (!re.test(email)){
                input.setCustomValidity('Esse email tá errado');
            }else{
                input.setCustomValidity('');
            }
        },
        validaData(){
            const dataAtual = new Date();

            const data = new Date(this.valores.dataNascimento);
            const dataNascimento = new Date(data.getUTCFullYear() + 13, data.getUTCMonth(), data.getUTCDate());

            return dataAtual >= dataNascimento;
            
        },
        verificaData(input, data){
            if(data == ''){
                input.setCustomValidity('');
            }
            else if (!this.validaData()) {
                input.setCustomValidity('Deve ter mais de 13 anos.');
            }
            else{
                input.setCustomValidity('');

            }   
        },
        verificaTipo(input, tipo){
            if(tipo == ''){
                input.setCustomValidity('');
            }
        }
    },
   
    
}
</script>
<style scoped>
    #form{
        width: 50%;
        margin: 3rem auto;
        display: flex;
        flex-direction: column;
        gap: .7rem;
    
    }
    #form p{
        text-align: center;
        font-family: "CalistogaRegular";
        font-size: 2rem;
        color: #444444;
        margin-bottom: 2rem;
    }
    .input-form{
        padding: .5rem;
        border: transparent;
        background-color: #fcf0dd;
        width: 100%;
    }
    .input-form:focus{
        outline: 0;
    }
    .label-form{
        font-family: "RalewayBold";
        color: #444444;
        font-size: 1.3rem;
    }
    #data-tipo{
        display: flex;
        gap: 2rem;
        margin-bottom: 2.5rem;
    }
    .div-data-tipo{
        width:50%;
    }
    #tipo-ingresso, #data{
        margin-top: .7rem;
    }
    span{
        font-family: "RalewayBold";
        color: red;
    }
</style>
