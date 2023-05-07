<script setup>
import { useApiStore } from 'src/stores';
import { ref, toRefs } from 'vue';
import card from 'src/components/card.vue'
const store = useApiStore()
const props = defineProps({
  products: Array,

});
const { products } = toRefs(props);
// store.getCategory()
let slide = ref(1)
</script>

<template>
  <div class="container ">
    <div class="wrapper  flex justify-between ">
      <card v-for="(product,index) in products" :key="index" :product="product"/>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
.wrapper {
  width: 100%;
  gap: 20px;
}
@media (max-width: 600px){
  .container{
    width: 98%;
    margin: 10px auto;
  }
}
</style>
