<script setup>
import cards from "src/components/cards.vue";
import { useApiStore } from "src/stores";
import { onBeforeMount, onMounted, ref } from "vue";
import dialogForReports from "src/components/dialogForReports.vue";
import axios from "axios";

const store = useApiStore();
// data for carusel
// const caruselData = [
//   {
//     id: "first",
//     image_link: "src/assets/commerce.png",
//     title: "first title",
//     subtitle: "subtitle",
//   },
//   {
//     id: "second",
//     image_link:
//       "https://www.theasset.com/storage/Image/2021/May/161996875318980.jpg",
//     title: "second title",
//     subtitle: "subtitle",
//   },
//   {
//     id: "third",
//     image_link:
//       "https://www.hindipanda.com/wp-content/uploads/2021/09/ecommerce-min.png",
//     title: "third title",
//     subtitle: "subtitle",
//   },
// ];

const image = ref("");
const getImage = async () => {
  try {
    const res = await axios.get("http://razzoquz.pythonanywhere.com/files/2/");
    console.log(res.data);
    image.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  store.getAllProducts();
  store.getCategory();
  getImage();
});
</script>

<template>
  <q-page>
    <div>
      <!-- <Suspense>
        <carusel :carusel="caruselData" />
      </Suspense> -->
      <q-img
        :src="image.audio"
        :ratio="4 / 3"
        loading="lazy"
        spinner-color="white"
        style="width: 100%; height: 70vh"
      >
        <div class="absolute-full">
          <div class="container text-center">
            <div class="content">
              <div class="content-title text-h2">
                Lorem ipsum dolor sit amet
              </div>
              <div class="content-subtitle text-subtitle1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                fugiat suscipit, adipisci repudiandae minima optio commodi
                iusto. Deserunt, ex sunt.
              </div>
            </div>
          </div>
        </div>
      </q-img>
      <div class="title q-ma-md">Sizga kerakli</div>

      <Suspense>
        <cards class="" :products="store.releatedProducts" />
      </Suspense>
    </div>
  </q-page>
</template>
