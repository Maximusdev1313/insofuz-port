<script setup>
import {ref} from 'vue'

const dialog = ref(false)
    const position = ref('top')

 const   open = (pos) => {
        position.value = pos
        dialog.value = true
      }
</script>

<template>
    <div>
        <q-btn label="Top" icon="keyboard_arrow_up" color="primary" @click="open('top')" />
    
        <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="pink" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>