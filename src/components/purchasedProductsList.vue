<script setup>
import { toRefs } from "vue";
import { useApiStore } from "src/stores";
import buttonGroup from "./buttonGroup.vue";
const store = useApiStore();
const props = defineProps({
  products: Array,
  isDisable: Boolean,
});
const { products, isDisable } = toRefs(props);
</script>

<template>
  <div class="list">
    <div class="title">Buyurtmalar</div>
    <div
      class="list__item"
      v-for="(product, index) in products"
      :key="product.id"
    >
      <div class="wrapper">
        <div class="list__img row justify-center items-center" v-if="product">
          <div v-if="product.images">
            <img
              :src="product.images[0]?.image_link"
              alt=""
              width="50"
              height="50"
            />
          </div>

          <img
            :src="product.image_link"
            alt=""
            width="50"
            height="50"
            v-else-if="product.image_link"
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
      </div>
      <div class="wrapper spacer">
        <div>{{ Math.floor(product.price * product.quantity) }} So'm</div>

        <div
          v-if="!isDisable"
          class="list__quantity row justify-between items-center content-center wrap"
        >
          <button-group :product="product" />
        </div>
        <div class="button" v-if="!isDisable">
          <q-icon
            name="cancel"
            size="sm"
            color="red"
            @click="store.deleteProduct(product, index)"
          />
        </div>
        <div class="ifDisable q-mr-xl" v-else>
          {{ product.quantity }} {{ product.size }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list {
  background-color: #fff;
}
.wrapper {
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list__img {
  width: 50px;
  height: 50px;
}

.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 0.5px gray solid;
}
.list__label {
  width: 25%;
  text-align: center;
}
/* .list__quantity {
  width: 20%;
} */
.item-count {
  width: 80px;
  text-align: center;
}
.button {
  cursor: pointer;
}
.btn-disable {
  cursor: not-allowed;
}
@media (max-width: 600px) {
  .spacer {
    margin-top: 40px;
  }
}
</style>
