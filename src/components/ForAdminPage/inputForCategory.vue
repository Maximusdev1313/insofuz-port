<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";
import axios from "axios";
const store = useApiStore();
let categoryName = ref("");

let categoryImg = ref("");
let specialId = Date.now() + Math.floor(Math.random() * 10000);
store.userId = specialId;
let urlForCategory = "http://insofuzlast.pythonanywhere.com/category/";
let urlForImages = "http://insofuzlast.pythonanywhere.com/category-images/";
const postCategoryName = async () => {
  try {
    const response = await axios.post(urlForCategory, {
      id: store.userId,
      category_name: categoryName.value,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};
const postCategoryImages = async () => {
  try {
    const response = await axios.post(urlForImages, {
      images: store.userId,
      image_link: categoryImg.value,
      title: categoryName.value,
    });
    store.userId = "";
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

const postAllData = () => {
  postCategoryName();
  postCategoryImages();
  store.getCategory();
};
// last qismini qilish
// ikkimchi rasmni qo'shish uchun joy
// yangi page ochish va productlarni qo'shish category id bo'yicha ochiladi
</script>
<template>
  <div class="forms">
    <div class="title">Kategoriyani kiriting</div>
    <q-form @submit.prevent="postAllData" class="q-gutter-md q-mt-md">
      <q-input v-model="categoryName" filled hint="Kategoriya nomi" />
      <q-input v-model="categoryImg" filled hint="Rasm uchun link" />

      <div class="text-center">
        <q-btn type="submit" label="Kirish" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<style >
.forms {
  width: 500px;
}
</style>
