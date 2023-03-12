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
      <div class="card shadow-up-5 q-ma-md column justify-center items-center" v-for="(card,index) in products" :key="index">
        <div
          class="discount "
          
        >
        <div v-if="card.chegirma_foizi" class="row justify-between items-center q-mt-sm  text-red text-weight-bold">
          <div class="discount__title">Discount</div>
          <div class="discount__percent">{{ card.chegirma_foizi }} %</div>
        </div>
          
        </div>
        <div class="card__img row justify-center" >
          <router-link to="/">
            <img :src="card.rasmlari[0].link " :alt="card.rasmlari[0].title" v-if="card.rasmlari[0].link">            

          </router-link>
          <!-- <div class="card__img_have-not"></div> -->
        </div>
        <div class="card__title text-h6 text-weight-bold text-uppercase text-grey">{{ card.nomi }}</div>
        <div class="card__price row justify-between text-weight-bold">
          <div class="card__price_old text-grey" > <del v-if="card.eski_narx">{{ card.eski_narx }} so'm</del> </div>
          <div class="card__price_new text-red">{{card.narx}} so'm</div>
        </div>
        <div class="counter row justify-between items-center q-mt-md">
          <div>
            Soni: {{ card.soni }}

          </div>
          <q-btn-group rounded class="button-group" >
            <q-btn rounded size="sm" label="+"  @click="store.incrementAmount(card)"/>
            <q-btn rounded size="sm" label="-"  />
          </q-btn-group>
        </div>
        

        <div class="card__button " >
            <q-btn
              class="full-width q-my-md"
              icon="shopping_cart"
              color="accent"
              @click="store.addPurchasedProducts(card, store.incrementAmount(card))">
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
}
</style>
