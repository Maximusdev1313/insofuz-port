<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {useRoute} from 'vue-router'
import carusel from 'src/components/forIndexPage/carusel.vue';

const route = useRoute()
let simpleProduct = ref([])
let  getProduct = async (id) =>{
      try {
        let response = await axios.get(`http://insofuzlast.pythonanywhere.com/product/${id}/`)
        simpleProduct.value = response.data
        console.log(simpleProduct.value);
        
      } catch (error) {
          // location.reload()
          console.log(error);
      }
    }
    onMounted(()=>{
      getProduct(route.params.id)
    })
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title text-weight-thin q-mb-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, rem?
      </div>
      <div class="text-subtitle2  q-mb-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vitae sit minus amet commodi perferendis unde sed quidem voluptate!
      </div>
      <carusel :carusel="simpleProduct.images"/>
    </div>
    <div>

    </div>
  </div>
</template>
<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
.content{
  width: 600px;
  margin-top: 20px;

}

</style>