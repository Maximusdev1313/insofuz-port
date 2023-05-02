<script setup>
import {useApiStore} from 'src/stores'
import {toRefs} from 'vue'
const store = useApiStore()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = toRefs(props);
</script>

<template>
      <q-btn-group rounded class="full-width flex justify-between">
          <q-btn
            rounded
            size="sm"
            label="+"
            @click="store.incrementAmount(product)"
          />
          <div class="item-count">{{ product.quantity }} ta</div>

          <q-btn
            rounded
            :class="product.quantity > 1 ? 'button' : 'btn-disable'"
            size="sm"
            label="-"
            @click="store.decrementAmount(product)"
          />
        </q-btn-group>
</template>
