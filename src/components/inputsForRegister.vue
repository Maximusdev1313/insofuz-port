<script setup>
import {useRouter} from 'vue-router'
import { useApiStore } from 'src/stores'
import {ref} from 'vue'
const store = useApiStore()
const router = useRouter()
let userName = ref('')
let phoneNumber = ref('')
let address = ref('')
let comment = ref('')
let products = store.purchasedProducts
let specialId = Date.now() + Math.floor(Math.random() * 10000)
console.log(specialId);
let notChecked = ref(false)
const addProducts = async () => {
  if(store.userId){
    try{
      for (let product of products) {
        let total =  product.narx * product.soni
        await fetch("http://insofuzlast.pythonanywhere.com/orders/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product_name: product.nomi,
            quantity: product.soni,
            price: product.narx,
            total_price: total,
            orderForUser: store.userId
          }),
        });
      }
    }
    catch(err){
      console.log(err.massage);
    }
    router.push({ name: 'user', params: { id: store.userId } })
  }else{
    notChecked.value = true
    console.log('true');
    }



}
console.log(store.purchasedProducts);
let order = async ()=>{
    store.getLocation()

    localStorage.setItem('userId', specialId)
    store.userId = localStorage.getItem('userId')
    console.log(store.userId,'storeId');
    try {
        await fetch("http://insofuzlast.pythonanywhere.com/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: store.userId,
            userName: userName.value,
            phoneNumber: phoneNumber.value,
            address: address.value,
            location: store.userPosition,
            comment: comment.value,
            total: store.amount
        }),
    });
    notChecked.value = false
  } catch (error) {
    console.log(error.message);
  }

}
</script>
<template>
  <div class="user-info q-my-xl q-pa-md">
    <div class="title text-grey text-weight-bold">Ma'lumotlaringiz</div>
    <q-input v-model="userName" label="Ismingiz" />
    <q-input v-model="phoneNumber" label="Raqamingiz" />
    <q-input v-model="address" label="Manzilingiz" />
    <q-input type="textarea" v-model="comment" label="Kamentariy berish" />
    <div class="q-my-md">
      <q-btn @click="order()" :color="notChecked == true ? 'red' : 'primary'" icon="location_on" class="q-mr-md">
      locatsiya
      <q-tooltip class="bg-accent"
        >Iltimos locatsiyani olish tugmasini bosing</q-tooltip
      >
    </q-btn>
    <q-btn @click="addProducts()">
      <q-tooltip class="bg-accent"
        >Iltimos locatsiyani olish tugmasini bosing</q-tooltip
      >
      Buyurtma Berish
    </q-btn>
    </div>
    
  </div>
</template>

<style scoped>
.user-info {
  background-color: aliceblue;
}
</style>
