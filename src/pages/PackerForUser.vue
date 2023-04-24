<template>
  <div class="container">
    <CardPacker class="container__card" :orders="store.user_info.orderForUser" />
    <div class="container__info">
      <div>
        <div class=" container__info_fname ">
          Buyurtmachi : {{ store.user_info.userName }}
        </div>
        <div class=" container__info_fname q-mt-md ">
          Manzil : {{ store.user_info.address }}
        </div>
        <div class=" container__info_fname q-mt-md ">
          Umumiy Summa : {{ store.user_info.total }} so'm
        </div>
      </div>
      <div class="container__btn">
        <q-btn to="/admin/packer" class="bg-light-green-8 text-white" >
          Qadoqlanib bo'lindi
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardPacker from 'src/components/PackerComp/CardPacker.vue'
import { useRoute } from 'vue-router'
import { useApiStore } from "src/stores"
const store = useApiStore()

const id = useRoute().params.id

store.getUserInfo(id)
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  min-height: 50vh;
  background: rgb(238, 248, 246);
  display: flex;
  flex-wrap: wrap;
}
.container__card{
  margin : 50px;
}
.container__info{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 50px 50px 70px ;
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
}
.container__btn{
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width:700px) {
  .container__card{
    margin : 0;
  }
}
</style>
