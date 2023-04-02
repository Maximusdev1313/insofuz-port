<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useApiStore } from "src/stores";
const store = useApiStore()
const route = useRoute();
let options = ["Erkaklar", "Ayollar"];
let productName = ref("");
let discription = ref("");
let gender = ref("");
let price = ref("");
let oldPrice = ref("");
let imageLink = ref("");
let isImportant = ref(false);
let discountPersent = ref("");
console.log(store.generateSpecialId()
);
const getDiscountPersent = () => {
  if (oldPrice.value) {
    let persent = oldPrice.value / 100;

    let residue = oldPrice.value - price.value;
    discountPersent.value = Math.round(residue / persent) ;
    console.log(discountPersent.value);
  }
};
let urlForProducts = "http://insofuzlast.pythonanywhere.com/product/";
let urlForImages = "http://insofuzlast.pythonanywhere.com/product-images/";
const postProducts = async () => {
  getDiscountPersent();
  try {
    const response = await axios.post(urlForProducts, {
      id: store.generateSpecialId(),
      product: route.params.id,
      name: productName.value,
      discription: discription.value,
      gender: gender.value,
      price: price.value,
      old_price: oldPrice.value,
      discount: discountPersent.value,
      is_important: isImportant.value,
    });
    console.log(response.data);
    postImages()
  } catch (error) {
    console.error(error.message);
  }
};
const postImages = async () => {
  console.log(store.specialId);
  try {
    const response = await axios.post(urlForImages, {
      images: store.specialId,
      title: productName.value,
      image_link: imageLink.value
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};
</script> 
<template>
  <div class="title text-center">Mahsulotlarni Kiritish</div>
  <div class="row jsutify-between">
    <q-form @submit.prevent="postProducts" class="forms q-gutter-md q-ma-md">
      <q-input v-model="productName" filled label="Mahsulot nomi" />
      <q-input
        v-model="discription"
        autogrow
        filled
        hint="Mahsulot uchun qo'shimcha (discription)"
      />
      <q-select
        filled
        v-model="gender"
        :options="options"
        label="Kim uchun(Erkaklar/Ayollar)"
        stack-label
      />
      <q-input v-model="price" filled label="Chegirma narxi" />
      <q-input v-model="oldPrice" filled label="Narxi" />
      <q-input v-model="imageLink" filled label="Rasm uchun link" />
      <q-checkbox v-model="isImportant" label="Muhim maxsulot" />

      <div class="text-center">
        <q-btn type="submit" label="Kirish" color="primary" />
      </div>
    </q-form>
    <div class="products"></div>
  </div>
</template>
