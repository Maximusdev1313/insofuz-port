<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useApiStore } from "src/stores";
import cards from "src/components/cards.vue";
let store = useApiStore();
let route = useRoute();
let alert1 = ref(false);
let userId = sessionStorage.getItem("userId");

// removes older product from user orders
const clearOlderProducts = () => {
  store.purchasedProducts.splice(0, store.purchasedProducts.length);
  store.amount = null;
};
// removed user-id and reload page
const clearStorage = () => {
  sessionStorage.removeItem("ordered");
  clearOlderProducts();
  alert1.value = false;
};
onMounted(() => {
  store.getProducts(route.params.id);
  // if user come from order page
  // if (userId) {
  //   alert1.value = true;
  // }
});

watch(
  () => route.params.id,
  (route) => (route = store.getProducts(route))
);
</script>

<template>
  <q-page>
    <div>
      <q-dialog v-model="alert1">
        <q-card>
          <q-card-section>
            <div class="text-h6">Nimadur</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Yangi etish"
              color="primary"
              @click="clearStorage()"
            />
            <q-btn flat label="davom" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <Suspense>
        <cards :products="store.products" v-if="store.products.length" />
      </Suspense>
    </div>
  </q-page>
</template>
