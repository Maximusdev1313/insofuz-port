<script setup>
import {useApiStore} from 'src/stores'
import { onMounted,ref } from 'vue'

const store = useApiStore()
let status = ref('')
let userId = store.userId
let getUserData = async()=>{
      try{
        let Response = await axios.get(`http://insofuzlast.pythonanywhere.com/user/${userId}`)
        let user = Response.data
        // status.value = user
        console.log(user);
    }catch(error){
        console.log(error.massage);
      }
    }
onMounted(()=>{
    // setInterval(() => {
    //  getUserData()
        
    // }, 5000);
})
</script>
<template>
    <div>
        user
    </div>
</template>