<!--Com <script setup>, os componentes importados são disponibilizados automaticamente para o modelo.-->
<script setup>
import primeiro_componente  from './components/primeiro_componente.vue' // importando o compontente filho
import segundo_componente from './components/segundo _componente.vue'
import lifecycle_hooks from './components/lifecycle_hooks.vue';
import Pessoa from './components/Pessoa.vue';
import diretivas from './components/diretivas.vue';
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
</template>