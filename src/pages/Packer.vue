<template>
  <div class=" container " >
    <div class=" container__title " >
      Bugungi Buyurtmalar
    </div>
    <div class="  row justify-between">
      <Card v-for="order in store.users_info" :key="order"  :order="order"  />
    </div>
  </div>
</template>

<script setup>
import Card from 'src/components/PackerComp/Card.vue'
import { useApiStore } from "src/stores"
const store = useApiStore()
store.getUsersInfo()

</script>

<style lang="scss" scoped>
.container__title{
  text-align: center;
  font-size: 22px;
  padding: 30px 20px 10px 20px ;
}
</style>
