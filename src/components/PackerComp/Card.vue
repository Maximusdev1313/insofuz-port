<template >
  <div class="container">
    <div class="card-car row justify-center q-pa-md">
      <div class=" container__carousel ">
        <CaruselCard :orders="props.order.orderForUser" />
      </div>
      <span class="info" >
        Qadoqlandi
      </span>
      <div class="q-mt-md">
        <div class=" container__info_fname ">
          Maxsulotlar :
          <span
            v-for="product in props.order.orderForUser"
            :key="product" >
            {{ product.name }} ,
          </span>
        </div>
        <div class=" container__info_fname q-mt-md ">
          Manzil : {{ props.order.address }}
        </div>
        <div class=" container__info_fname q-mt-md ">
          Umumiy Summa : {{ props.order.total }} so'm
        </div>
      </div>

      <q-btn :to="'/admin/packer/'+props.order.id" class="q-mt-md btn">
        Buyurtmani qadoqlash
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import CaruselCard from 'src/components/PackerComp/CaruselCard.vue';
const props = defineProps({order:Object})

</script>

<style lang="css" scoped>
.container{
  position: relative;
}
.container__carousel{
  width: 100%;
}
a{
  text-decoration: none;
  color: black;
}
.info{
  height: 25px;
  text-align: center;
  padding: 2px 10px 2px 10px  ;
  background: rgb(48, 242, 4);
  border-radius: 0px 15px 0px 15px ;
  color: white;
  position:absolute;
  right: 20px;
}
.card-car{
  width: 330px;
  margin: 30px;
  border-bottom: 1px solid grey;
  box-shadow: 0px 2px 20px 2px rgb(169, 167, 167);
  cursor: pointer;
  border-radius: 10px;
  border-bottom: none;
}

.btn{
  background:rgb(186, 48, 214);
  color: white  ;
}



</style>
