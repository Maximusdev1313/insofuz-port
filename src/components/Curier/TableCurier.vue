<template >
  <div class="row justify-center bg-grey-1 container ">
    <table class=" bg-white ">
      <tr class=" table__title  ">
        <th> T/r </th>
        <th> Xaridor </th>
        <th> Manzili </th>
        <th> Narxi </th>
        <th> Maxsulotlar </th>
        <th> Qadoqlash </th>
      </tr>
      <tr v-for="user,i in props.users " :key="i" v-show="user.ready=='packed' || user.ready=='deliver'" class="table__info  " :class="{'bg-blue-2' :user.ready=='deliver' }"  >
        <td> {{ i+1 }} </td>
        <td class=""> {{ user.userName }}</td>
        <td> {{ user.address }} </td>
        <td>  {{ user.total }} so'm  </td>
        <td style=" width:25%;">
          <span v-for="product in user.orderForUser" :key="product" > {{ product.name }}, </span>
        </td>
        <td>
          <q-btn @click="store.getChangeReady(user.id , 'deliver')" :to="'/admin/curier/'+user.id"  class="bg-blue-5 text-white" >Yetkazish</q-btn>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import axios from 'axios';
import { useApiStore } from "src/stores"
const store = useApiStore()
import { ref } from 'vue'
const props = defineProps({users:Array})

</script>
<style lang="scss" scoped >
.container{
  width: 100%;
}

table{
  width: 94%;
  margin-bottom: 50px;
  border-collapse: collapse;
  font-size: 18px;
}
th,td{
  text-align: center;
  padding: 10px 5px 10px 5px;
  border: 0.2px solid rgb(116, 114, 114);
}
.table__title{
  height: 50px;
}


</style>
