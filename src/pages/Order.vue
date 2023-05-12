<script setup>
import purchasedProductsList from "src/components/purchasedProductsList.vue";
import inputsForRegister from "src/components/inputsForRegister.vue";
import { onMounted, ref } from "vue";
import { useApiStore } from "src/stores";
import axios from "axios";
const store = useApiStore();
let alert = ref(false);

const replaceLocation = () => {
  location.replace("/");
};
onMounted(() => {
  if (!store.purchasedProducts.length) {
    alert.value = true;
  }
});
</script>

<template>
  <div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Xatolik</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Xatolik yuz berdi!!! Iltimos buyurtma vaqtida sahifani yangilamang...
          <br />
          <div class="text-subtitle2 text-alert">Bosh sahifaga qaytiladi!</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="replaceLocation" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <div class="wrapper" v-if="store.purchasedProducts.length">
    <inputs-for-register />
    <purchased-products-list
      class="q-my-md"
      :products="store.purchasedProducts"
      :isDisable="false"
    />
  </div>
</template>
<style scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>
