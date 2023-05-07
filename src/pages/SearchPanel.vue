<script setup>
import {useApiStore} from 'src/stores'
import cards from 'src/components/cards.vue';
const store = useApiStore()
store.getAllProducts()
</script>

<template>
  <cards :products="store.findItems" />
  <!-- {{ store.allProducts }} -->
</template>

<style>

</style>
