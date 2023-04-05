<script setup>
import { ref } from "vue";
import { useApiStore } from "src/stores";
import axios from "axios";
const store = useApiStore();
let categoryName = ref("");

let categoryImg = ref("");
let idForCategory = ref('')

let urlForCategory = "http://insofuzlast.pythonanywhere.com/category/";
let urlForImages = "http://insofuzlast.pythonanywhere.com/category-images/";

const postCategoryName = async () => {
  store.setupId(idForCategory, 'idForCategory')
  try {
    const response = await axios.post(urlForCategory, {
      id: idForCategory.value,
      category_name: categoryName.value,
    });
    console.log(response.data);
  } 
  catch (error) {
    console.error(error.message);
  }
  console.log(idForCategory.value);
};
const postCategoryImages = async () => {
  try {
    const response = await axios.post(urlForImages, {
      images: idForCategory.value,
      image_link: categoryImg.value,
      title: categoryName.value,
    });
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
