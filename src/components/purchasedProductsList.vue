<script setup>
import { useApiStore } from "src/stores";
const store = useApiStore();
</script>

<template>
  <div class="list">
    <div class="title">Buyurtmalar</div>
    <div
      class="list__item"
      v-for="(product, index) in store.purchasedProducts"
      :key="index"
    >
      <div class="list__img row justify-center items-center">
        <img
          :src="product.images[0].image_link"
          alt=""
          width="50"
          height="50"
          v-if="product.images.length"
        />
        <q-icon name="image" size="xl" v-else></q-icon>
      </div>

      <div class="list__label">{{ product.name }}</div>
      <div class="list__price">
        <div class="list__price_discount text-red" v-if="product.old_price">
          <del> {{ product.old_price }} So'm </del>
        </div>
        <div class="list__price_no-discount">{{ product.price }} So'm</div>
      </div>
      <div class="list__size">
        {{ product.size }}
      </div>
      <div
        class="list__quantity row justify-between items-center content-center wrap"
      >
        <div class="item-count">{{ product.quantity }} ta</div>
        <q-btn-group rounded class="button-group">
          <q-btn
            rounded
            size="sm"
            label="+"
            @click="store.incrementAmount(product)"
          />
          <q-btn
            label="-"
            rounded
            size="sm"
            disable
            v-if="product.quantity == 1"
          />

          <q-btn
            rounded
            size="sm"
            label="-"
            @click="store.decrementAmount(product)"
            v-else
          />
        </q-btn-group>
      </div>
      <div class="button">
        <q-icon
          name="cancel"
          size="sm"
          color="red"
          @click="store.deleteProduct(product, index)"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.list__img {
  width: 50px;
  height: 50px;
}

.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px gray solid;
}
.list__label {
  width: 25%;
}
.list__quantity {
  width: 20%;
}
.item-count {
  width: 80px;
  text-align: center;
}
.button {
  cursor: pointer;
}
</style>
