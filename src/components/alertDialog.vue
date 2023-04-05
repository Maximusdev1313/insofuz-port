<script setup>
import {ref} from 'vue'
import {useApiStore} from 'src/stores'
const store = useApiStore()
const reloadPage = ()=>{
    location.reload()
}
</script>
<template>
     <q-dialog v-model="store.alert">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-alert">Xatolik yuz berdi!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Qandaydur xatolik yuz berdi. Iltimos internet aloqani tekshirib qaytadan urunib ko'ring!!!
            Agarda xatolik bartaraf bo'lmasa mutahhasisga murojaat qiling. <br>
            <div class="text-red text-center">Sahifa qayta yangilanadi!!!</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup  @click="reloadPage"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>