<script setup>
import { useApiStore } from "src/stores";
import { onMounted, ref } from "vue";
import axios from "axios";
import Pusher from "pusher-js";
import googleMaps from 'src/components/googleMaps.vue'
import cardForStatus from 'src/components/cardForStatus.vue'

Pusher.logToConsole = false;

var pusher = new Pusher("1050f4fd4d96cb76281e", {
  cluster: "ap2",
});

var channel = pusher.subscribe("my-channel");
channel.bind("getUserData", function (data) {
  app.userInfo.push(JSON.stringify(data));
});

const store = useApiStore();
let user = ref([]);
let products = ref("");
let userId = localStorage.getItem("userId");
let status = ref('')
let getUserData = async (id) => {
  try {
    let apiData = await axios.get(`http://insofuzlast.pythonanywhere.com/user/${id}/`);
    user.value = apiData.data;
    status.value = user.value.ready
    products.value = user.value.orderForUser;
    console.log(status.value);

    // userInfo.value = [...simpleCategory]
    // console.log(userInfo.value,'user');
  } catch (error) {
    // location.reload()
    console.log(error);
  }
};
onMounted(() => {
  // setInterval(() => {
  getUserData(userId);

  // }, 5000);
});
</script>
<template>
  <div class="wrapper">
    <div class="title text-grey text-weight-bold text-h6 text-center">Buyurtmangiz</div>

    <card-for-status :status-title="'Qadoqlanmoqda'" :icon-link="'icons/packing.gif'" v-if="!status || status == 'packing'"/>
    <card-for-status :status-title="'Yetkazib berilmoqda'" :icon-link="'icons/route.gif'" />
        <!-- <google-maps/> -->
    <div class="list ">
     <q-list padding bordered>
      <q-item-label header>Buyurtma berilgan tovarlar</q-item-label>
      <q-item v-for="product in products" :key="product">
        
        <q-item-section>

          <q-item-label>{{ product.product_name }}</q-item-label>
          <q-item-label caption lines="2">Narxi: {{ product.price }} so'm &bull;
              Soni: {{ product.quantity }} ta   &bull; 
             Umumiy narx: {{ product.total_price }} so'm</q-item-label>
             
        </q-item-section>

      
      </q-item>

      </q-list> 
    </div>
  </div>
</template>
<style scoped>
.wrapper{
  width: 100%;
}

.list{
  width: 90%;
  margin: 20px auto;
}

</style>