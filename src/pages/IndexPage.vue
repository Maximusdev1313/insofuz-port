<script setup>
import carusel from "src/components/forIndexPage/carusel.vue";
// import card from "src/components/card.vue";
import slide from 'src/components/slide.vue'
import { useApiStore } from "src/stores";
import { onBeforeMount, onMounted, ref } from "vue";
import dialogForReports from 'src/components/dialogForReports.vue'
const store = useApiStore();

// data for carusel
const caruselData = [
  {id: 'first', image_link: 'src/assets/commerce.png', title: 'first title', subtitle: 'subtitle'},
  {id: 'second', image_link: 'https://www.theasset.com/storage/Image/2021/May/161996875318980.jpg', title: 'second title', subtitle: 'subtitle'},
  {id: 'third', image_link: 'https://www.hindipanda.com/wp-content/uploads/2021/09/ecommerce-min.png', title: 'third title', subtitle: 'subtitle'}
]

onMounted(() => {
  store.getAllProducts();
  store.getCategory();
});



</script>

<template>
  <q-page>
    <div>
      <Suspense>
        <carusel :carusel="caruselData"/>
      </Suspense>
      <div class="title q-ma-md">
        Sizga kerakli
      </div>
      
      <Suspense>
        <slide
          :products="store.releatedProducts"
        />
      </Suspense>
      <div class="title q-ma-md">
        Sabzavotlar
      </div>
      <Suspense>
        <slide
          :products="store.productsForMens"
        />
      </Suspense>
      <div class="title q-ma-md">
        Shirinliklar
      </div>
      <Suspense>
        <slide
          :products="store.productsForWomen"
        />
      </Suspense>
    </div>
  </q-page>
</template>
