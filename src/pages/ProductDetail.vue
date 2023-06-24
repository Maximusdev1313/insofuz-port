<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import carusel from "src/components/forIndexPage/carusel.vue";
import { useApiStore } from "src/stores";
const store = useApiStore();
const route = useRoute();
let simpleProduct = ref([]);
let size = ref("xs");
let getProduct = async (id) => {
  try {
    let response = await axios.get(
      `http://razzoquz.pythonanywhere.com/product/${id}/`
    );
    simpleProduct.value = response.data;
  } catch (error) {
    // location.reload()
    console.log("xatolik");
  }
};
onMounted(() => {
  getProduct(route.params.id);
  simpleProduct.size = "xs";
});
watch(
  () => size.value,
  (newVal) => {
    simpleProduct.size = newVal;
    console.log(simpleProduct.size);
  }
);
</script>

<template>
  <div class="container">
    <q-breadcrumbs class="breadcrumbs">
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        :label="simpleProduct.name"
        :to="'product' + route.params.id"
      />
    </q-breadcrumbs>
    <div class="wrapper">
      <div>
        <div class="title">
          {{ simpleProduct.name }}
        </div>
        <div class="product__discription">
          {{ simpleProduct.discription }}
        </div>
        <carusel :carusel="simpleProduct.images" class="carusel" />
      </div>

      <div class="product">
        <div class="product__price text-subtitle1">
          <span class="product__price_non-discount text-red">
            {{ simpleProduct.price }} So'm
          </span>
          &bull;
          <span class="product__price_with-discount text-grey">
            <del> {{ simpleProduct.old_price }} So'm </del>
          </span>
        </div>
        <div class="product__gender">
          {{
            simpleProduct.gender == "men" ? "Erkaklar uchun" : "Ayollar uchun"
          }}
        </div>
        <div class="product__size">
          <div class="title q-my-md">O'lchamni tanglang</div>
          <q-btn-toggle
            v-model="size"
            spread
            no-caps
            rounded
            unelevated
            toggle-color="purple"
            color="white"
            text-color="black"
            class="toggle"
            :options="[
              { label: 'XS', value: 'xs' },
              { label: 'S', value: 's' },
              { label: 'M', value: 'm' },
              { label: 'L', value: 'l' },
              { label: 'XL', value: 'xl' },
              { label: 'XXL', value: 'xxl' },
            ]"
          />
        </div>
        <div class="order">
          <div class="order__prices text-subtitle1">
            <div v-if="store.priceWithDiscount">
              <span
                class="order__price_non-discount text-grey"
                v-if="store.priceNonDiscount"
              >
                <del> {{ store.priceNonDiscount }} So'm </del>
              </span>
              &bull;
              <span
                class="order__price_with-discount text-red"
                v-if="store.priceWithDiscount"
              >
                {{ store.priceWithDiscount }} So'm
              </span>
            </div>
          </div>
          <div
            class="list__quantity row justify-between items-center content-center wrap"
          >
            <div class="button-group">
              <q-btn-group rounded spread>
                <q-btn
                  rounded
                  size="sm"
                  label="+"
                  @click="store.incrementAmount(simpleProduct)"
                />

                <div class="item-count">
                  <span v-if="simpleProduct.quantity > 0">
                    {{ simpleProduct.quantity }} ta
                  </span>
                </div>
                <q-btn
                  rounded
                  size="sm"
                  label="-"
                  @click="store.decrementAmount(simpleProduct)"
                />
              </q-btn-group>
              <q-btn
                class="card__button_add full-width q-my-md"
                icon="shopping_cart"
                color="accent"
                @click="
                  store.addPurchasedProducts(
                    simpleProduct,
                    store.incrementAmount(simpleProduct)
                  )
                "
              >
                <q-tooltip class="bg-accent">Buy</q-tooltip>
                Buy now
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 90%;
  margin: 10px auto;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
}
.product__discription {
  max-width: 90%;
}
.product__price {
  max-width: 400px;
  min-width: 200px;
}
.breadcrumbs {
  max-width: 300px;
  min-width: 200px;
  color: grey;
  font-size: 10px;
}
.carusel {
  /* max-width: 500px; */
  width: 500px;
  margin-bottom: 10px;
}
.toggle {
  border: 1px solid #027be3;
}
/* .button-group{
    margin-top: 200px;
} */
.item-count {
  width: 200px;
  text-align: center;
}
.order__prices {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
