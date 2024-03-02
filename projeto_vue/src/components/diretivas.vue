<template>
    <div class="div">
        <h1>Testanto diretivas! v-if</h1>
        <p v-if="Verdadeiro">Vou aparecer pois mee v-if é verdadeiro</p>
        <p v-else>eu não pois sou falso!</p>
    </div>
    <div>
        <h1>Testanto diretivas! v-bind</h1>
        <img :src="src" :alt="alt" width="50" height="50">
    </div>
    <div>
        <h1>Testanto diretivas!  @click -> metodos</h1>
        <p>{{texto}}</p>
        <button @click="CliqueAqui">Clique em mim</button>
    </div>
</template>

<script>
    export default{
        name:'diretivas',
        data(){
            return{
                Verdadeiro: true,
                src: "src/assets/nicotina.webp",
                alt: "Meu Pigas!",
                texto: "Led Zeppelin"
            }    
        },
        methods:{
            CliqueAqui(){
                this.texto = "Ser Constante e não ser Errante!"
            }
        }
    }
</script>

<style>
    .div{
    background-color: gray;
    color: greenyellow;
    }
</style>