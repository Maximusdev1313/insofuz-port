<script setup>
import {useApiStore} from 'src/stores'
import { onMounted } from 'vue'
let store = useApiStore()
onMounted(()=>{
    store.getCategory()
})
</script>
<template>
    <div>
        <q-list padding>
      <q-item
        clickable
        v-ripple
        :active="category.label"
        v-for="category in store.categories"
        :key="category"
        :to="'/categoriya/' + category.id"
      >
        <q-item-section avatar>
          <q-icon :name="category.icon" />
        </q-item-section>

        <q-item-section>
          {{ category.categoriya_nomi }}
        </q-item-section>
      </q-item>
    </q-list>
    </div>
</template>