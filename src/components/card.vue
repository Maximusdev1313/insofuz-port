<script setup>
import { useApiStore } from 'src/stores';
import { ref, toRefs } from 'vue';
const store = useApiStore()
const props = defineProps({
  products: Array,
 
});
const { products } = toRefs(props);
// store.getCategory()
let slide = ref(1)
</script>

<template>
  <div class="container">
    <div class="wrapper row justify-around items-left wrap">
      <div class="card shadow-up-5 q-ma-md column justify-center items-center" v-for="(product,index) in products" :key="index">
        <div
          class="discount "
          
        >
        <div v-if="product.discount" class="row justify-between items-center q-mt-sm  text-red text-weight-bold">
          <div class="discount__title">Discount</div>
          <div class="discount__percent">{{ product.discount }} %</div>
        </div>
          
        </div>
        <div class="card__img row justify-center" >
          <router-link :to="'/product/' + product.id" >
            <img :src="product.images[0]?.image " :alt="product.name" v-if="product.images[0]?.image">            
            <img :src="product.images[0]?.image_link " :alt="product.name" v-else>            

          </router-link>
          <!-- <div class="card__img_have-not"></div> -->
        </div>
        <div class="text-subtitle1 q-pa-md text-weight-thin text-uppercase ">{{ product.name }}</div>
        <div class="card__price row justify-between text-weight-bold">
          <div class="card__price_old text-grey" > <del v-if="product.old_price">{{ product.old_price }} so'm</del> </div>
          <div class="card__price_new text-red">{{product.price}} so'm</div>
        </div>
        <div class="counter row justify-between items-center " v-if="product.quantity > 0">
          <div >
            Soni: {{ product.quantity }}

          </div>
          <q-btn-group rounded class="button-group" >
            <q-btn rounded size="sm" label="+"  @click="store.incrementAmount(product)"/>
            <q-btn rounded size="sm" label="-" @click="store.decrementAmount(product)" v-if="product.quantity > 1"/>
            
            <q-btn label="-" rounded size="sm" disable v-else/>
          </q-btn-group>
        </div>
        <div class="counter text-center text-grey" v-else>
          Buyurtma berilmagan...
        </div>
        

        <div class="card__button " >
            <q-btn
              class="card__button_add full-width q-my-md"
              icon="shopping_cart"
              color="accent"
              @click="store.addPurchasedProducts(product, store.incrementAmount(product))">
                <q-tooltip class="bg-accent">Buy</q-tooltip>
                Buy now
            </q-btn>
           
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
.wrapper {
  width: 100%;
}
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


img, .card__img{
  width: 200px;
  height: 200px;
  border-radius: 15px;
}

.card__price{
    width: 90%;
}
.card__button{
    width: 90%;
}
.counter{
  width: 90%;
  height: 26px;
  margin-top: 16px;
}
</style>
