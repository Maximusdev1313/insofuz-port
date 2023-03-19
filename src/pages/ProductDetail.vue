<script setup>
import { ref } from 'vue'

const product = ref({
  name: 'Product Name',
  price: '$99.99',
  images: [
    'icons/packing.gif',
    'icons/route.gif'
  ],
  description: 'Product description goes here'
})

const quantity = ref(1)
const slide = ref(1)

function addToCart() {
  // handle add to cart
}
</script>
<template>
  <q-page>
    <q-card>
      <img src="icons/packing.gif" alt="">

      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">{{ product.price }}</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        {{ product.description }}
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="row items-center">
          <div class="col-4">Quantity:</div>
          <div class="col-8">
            <q-input v-model.number="quantity" type="number" min="1" />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color/>
        </q-card-actions>
        </q-card>
        </q-page>
</template>