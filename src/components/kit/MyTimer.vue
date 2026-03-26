<template>
  <div class="timer">
    <div class="digits">
      <span class="indicator">{{ days }}</span>
      <span class="indicator">:</span>
      <span class="indicator">{{ hours }}</span>
      <span class="indicator">:</span>
      <span class="indicator">{{ minutes }}</span>
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
import { TIMER_CONFIG } from "@/config/timer.js";
import { ref, onMounted, onUnmounted } from "vue";

const t = (key) => i18n.global.t(key);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);

const calculateCountdown = () => {
  const now = new Date();
  const targetDate = TIMER_CONFIG.targetDate;
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    return;
  }

  days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursMs = timeRemaining % (1000 * 60 * 60 * 24);
  hours.value = Math.floor(hoursMs / (1000 * 60 * 60));
  const minutesMs = hoursMs % (1000 * 60 * 60);
  minutes.value = Math.floor(minutesMs / (1000 * 60));
};

let timerInterval;

onMounted(() => {
  calculateCountdown();
  timerInterval = setInterval(calculateCountdown, 1000);
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
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
  font-weight: 600;
}
.explain {
  font-size: 14px;
  font-weight: 400;
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
