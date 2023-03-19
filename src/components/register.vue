<script setup>
import { ref } from "vue";

const telNumber = ref("");
const password = ref("");
let isPwd = ref(true);
const submitForm = () => {
  console.log(`telNumber: ${telNumber.value}, Password: ${password.value}`);
};
</script>

<template>
  <div class="flex fullscreen column justify-center items-center">
    <div class="text-weight-bolder text-h6 text-grey q-my-md">Kirish</div>
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input
        filled
        v-model="telNumber"
        label="Phone"
        mask="(##) ### - ## - ##"
        hint="PS: (00) 000 - 05 - 00"
      />
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Sizga berilgan parolni kiriting"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="text-center">
        <q-btn type="submit" label="Kirish" color="primary" />
      </div>
    </q-form>
  </div>
</template>
