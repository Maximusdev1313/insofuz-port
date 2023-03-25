<script setup>
import carusel from "src/components/forIndexPage/carusel.vue";
import cardsForCategory from "src/components/forIndexPage/cardsForCategory.vue";
import { useApiStore } from "src/stores";
import { onBeforeMount, onMounted, ref } from "vue";
const store = useApiStore();
const caruselData = [
  {name: 'first', image: 'src/assets/commerce.png', title: 'first title', subtitle: 'subtitle'},
  {name: 'second', image: 'https://www.theasset.com/storage/Image/2021/May/161996875318980.jpg', title: 'second title', subtitle: 'subtitle'},
  {name: 'third', image: 'https://www.hindipanda.com/wp-content/uploads/2021/09/ecommerce-min.png', title: 'third title', subtitle: 'subtitle'}
]
onBeforeMount(() => {
  store.getAllProducts();
  store.getCategory();
});

let importtantProducts = ref([]);
function filterItems() {
  if (!store.allProducts.length) {
    setTimeout(() => {
      importtantProducts.value = store.allProducts.filter(
        (item) => item.is_important == true
      );
    }, 2000);
  }
}
onMounted(() => {
  filterItems();
});
</script>

<template>
  <q-page>
    <div>
      <carusel :carusel="caruselData"/>
      <Suspense>
        <cards-for-category
          :category="store.limitedCategory"
          :title="'Kategoriyalar'"
        />
      </Suspense>
    </div>
  </q-page>
</template>
