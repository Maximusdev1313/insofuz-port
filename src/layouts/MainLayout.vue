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

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn icon="shopping_cart" outline to="/purchased">
          <q-badge color="red" floating>{{ store.purchasedProducts.length }}</q-badge>
          {{ store.amount }}
          </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
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
