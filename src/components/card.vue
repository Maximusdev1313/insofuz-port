<script setup>
import { toRefs } from "vue";
import { useApiStore } from "src/stores";
import buttonGroup from "./buttonGroup.vue";
const store = useApiStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = toRefs(props);
</script>

<template>
  <div class="card shadow-up-3 q-ma-md  column justify-between items-center" v-if="product">
    <div class="discount">
      <div
        v-if="product.discount"
        class="row justify-between items-center q-mt-sm text-red text-weight-bold"
      >
        <div class="discount__title">Chegirma</div>
        <div class="discount__percent">{{ product.discount }} %</div>
      </div>
    </div>
    <div class="card__img ">
      <p v-if="product.images[0]?.image">rasm</p>
        <q-img :src="product.images[0]?.image_link" :alt="product.name" class="img" :ratio="4/3" v-else />
      <!-- <router-link :to="'/product/' + product.id"> -->
        <!-- <img
          :src="product.images[0]?.image"
          :alt="product.name"

        /> -->
      <!-- </router-link> -->
      <!-- <div class="card__img_have-not"></div> -->
    </div>
    <div class="text-subtitle1 q-pa-md text-weight-thin text-uppercase">
      {{ product.name }}
    </div>
    <div class="card__price row justify-between text-weight-bold">
      <div class="card__price_old text-grey">
        <del v-if="product.old_price">{{ product.old_price }} so'm</del>
      </div>
      <div class="card__price_new text-red">{{ product.price }} so'm</div>
    </div>
    <div
      class="counter row justify-between items-center"
      v-if="product.quantity > 0"
    >
      <button-group :product="product"/>
    </div>
    <div class="counter text-center text-grey" v-else>
      Buyurtma berilmagan...
    </div>

    <div class="card__button">
      <q-btn
        class="card__button_add full-width q-my-sm"
        icon="shopping_cart"
        color="accent"
        @click="
          store.addPurchasedProducts(product, store.incrementAmount(product))
        "
      >

        Sotib olish
      </q-btn>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 250px;
  border-radius: 10px;
  background-color: #ffff;
}
.discount {
  width: 90%;
  height: 25px;
  margin-bottom: 20px;
}

.img, .card__img.img {
 width: 200px;
  height: 200px;
  border-radius: 15px;
}

.card__price {
  width: 90%;
}
.card__button {
  width: 90%;
}
.counter {
  width: 90%;
  height: 26px;
  margin-top: 16px;
}
@media (max-width: 600px){
    .card{
      width: 47%;
      margin: 0;
    }
    .img{
      width: 150px;
    }
    .card__button{
      margin-top: 10px;
    }
    .card__price{
      display: flex;
      flex-direction: column;
    }
}

</style>
