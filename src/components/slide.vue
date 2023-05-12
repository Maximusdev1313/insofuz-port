<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import card from "./card.vue";
import { toRefs } from "vue";
import { useApiStore } from "src/stores";
const store = useApiStore();
const props = defineProps({
  products: Array,
});
const { products } = toRefs(props);
const splideOptions = {
  type: "loop",
  perPage: 3,
  focus: "center",

  breakpoints: {
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
};
</script>
<template>
  <Splide :options="splideOptions" aria-label="My Favorite Images">
    <SplideSlide v-for="product in products" :key="product.id">
      <router-link :to="'/product/' + product.id">
        <q-img
          :src="product.images[0]?.image_link"
          :alt="product.name"
          class="q-pa-md img"
          spinner-color=""
        >
          <div class="absolute-full column">
            <div class="discount row justify-between">
              <div class="discount__title">Chegirma</div>
              <div class="discount__percent">{{ product.discount }} %</div>
            </div>
            <div
              class="product-title row justify-center items-center text-h5 text-uppercase"
            >
              {{ product.name }}
            </div>
          </div>
        </q-img>
      </router-link>
    </SplideSlide>
  </Splide>
</template>
<style scoped>
.product-title {
  height: 80%;
}
.img {
  height: 400px;
}
</style>
