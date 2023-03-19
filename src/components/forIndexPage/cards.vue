<script setup>
import {toRefs} from 'vue'
const props = defineProps({
  category: Array,
  title: String
});
const { category } = toRefs(props);
</script>
<template>
    <div class="wrapper">
        <div class="text-h6 text-grey">
        {{title}}
    </div>
    <div class="row justify-around  items-start q-gutter-md q-my-md">
        <q-card class="my-card" v-for="card in category" :key="card">
            <router-link to="/">
              
                <q-img   :src="card.rasmlar[0]?.link" :ratio="16/9" >
        <div class="fullscreen text-subtitle2  row justify-center items-center">
          {{ card.categoriya_nomi }}
        </div>
      </q-img>
            </router-link>
            
        </q-card>
    </div>
    </div>
    
</template>
<style lang="sass" scoped>
.wrapper
  width: 90%
  margin: 20px auto
.my-card
  width: 100%
  max-width: 220px
  max-height: 200px
</style>