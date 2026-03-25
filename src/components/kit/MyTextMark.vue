<template>
  <div class="check-mark">
    <img src="/img/checked.svg" alt="check">
    <span class="mark-text">{{ props.text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>
.check-mark {
  display: flex;
  align-items: center;
  gap: 10px
}
.mark-text {
  font-size: 20px;
}
</style>