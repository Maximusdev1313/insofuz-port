<script setup>
import carusel from "src/components/forIndexPage/carusel.vue";
import card from "src/components/card.vue";
import { useApiStore } from "src/stores";
import { onBeforeMount, onMounted, ref } from "vue";
const store = useApiStore();

// data for carusel
const caruselData = [
  {name: 'first', image: 'src/assets/commerce.png', title: 'first title', subtitle: 'subtitle'},
  {name: 'second', image: 'https://www.theasset.com/storage/Image/2021/May/161996875318980.jpg', title: 'second title', subtitle: 'subtitle'},
  {name: 'third', image: 'https://www.hindipanda.com/wp-content/uploads/2021/09/ecommerce-min.png', title: 'third title', subtitle: 'subtitle'}
]

onBeforeMount(() => {
  store.getAllProducts();
  store.getCategory();
});



</script>

<template>
  <q-page>
    <div>
      {{ store.releatedProducts }}
      <carusel :carusel="caruselData"/>
      <div class="title q-ma-md">
        Sizga kerakli
      </div>
      <Suspense>
        <card
          :products="store.releatedProducts"
        />
      </Suspense>
      <div class="title q-ma-md">
        Erkaklar uchun
      </div>
      <Suspense>
        <card
          :products="store.productsForMens"
        />
      </Suspense>
      <div class="title q-ma-md">
        Ayollar uchun
      </div>
      <Suspense>
        <card
          :products="store.productsForWomen"
        />
      </Suspense>
    </div>
  </q-page>
</template>
