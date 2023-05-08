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
// set user-id if not in sessionStorage
userId.value = sessionStorage.getItem("userId");
let order = async () => {
  store.setupId(userId, `userId`);
  userId.value = sessionStorage.getItem("userId");

  try {
    const response = await axios.post(
      "http://insofuzlast.pythonanywhere.com/user/",
      {
        id: userId.value,
        userName: userName.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        // location: store.userPosition,
        comment: comment.value,
        total: store.amount,
      }
    );

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

        const response = await axios.post(
          "http://insofuzlast.pythonanywhere.com/orders/",
          {
            orderForUser: userId.value,
            image_link: product.images[0].image_link,
            name: product.name,
            quantity: product.quantity,
            size: product.size,
            price: product.price,
            total_price: total,
          }
        );
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
      // addProducts();
    }
    sessionStorage.setItem("ordered", true);
    router.push({ name: "user", params: { id: userId.value } });
  } else {
    notChecked.value = true;
  }
};
const patchingProductQuantity = async () => {
  try {
    for (let product of store.purchasedProducts) {
      const response = await axios.patch(
        `http://insofuzlast.pythonanywhere.com/product/${product.id}/`,
        {
          quantity_in_store: product.quantity_in_store - product.quantity,
        }
      );
      console.log(response.data, "pathc");
    }
  } catch (error) {
    console.log(error);
  }
};
console.log(store.purchasedProducts);
const checkOrders = sessionStorage.getItem("ordered");
console.log(checkOrders);
const giveOrder = async () => {
  if (!userName.value || !phoneNumber.value) {
    alert("Iltimos majburiy maydonlarni kiriting!!!");
    return;
  }
  if (!checkOrders) {
    await order();
    await patchingProductQuantity();

    await addProducts();
  } else {
    await patchingProductQuantity();
    await addProducts();
  }
};
</script>
<template>
  <div class="user-info q-my-xl q-pa-md">
    <div class="title">Ma'lumotlaringiz</div>
    <q-input
      v-model="userName"
      type="text"
      name="fname"
      label="Ismingiz"
      :rules="[(val) => !!val || 'Majburiy maydon']"
    />
    <q-input
      v-model="phoneNumber"
      type="tel"
      name="phone"
      mask="(##) ### - ## - ##"
      label="Raqamingiz"
      fill-mask
      :rules="[(val) => !!val || 'Majburiy maydon']"
    />
    <q-input v-model="address" type="text" name="address" label="Manzilingiz" />
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
      <q-btn @click="giveOrder()"> Buyurtma Berish </q-btn>
    </div>
  </div>
</template>

<style scoped>
.user-info {
  background-color: aliceblue;
}
</style>
