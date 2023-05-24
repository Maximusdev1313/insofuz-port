<script setup>
import { toRefs } from "vue";
const props = defineProps({
  img: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});
const { img, title } = toRefs(props);
</script>

<template>
  <div class="wrapper">
    <div class="card shadow-1">
      <div class="card__status text-subtitle2 q-ma-md"></div>
      <div class="card__image">
        <img :src="img" alt="packing" width="200" />
      </div>
      <div class="title">
        <h1 class="text-h5 q-my-md">{{ title }}</h1>
      </div>
      <div class="card__alert text-negative q-ma-md">
        Iltimos sahifani tark etmang!
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
}
</style>
