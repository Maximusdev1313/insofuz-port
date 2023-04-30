<script setup>
import { toRefs } from "vue";
import { useApiStore } from "src/stores";
const store = useApiStore();
const props = defineProps({
  products: Array,
  isDisable: Boolean
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
    <div class="wrapper ">
      <div class="list__img row justify-center items-center" v-if="product.images.length >= 1">
        <img
          :src="product.images[0].image_link"
          alt=""
          width="50"
          height="50"
          v-if="product.images"
        />
        <img
          :src="product.image_link"
          alt=""
          width="50"
          height="50"
          v-else
        />
        
      </div>
      <q-icon name="image" size="xl" v-else></q-icon>


      <div class="list__label">{{ product.name }}</div>
      <div class="list__size" v-if="product.size">
        {{ product.size }}
      </div>
      <div class="list__price" >
        <div class="list__price_discount text-red" v-if="product.old_price">
          <del> {{ product.old_price }} So'm </del>
        </div>
        <div class="list__price_no-discount">{{ product.price }} So'm</div>
      </div>
    </div>
      <div class="wrapper spacer">
              <div>
        {{ product.price * product.quantity }} So'm
      </div>

      
      <div
        v-if="!isDisable"
        class="list__quantity row justify-between items-center content-center wrap"
      >
        <q-btn-group rounded class="button-group">
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
        {{ product.quantity }} ta
      </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.wrapper{
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
  .spacer{
    margin-top: 40px;
  }
}
</style>
