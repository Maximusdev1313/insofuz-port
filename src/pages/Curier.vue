<template>
  <div class=" container__page bg-grey-1 " >
    <div class=" container__title " >
      Bugungi Buyurtmalar
    </div>
    <div class=" container__section">
      <TableCurier :users="store.users_info" />
    </div>
  </div>
</template>

<script setup>
import TableCurier from 'src/components/Curier/TableCurier.vue'
import { useApiStore } from "src/stores"
const store = useApiStore()
store.getUsersInfo()

</script>

<style lang="scss" scoped>
.container__page{
  min-height: 80vh;
}
.container__title{
  width: 100%;
  text-align: center;
  font-size: 22px;
  padding: 50px 20px 30px 20px ;
}
.container__section{
  width: 100%;
  height: auto;
}
</style>
