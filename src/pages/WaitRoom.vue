<script setup>
import {useApiStore} from 'src/stores'
import { onMounted,ref } from 'vue'
import axios from 'axios'
import Pusher from 'pusher-js'
Pusher.logToConsole = true;

    var pusher = new Pusher('1050f4fd4d96cb76281e', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      app.userInfo.push(JSON.stringify(data));
    });

const store = useApiStore()
let userInfo = ref([])
let status = ref('')
let userId = localStorage.getItem('userId')
let getUserData =  async (id)=>{
      try {
        let apiData = await axios.get(`http://insofuzlast.pythonanywhere.com/user/${id}/`)
        let simpleCategory = apiData.data

        console.log(simpleCategory,'cat');
        // userInfo.value = [...simpleCategory]
        // console.log(userInfo.value,'user');
        
      } catch (error) {
          // location.reload()
          console.log(error);
      }
    }
onMounted(()=>{
    // setInterval(() => {
     getUserData(userId)
        
    // }, 5000);
})
</script>
<template>
    <div>
        user
        <button @click="getUserData(userId)">sdasd</button>
    </div>
</template>