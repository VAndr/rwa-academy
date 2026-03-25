<template>
  <div class="timer">
    <div class="digits">
      <span class="indicator">4</span>
      <span class="indicator">:</span>
      <span class="indicator">17</span>
      <span class="indicator">:</span>
      <span class="indicator">40</span>
      <span class="explain">{{ t("timer.days") }}</span>
      <span />
      <span class="explain">{{ t("timer.hours") }}</span>
      <span />
      <span class="explain">{{ t("timer.min") }}</span>
    </div>
  </div>
</template>

<script setup>
import i18n from "@/localization/localization.js";

const t = (key) => i18n.global.t(key);
</script>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  width: 360px;
  border: 1px solid #56576E;
  border-radius: 12px;
  background: linear-gradient(180deg, #222435 0%, #111320 100%);
  padding: 20px 0;
}
.digits {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: #B9C6F7;
  text-align: center;
}
.indicator {
  font-size: 45px;
}
.explain {
  font-size: 14px;
}

@media (max-width: 768px) {
  .timer {
    width: 100%;
  }
  .indicator {
    font-size: 36px;
  }
}
</style>
