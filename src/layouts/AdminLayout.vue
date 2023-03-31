<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated dark>
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
         admin
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

  let leftDrawerOpen = ref(false)
  function toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
  </script>
  
  <style scoped>
  .link{
    text-decoration: none;
  }

  </style>