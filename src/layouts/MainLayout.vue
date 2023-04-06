<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <router-link to="/" class="link">
          <q-toolbar-title class="text-white" >
          Quasar App
        </q-toolbar-title>
        </router-link>
        
        <q-space />
        <q-btn icon="shopping_cart"  outline to="/order" v-if="store.purchasedProducts.length"> 
          <q-badge color="red" floating>{{ store.purchasedProducts.length }}</q-badge>
          {{ store.amount }}
          </q-btn>
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
</style>