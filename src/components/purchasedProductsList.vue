<script setup>
import { useApiStore } from "src/stores";
const store = useApiStore();
</script>

<template>
  <div class="wrapper">
    <div class="list">
      <div class="list__title">Mahsulotlar</div>
      <div class="list__item" v-for="product in store.purchasedProducts" :key="product">
        <img
          :src="product.rasmlari[0].link"
          alt=""
          width="50"
          height="50"
        />
        <div class="list__label">{{ product.nomi }}</div>
        <div
          class="list__quantity row justify-between items-center content-center wrap"
        >
          <div class="item-count">{{ product.soni }} ta</div>
          <q-btn-group rounded class="button-group">
            <q-btn
              rounded
              size="sm"
              label="+"
              @click="store.incrementAmount(product)"
            />
            <q-btn rounded size="sm" label="-" />
          </q-btn-group>
        </div>
        <div class="button">
          <q-icon name="cancel" size="md" color="red" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  margin-top: 15px;
}
.list {
  width: 90%;
  margin: 0 auto;
}
.list__title {
  font-size: 20px;
  font-weight: bold;
  color: gray;
}
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px gray solid;
}
.list__label {
  width: 25%;
}
.list__quantity {
  width: 20%;
}
.item-count {
  width: 80px;
  text-align: center;
}
</style>
