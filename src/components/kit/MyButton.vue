<template>
  <button
      class="btn"
      :class="{ shadow: isDarkTheme }"
      :style="cssVars"
  >
    <slot />
  </button>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "150px"
  },
  isFaded: {
    type: Boolean,
    default: false
  }
});
const store = useStore();
const isDarkTheme = computed(() => {
  return store.getters.theme === "dark";
});
const cssVars = computed(() => {
  const ret = { "--button-width": props.width };
  if (props.isFaded) {
    ret["--button-background"] = "#011E56";
  }
  return ret;
});
</script>

<style scoped>
.btn {
  font-size: 14px;
  font-weight: 600;

  background: var(--button-background);
  color: white;

  padding: 15px 30px;
  border-radius: 12px;
  border-color: #2B79B8;

  width: var(--button-width);
}
.shadow {
  box-shadow: -2px 2px 4.8px 0px #55BBFE inset;
  box-shadow: 0px -2px 4px 0px #84F1FF8A inset;
  box-shadow: 0px 4px 34.5px 0px #1256DA80;
}
</style>