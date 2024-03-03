<template>
    <div>
       <p>Meu nome é: Kadu</p> 
       <Curriculo :linguagem="linguagem"/>
    </div>
</template>

<script>
import Curriculo from './Curriculo.vue';

    export default{
        nome:"Pessoa",
        data(){
            return{
                linguagem: "Cobol"
            }
        },
        components:{
            Curriculo
        }
    }
</script>