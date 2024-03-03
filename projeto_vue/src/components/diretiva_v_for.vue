<template>
    <div>
        <h3>Lista do que gosto de fazer!</h3>
        <ul>
            <li v-for="(atividades, index) in dados" :key="index">{{atividades}}</li>
        </ul>

        <h3>Perco dos cigarros</h3>
        <ul>
            <li v-for="preco in precos" :key="preco.id">{{preco.marca}} - {{preco.preco}} R$</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"diretiva_v_for",
        data(){
            return{
                dados: ['Tocar Guitarra', 'Lutar Jiu-Jitsu', 'Ouvir Música'],
                precos:[
                    {id:1, marca:'Marbolro', preco:10},
                    {id:2, marca:'Cammel', preco:5},
                    {id:3, marca:'Marbolro Gold', preco:10}
                ]
            }
        }
    }
</script>   