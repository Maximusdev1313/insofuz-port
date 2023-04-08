<script setup>
import { useRouter } from "vue-router";
import { useApiStore } from "src/stores";
import { ref } from "vue";
import axios from "axios";
const store = useApiStore();
const router = useRouter();
let userName = ref("");
let phoneNumber = ref("");
let address = ref("");
let comment = ref("");
let userId = ref('')
let notChecked = ref(false);
// set user-id if not in localstorage
userId.value = localStorage.getItem('userId')
let order = async () => {
    store.getLocation();

    store.setupId(userId, `userId`);
    userId.value  = localStorage.getItem('userId')

    try {
      const response = await axios.post("http://insofuzlast.pythonanywhere.com/user/",{
        id: userId.value,
          userName: userName.value,
          phoneNumber: phoneNumber.value,
          address: address.value,
          location: store.userPosition,
          comment: comment.value,
          total: store.amount,
      })
      console.log(response.data);
      console.log(store.userPosition);
      console.log(store.purchasedProducts);
      notChecked.value = false;
    } catch (error) {
      console.log(error);
    }
   
};
console.log(store.purchasedProducts);
const addProducts = async () => {
  if (userId.value) {
    try {
      for (let product of store.purchasedProducts) {
        let total = product.price * product.quantity;
        const response = await axios.post('http://insofuzlast.pythonanywhere.com/orders/',{
            orderForUser: userId.value,
            image_link: product.images[0].image_link,
            name: product.name,
            quantity: product.quantity,
            size: product.size,
            gender: product.gender,
            price: product.price,
            total_price: total,
        })
        console.log(product.images[0].image_link,'images');
      }
    

    } catch (err) {
      console.log(err.massage);
      addProducts();
    }
    router.push({ name: "user", params: { id: userId.value } });
  } else {
    notChecked.value = true;
    console.log(store.userId);
    console.log("true");
  }
};
console.log(store.purchasedProducts);

</script>
<template>
  <div class="user-info q-my-xl q-pa-md">
    <div class="title ">Ma'lumotlaringiz</div>
    <q-input v-model="userName" label="Ismingiz" />
    <q-input v-model="phoneNumber" label="Raqamingiz" />
    <q-input v-model="address" label="Manzilingiz" />
    <q-input type="textarea" v-model="comment" label="Kamentariy berish" />
    <div class="q-my-md">
      <q-btn
        @click="order()"
        :color="notChecked == true ? 'red' : 'primary'"
        icon="location_on"
        class="q-mr-md"
      >
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
