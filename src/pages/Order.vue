<script setup>
import purchasedProductsList from "src/components/purchasedProductsList.vue";
import inputsForRegister from "src/components/inputsForRegister.vue";
import { onMounted, ref } from "vue";
import { useApiStore } from "src/stores";
import axios from "axios";
const store = useApiStore();
let alert = ref(false);


onMounted(() => {
  if (!store.purchasedProducts.length) {
    alert.value = true;
    setTimeout(() => {
      location.replace("/");
    }, 6000);
  }
  
});
</script>

<template>
  <div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
  </div>
  <div class="wrapper" v-if="store.purchasedProducts.length">
    <inputs-for-register />
    <purchased-products-list class="q-my-md" :products="store.purchasedProducts" :isDisable="false"/>
  </div>
</template>
<style scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>
