<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useApiStore } from "src/stores";
import card from "src/components/card.vue";
let store = useApiStore();
let route = useRoute();
let alert1 = ref(false)
  let userId = localStorage.getItem('userId')

const clearStorage = ()=>{
    localStorage.removeItem('userId')
    location.reload()
    alert1.value = false
  }
onMounted(() => {
  store.getProducts(route.params.id);

  if(userId){
      alert1.value = true
    }
  
  
});

watch(
  () => route.params.id,
  (route) =>
    (route =
      route <= store.categories.length ? store.getProducts(route) : route)
);
</script>

<template>
  <q-page>
    <div>
      detail
      {{ route.params.id }}
      <q-dialog v-model="alert1" >
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
          <q-btn flat label="Yangi etish" color="primary" @click="clearStorage()" />
          <q-btn flat label="davom" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      <Suspense>
        <card :products="store.products" v-if="store.products.length" />
      </Suspense>
    </div>
  </q-page>
</template>
