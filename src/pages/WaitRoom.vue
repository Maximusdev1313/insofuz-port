<script setup>
import { useApiStore } from "src/stores";
import { onMounted, ref } from "vue";
import axios from "axios";
import Pusher from "pusher-js";
import cardForStatus from "src/components/cardForStatus.vue";
import purchasedProductsList from "src/components/purchasedProductsList.vue";
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
let products = ref();
let userId = sessionStorage.getItem("userId");
let status = ref("");
let getUserData = async (id) => {
  try {
    const response = await axios.get(
      `http://razzoquz.pythonanywhere.com/user/${id}/`
    );
    user.value = response.data;
    status.value = user.value.ready;
    products.value = user.value.orderForUser;

    // userInfo.value = [...simpleCategory]
    console.log(user.value, "user");
  } catch (error) {
    // location.reload()
    console.log("Xatolik, foydalanuvchi malumotlari yoq");
  }
};
let img = ref();
let title = ref("");
setInterval(() => {
  getUserData(userId);
}, 2000);
onMounted(() => {
  getUserData(userId);
});
</script>
<template>
  <div class="wrapper">
    <div class="title text-grey text-weight-bold text-h6 text-center">
      Buyurtmangiz
    </div>
    <card-for-status
      :img="'hourglass_top'"
      :title="'Buyurtmangiz kutish rejimida'"
      v-if="!status && status == 'packed'"
    />
    <card-for-status
      :img="'inventory_2'"
      :title="'Qadoqlanmoqda'"
      v-else-if="status == 'packaging'"
    />

    <card-for-status
      :img="'local_shipping'"
      :title="'Yetkazib berilmoqda'"
      v-else
    />
    <!-- <google-maps/> -->
    <purchased-products-list :products="products" :isDisable="true" />
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
}

.list {
  width: 90%;
  margin: 20px auto;
}
</style>
