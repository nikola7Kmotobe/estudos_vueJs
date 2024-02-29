<template>
    <div>
        <h1>Testanto diretivas!</h1>
        <p v-if="Verdadeiro">Vou aparecer pois mei v-if é verdadeiro</p>
        <p v-else>eu não pois sou falso!</p>
    </div>
</template>

<script>
    export default{
        name:'diretivas',
        data(){
            return{
                Verdadeiro: true
            }    
        }
    }
</script>