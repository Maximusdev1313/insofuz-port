<script setup>
import { useApiStore } from "src/stores";
import { toRefs, ref } from "vue";
const store = useApiStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = toRefs(props);
const item = ref("gramm");
// const lastAmount = ref(store.amount)
const onItemClick = (event) => {
  store.incrementAmount(product.value, event.size);
  item.value = event.name;
};
const gramms = [
  { size: 0, name: "Grammni olib tashlash" },
  { size: 0.1, name: "100 gramm" },
  { size: 0.2, name: "200 gramm" },
  { size: 0.3, name: "300 gramm" },
  { size: 0.4, name: "400 gramm" },
  { size: 0.5, name: "500 gramm" },
  { size: 0.6, name: "600 gramm" },
  { size: 0.7, name: "700 gramm" },
  { size: 0.8, name: "800 gramm" },
  { size: 0.9, name: "900 gramm" },
];
</script>

<template>
  <q-btn-group rounded class="full-width flex justify-between">
    <q-btn
      rounded
      size="sm"
      label="+"
      @click="store.incrementAmount(product)"
    />
    <div class="item-count">
      {{ product.quantity }}
      {{ product.size == "Kg" ? "kg" : "Dona" }}
    </div>

    <q-btn
      rounded
      :class="product.quantity > 1 ? 'button' : 'btn-disable'"
      size="sm"
      label="-"
      @click="store.decrementAmount(product)"
    />
  </q-btn-group>
  <q-btn-dropdown
    v-if="product.size == 'Kg'"
    size="sm"
    class="q-mt-sm full-width text-black"
    color="white"
    :label="item"
    dropdown-icon="add"
    rounded
  >
    <q-list v-for="gramm in gramms" :key="gramm">
      <q-item clickable v-close-popup @click="onItemClick(gramm)">
        <q-item-section>
          <q-item-label>{{ gramm.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
