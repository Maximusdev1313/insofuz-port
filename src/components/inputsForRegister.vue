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
let userId = ref("");
let notChecked = ref(false);
let userLocation = ref("");
const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};
// https://www.google.com/maps/dir/40.3249139,71.8255356/40.322472,71.827721/@40.322908,71.8266037,17z/
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          userLocation.value = `https://maps.google.com/maps/dir/40.318214,71.833028/${position.coords.latitude},${position.coords.longitude}/@40.318231,71.833045.17z`;
          resolve(userLocation.value);
        },
        function (error) {
          console.error(error);
          reject(error);
        },
        options
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }
  });
};

// set user-id if not in sessionStorage
userId.value = sessionStorage.getItem("userId");
let order = async () => {
  await getUserLocation();
  store.setupId(userId, `userId`);
  userId.value = sessionStorage.getItem("userId");

  try {
    const response = await axios.post(
      "http://razzoquz.pythonanywhere.com/user/",
      {
        id: userId.value,
        user: 1, // vaqtinchalik avvalni belgilab beradi
        userName: userName.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        location: userLocation.value,
        comment: comment.value,
        total: store.amount,
      }
    );
  } catch (error) {
    console.log("Foydalanuvchi malumotlari yuborilmadi");
    alert(
      "Foydalanuvchi malumotlari yuborilmadi Iltimos qayta buyurtma bering"
    );
  }
};
const addProducts = async () => {
  if (userId.value) {
    try {
      for (let product of store.purchasedProducts) {
        let total = product.price * product.quantity;

        const response = await axios.post(
          "http://razzoquz.pythonanywhere.com/orders/",
          {
            orderForUser: userId.value,
            image_link: product.images[0].image_link,
            name: product.name,
            quantity: product.quantity,
            size: product.size,
            price: product.price,
            entry_price: product.entry_price,
            total_price: total,
          }
        );
      }
      router.push({ name: "user", params: { id: userId.value } });
    } catch (err) {
      console.log("Xatolik, mahsulotlarni yuborib bo'lmadi");
      console.log(err);
      alert(
        "Xatolik, mahsulotlarni yuborib bo'lmadi! \n Iltimos aloqani tekshirib qayta urunib ko'ring yoki biz bilan bog'laning"
      );
      // addProducts();
    }
    sessionStorage.setItem("ordered", true);
  } else {
  }
};
const patchingProductQuantity = async () => {
  try {
    for (let product of store.purchasedProducts) {
      const response = await axios.patch(
        `http://razzoquz.pythonanywhere.com/product/${product.id}/`,
        {
          quantity_in_store: product.quantity_in_store - product.quantity,
        }
      );
    }
  } catch (error) {
    console.log("Xatolik");
  }
};

const checkOrders = sessionStorage.getItem("ordered");
const giveOrder = async () => {
  if (!userName.value || !phoneNumber.value) {
    alert("Iltimos majburiy maydonlarni kiriting!!!");
    return;
  }
  notChecked.value = true;

  // if (!checkOrders) {
  // await getUserLocation();
  await order();
  await patchingProductQuantity();

  await addProducts();
  notChecked.value = false;

  // } else {
  //   await getUserLocation();
  //   await patchingProductQuantity();
  //   await addProducts();
  // // }
};
</script>
<template>
  <div class="user-info q-my-xl q-pa-md">
    <div class="title">Ma'lumotlaringiz</div>
    <q-form>
      <q-input
        v-model="userName"
        type="text"
        name="fname"
        id="fname"
        label="Ismingiz"
        :rules="[(val) => !!val || 'Majburiy maydon']"
      />
      <q-input
        v-model="phoneNumber"
        type="tel"
        id="tel"
        name="phone"
        mask="(##) ### - ## - ##"
        label="Raqamingiz"
        fill-mask
        :rules="[(val) => !!val || 'Majburiy maydon']"
      />
      <q-input
        v-model="address"
        type="text"
        name="address"
        id="address"
        label="Manzilingiz"
      />
      <q-input
        type="textarea"
        v-model="comment"
        name="comment"
        label="Kamentariy berish"
      />
      <div class="q-my-md">
        <!-- <q-btn
        @click="order()"
        :color="notChecked == true ? 'red' : 'primary'"
        icon="location_on"
        class="q-mr-md"
      >
        locatsiya
        <q-tooltip class="bg-accent"
          >Iltimos locatsiyani olish tugmasini bosing</q-tooltip
        >
      </q-btn> -->
        <q-btn @click="giveOrder()" color="accent" :loading="notChecked">
          Buyurtma Berish
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<style scoped>
.user-info {
  background-color: #fff;
}
</style>
