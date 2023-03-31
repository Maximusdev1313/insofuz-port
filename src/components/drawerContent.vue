<script setup>
import {useApiStore} from 'src/stores'
import { onMounted } from 'vue'
let store = useApiStore()
onMounted(()=>{
    store.getCategory()
    console.log(store.categories);
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
        <q-item-section avatar>
          <!-- <q-img color="primary" :src="category.images[0]?.image" width="200" height="200" v-if="category.images[0].image"/>
          <q-img color="primary" :src="category.images[0]?.image_link" width="200" height="200" v-else/> -->
        </q-item-section>
        <q-item-section>
          {{ category.category_name }}
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn  to="admin/page">register</q-btn>
    </div>
</template>