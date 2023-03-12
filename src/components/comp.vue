<script setup>
import { toRefs } from 'vue';
const props = defineProps({
  questions: Array,
 
});
const { questions } = toRefs(props);
</script>
<template>
    <div v-for="q in questions" :key="q">
        {{ q }}
    </div>
</template>