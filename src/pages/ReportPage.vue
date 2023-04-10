<script setup>
import axios from 'axios'
import {ref} from 'vue'
import { useRoute } from 'vue-router'

const ordersLength = ref()
const users = ref()
const getProducts = async () =>{
    const Response = await axios.get('http://insofuzlast.pythonanywhere.com/product/')
    console.log(Response.data);
}
const getOrders = async () =>{
    const Response = await axios.get('http://insofuzlast.pythonanywhere.com/user/')
    const Api = Response.data
    ordersLength.value = Api.length
    users.value = Api
    console.log(users.value);
    
}
getProducts()
getOrders()
</script>

<template>
    <q-page>
        
    </q-page>
</template>