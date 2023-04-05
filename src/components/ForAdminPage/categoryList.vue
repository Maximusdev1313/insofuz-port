<script setup>
import { useApiStore } from 'src/stores';
import { onMounted, ref } from 'vue';
const store  = useApiStore()


onMounted(()=>{
    store.getCategory()


})
    const thumbStyle = {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
    };

    const barStyle = {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
    };
</script>

<template>
  <div>
    <q-list bordered padding  class="q-mt-md">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 80vh; width: 280px"
      >
        <q-item clickable v-for="category in store.reversedCategory" :key="category" :to="'/admin/category/'+ category.id"> 
            <!-- <q-item-section avatar>
                <img :src="category.images[0].image" :alt="category.category_name">
            </q-item-section> -->
          <q-item-section>
            <q-item-label overline>{{ category.id }}</q-item-label>
            <q-item-label>{{category.category_name}}</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <!-- <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section> -->
        </q-item>

        
      </q-scroll-area>
    </q-list>
  </div>
</template>
