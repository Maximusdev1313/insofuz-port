<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useApiStore } from "src/stores";
import categoryList from 'src/components/ForAdminPage/categoryList.vue'
import inputForCategory from 'src/components/ForAdminPage/inputForCategory.vue'
import categoryListVue from "src/components/ForAdminPage/categoryList.vue";
const store = useApiStore()
const submitForm = () => {
};
store.getCategory()
</script>

<template>
    <div class="text-weight-bolder text-center text-h6 text-grey q-my-md">Kirish</div>

  <div class="flex  row justify-around ">
    <input-for-category/>
    <div >
      <div class="title">
        Kategoriyalar
      </div>
      <category-list/>
    </div>
  </div>
</template>
