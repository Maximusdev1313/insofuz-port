<script setup>
import carusel from 'src/components/forIndexPage/carusel.vue'
import cards from 'src/components/forIndexPage/cards.vue';
import {useApiStore} from 'src/stores'
import { onMounted } from 'vue';
const store = useApiStore()
onMounted(()=>{
  store.getCategory()
})
</script>

<template>
  <q-page>
    <div>
      <carusel/>
      <cards :category="store.limitedCategory" :title="'Kategoriyalar'"/>
      
    </div>
  </q-page>
</template>