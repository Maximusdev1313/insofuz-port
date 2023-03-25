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
          <q-item-label header>Barcha mahsulotlar</q-item-label>
      <q-item
        clickable
        v-ripple
        :active="category.label"
        v-for="category in store.categories"
        :key="category"
        :to="'/category/' + category.id"
      >
        <!-- <q-item-section avatar>
          <q-icon :name="category.icon" />
        </q-item-section> -->

        <q-item-section>
          {{ category.category_name }}
        </q-item-section>
      </q-item>
    </q-list>
    </div>
</template>