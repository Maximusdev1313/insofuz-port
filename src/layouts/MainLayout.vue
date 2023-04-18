<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-accent">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="white"
        />
       <div class=" fit row  justify-between items-center content-center">
        <router-link to="/" class="link">
          <q-toolbar-title class="text-white text-weight-bold q-ml-md" >
          Insof Uz
        </q-toolbar-title>
        </router-link>

       <router-link to="/search" class="search-input">
        <q-input v-model="search" filled type="search" class="input_header"  bg-color="purple-3" dark color="white">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
       </router-link>


        <q-btn icon="shopping_cart" to="/order" class="text-white">
          <q-badge color="red" floating>{{ store.purchasedProducts.length }}</q-badge>
          {{ store.amount }}
          </q-btn>
       </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <drawerContent/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import {useApiStore} from 'src/stores'
import drawerContent from 'src/components/drawerContent.vue'
const leftDrawerOpen = ref(false)
const search = ref("")
const store = useApiStore()
store.getCategory()

function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<style scoped>
.link{
  text-decoration: none;
}
.input_header{
  margin: 10px;
}
.search-input{
  width: 60%;
}
</style>
