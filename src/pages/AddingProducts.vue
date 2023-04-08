<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useApiStore } from "src/stores";
import cards from "src/components/cards.vue";
import alertDialog from "src/components/alertDialog.vue";

const store = useApiStore();
const route = useRoute();
let options = ["Erkaklar", "Ayollar"];
let productName = ref("");
let discription = ref("");
let gender = ref("");
let price = ref("");
let oldPrice = ref("");
let imageLink = ref("");
let isImportant = ref(false);
let discountPercent = ref("");
let imgBtn = ref(false);
let productId = ref("");

store.getProducts(route.params.id);
const getDiscountPercent = () => {
  if (oldPrice.value) {
    const percent = ((oldPrice.value - price.value) / oldPrice.value) * 100;
    discountPercent.value = Math.round(percent);
    console.log(discountPercent.value);
  }
};
let urlForProducts = "http://insofuzlast.pythonanywhere.com/product/";
let urlForImages = "http://insofuzlast.pythonanywhere.com/product-images/";
const postProducts = async () => {
  getDiscountPercent();
  store.setupId(productId, "productId");
  console.log(productId.value);
  try {
    const response = await axios.post(urlForProducts, {
      id: productId.value,
      product: route.params.id,
      name: productName.value,
      discription: discription.value,
      gender: gender.value,
      price: price.value,
      old_price: oldPrice.value,
      discount: discountPercent.value,
      is_important: isImportant.value,
    });
    console.log(response.data);
    imgBtn.value = true;
    postImages();
    store.getProducts(route.params.id);
    emptyInputs();
    store.isDone();
  } catch (error) {
    console.error(error.message);
    store.alert = true;
  }
};
const postImages = async () => {
  if (!productId.value) {
    productId.value = localStorage.getItem("productId");
  }
  try {
    const response = await axios.post(urlForImages, {
      images: productId.value,
      title: productName.value,
      image_link: imageLink.value,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
    store.alert = true;
  }
};
const emptyInputs = () => {
  discription.value = "";
  gender.value = "";
  price.value = "";
  oldPrice.value = "";
  imageLink.value = "";
  isImportant.value = false;
  discountPercent.value = "";
};
</script>
<template>
  <alert-dialog />
  <div class="title text-center">
    Mahsulotlarni Kiritish: {{ store.category.category_name }}
  </div>
  <div class="column">
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

      <div class="row justify-between">
        <div>
          <q-btn
            @click="postImages"
            label="Rasm qo'shish"
            icon-right="library_add"
            class="q-mr-sm"
            v-if="imgBtn"
          />
        </div>

        <q-btn
          type="submit"
          label="Mahsulot qo'shish"
          :icon="store.done ? 'done' : ''"
          color="primary"
        >
          <!-- <q-icon name="done" ></q-icon> -->
        </q-btn>
      </div>
    </q-form>
    <div class="products">
      <cards :products="store.products" />
    </div>
  </div>
</template>
