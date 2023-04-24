<template>
  <div>
    <q-carousel
    animated
    v-model="slide"
    control-color="purple"
    navigation
    control-type="outline"
    arrows
    infinite
    height="200px"
    class="br-7px"
  >
    <q-carousel-slide v-for="order , i in props.orders " :key="i"  :name="i+1" :img-src="order.image_link"/>

  </q-carousel>
  </div>
</template>

<script setup>
import{ref} from 'vue'
const props = defineProps({orders:Array})
const slide = ref(1)
</script>

<style lang="scss" scoped>

</style>
