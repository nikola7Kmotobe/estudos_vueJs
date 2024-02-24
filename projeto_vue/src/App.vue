<!--Com <script setup>, os componentes importados são disponibilizados automaticamente para o modelo.-->
<script setup>
import primeiro_componente  from './components/primeiro_componente.vue' // importando o compontente filho
</script>

<template>
  <h1>Here is a child component!</h1>
  <primeiro_componente />
</template>