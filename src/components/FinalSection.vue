<template>
  <div class="final-panel">
    <div class="title">
      {{ t("final.title") }}
    </div>
    <div class="buttons">
      <MyButton
          width="49%"
          :isFaded="true"
      >
        {{ t("final.btnLeft") }}
      </MyButton>
      <MyButton width="49%">
        {{ t("final.btnRight") }}
      </MyButton>
    </div>
  </div>
</template>

<script setup>
import MyButton from "@/components/kit/MyButton.vue";
import i18n from "@/localization/localization.js";
const t = (key) => i18n.global.t(key);
</script>

<style scoped>
.final-panel {
  border: 1px solid #56576E;
  padding: 34px;
  border-radius: 14px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}
</style>