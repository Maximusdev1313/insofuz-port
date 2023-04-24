<template>
  <div class="row container ">
    <div class="my-card" v-for="order , i in orders" :key="i">
      <div class="img__content">
        <img
          :src="order.image_link"
        />
      </div>
      <div >
        <div class=" q-pt-md text-h6 text-center">
          {{ order.name }}
        </div>
        <div class="  my-card__text">
          <div class="text-subtitle1">
            Miqdori - {{ order.quantity }} kg
          </div>
          <div class=" text-grey">
            1 kg-{{ order.price }} so'm
          </div>
          <div class=" text-grey">
            {{ order.quantity }} kg-{{ order.total_price }} so'm
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >

const props = defineProps({orders:Array})

</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 400px;
  justify-content: space-between;
}
.my-card {
  width: 250px;
  margin: 20px;
  background: rgb(247, 250, 233);

}
.my-card__text{
  font-family:Arial, Helvetica, sans-serif;
  padding: 0 20px 20px 20px;
}
.img__content{
  width: 100%;
  height: auto;
  background:white;
  padding: 20px;
  display: flex;
  justify-content: center;
}
img{
  height: 200px;
  aspect-ratio: 1/1;
  object-fit: contain;
  // mix-blend-mode:difference;
}

@media screen and (max-width:600px) {
  .container{
    justify-content: center;
  }
}
</style>
