<script setup>
import {ref} from 'vue'
import {toRefs} from 'vue'

const props = defineProps({
  carusel: Array,
});
const { carusel } = toRefs(props);
let slide = ref('first')
let autoplay = ref(true)
</script>

<template>
  <div class="">
    <q-carousel
      arrows
      animated
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      v-model="slide"
      
    >
      <q-carousel-slide :name="slide.id" :img-src="slide.image_link" v-for="slide in carusel" :key="slide">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2" v-if="slide.title">{{ slide.title }}</div>
          <div class="text-subtitle1" v-if="slide.subtitle">{{ slide.subtitle }}</div>
        </div>
      </q-carousel-slide>
      
    </q-carousel>
  </div>
</template>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>