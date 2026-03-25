<template>
  <img
      :src="src"
      :alt="props.alt"
  >
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  }
});

const store = useStore();

const src = computed(() => {
  return `/img/${store.getters.theme}/${props.src}`;
});
</script>

<style scoped>

</style>