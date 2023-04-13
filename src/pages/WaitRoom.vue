<script setup>
import { useApiStore } from "src/stores";
import { onMounted, ref } from "vue";
import axios from "axios";
import Pusher from "pusher-js";
import googleMaps from 'src/components/googleMaps.vue'
import cardForStatus from 'src/components/cardForStatus.vue'
import purchasedProductsList from 'src/components/purchasedProductsList.vue'
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
    
    // userInfo.value = [...simpleCategory]
    console.log(user.value,'user');
  } catch (error) {
    // location.reload()
    console.log(error);
  }
};
const isToday = date => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

const lastTime = ref();
const lastDayId = ref()
const getDateFromReportApi = async () => {
    // Get data from API
    const response = await axios.get('http://insofuzlast.pythonanywhere.com/report-by-day/');
    // Get the last day from the data
    let lastDay = response.data.slice(-1)[0];
    // get id from last day
    lastDayId.value = lastDay.id
    // Create a new Date object from lastTime 
    lastTime.value = new Date(lastDay.time);
    // Check if the date is today
    isToday(lastTime.value)
    console.log(lastDayId.value);
    console.log(isToday(lastTime.value));
}

const postProductsToReportApi = async () => {
  try {
      for (let product of products.value) {
        const response = await axios.post('http://insofuzlast.pythonanywhere.com/report-by-product//',{
            product_name: product.name,
            product_price: product.price,
            product_quantity: product.quantity,
            product_total_price: product.total_price,
            products: lastDayId.value
        })
        
        console.log(response.data);
      }
      

    } catch (err) {
      console.log(err);
    }
}
// add products report api
const addProductsToReportPage = async () =>{
   await getDateFromReportApi()
    console.log(products.value);
  if(isToday(lastTime.value)){
    postProductsToReportApi()
  }
  else{

  }
}
onMounted(() => {
  getUserData(userId);
  
  
});
</script>
<template>
  <div class="wrapper">
    <q-btn @click="addProductsToReportPage()">bos</q-btn>
    <div class="title text-grey text-weight-bold text-h6 text-center">Buyurtmangiz</div>
    <card-for-status />
        <!-- <google-maps/> -->
    <purchased-products-list :products="products" :isDisable="true"/>
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