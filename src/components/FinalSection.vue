<template>
  <div class="final-panel">
    <div class="final-title">
      {{ t("final.title") }}
    </div>
    <div class="final-buttons">
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
.final-title {
  font-size: 30px;
  font-weight: 600;
}
.final-buttons {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 35px;
}

@media (max-width: 768px) {
  .final-panel {
    padding: 23px;
  }
  .final-title {
    font-size: 24px;
  }
  .final-buttons {
    flex-direction: column;
    margin-top: 24px;
  }
  .final-buttons :deep(.btn) {
    width: 100% !important;
  }
}
</style>
