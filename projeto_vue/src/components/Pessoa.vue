<template>
    <div>
       <p>Meu nome é: Kadu</p> 
       <Curriculo/>
    </div>
</template>

<script>
import Curriculo from './Curriculo.vue';

    export default{
        nome:"Pessoa",
        components:{
            Curriculo
        }
    }
</script>