<template>
    <div>
        <form action="">
            <input type="text" name="" id="" placeholder="Nome" v-model="name">
            <input type="text" name="" id="" placeholder="Senha" v-model="senha">
            <input type="submit" @click="EnviarFrom($event)">
        </form>
    </div>
</template>

<script>
    export default{
        name:"metodos",
        data(){
            return{
            name:"",
            senha:""
            }
        },
        methods:{
            EnviarFrom(e){
                e.preventDefault();
                const name = this.name;
                const senha = this.senha;

                console.log("Nome: "+name+" e senha: "+ senha);
            }
        }
    }
</script>