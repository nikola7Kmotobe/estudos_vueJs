<!--Com <script setup>, os componentes importados são disponibilizados automaticamente para o modelo.-->
<script setup>
import primeiro_componente  from './components/primeiro_componente.vue' // importando o compontente filho
import segundo_componente from './components/segundo _componente.vue'
import lifecycle_hooks from './components/lifecycle_hooks.vue';
import Pessoa from './components/Pessoa.vue';
import diretivas from './components/diretivas.vue';
import diretiva_v_for from './components/diretiva_v_for.vue';
import metodos from './components/metodos.vue';
</script>

<template>
  <h1>Primeiro Componente Filho</h1>
  <primeiro_componente />
  <h1>Segundo Componente Filho</h1>
  <segundo_componente />
  <h1>Terceiro Componente Filho</h1>
  <lifecycle_hooks />
  <h1>Quarto Componente Filho</h1>
  <Pessoa/>
  <h1>Quinto Componente Filho</h1>
  <diretivas/>
  <h1>Sexto Componente Filho</h1>
  <diretiva_v_for/>
  <h1>Sétimo Componente Filho</h1>
  <metodos/>
</template>

<style>
  body{
    background-color: black;
    color: white;
  }
</style>