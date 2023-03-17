<script setup>
import {toRefs} from 'vue'
const props = defineProps({
  statusTitle: String,
  iconLink: String
 
});
const { statusTitle } = toRefs(props);
</script>

<template>
    <div class="wrapper">
        <div class="card shadow-1">
      <div class="card__status text-subtitle2 q-ma-md">
        {{statusTitle}}
      </div>
      <div class="card__image">
        <img :src="iconLink" alt="" width="200" />
      </div>
      <div class="card__alert text-negative q-ma-md">
        Iltimos sahifani tark etmang!
      </div>
      
        </div>
    </div>
</template>
<style scoped>
.card{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
 
}
</style>