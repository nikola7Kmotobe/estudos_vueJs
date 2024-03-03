<template>
    <div>
        <p>Traballho com as tecnologias</p>
        <ul>
            <li>C#</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>{{ linguagem }}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"Curriculo",
        props:{
            linguagem: String
        }
    }
</script>