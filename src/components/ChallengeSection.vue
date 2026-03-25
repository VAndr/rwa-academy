<template>
  <div class="challenge-layout">
    <div class="hero-block">
      <div class="hero-title">
        {{ t("challenge.complete") }}
      </div>
      <div class="hero-subtitle-row">
        <span class="hero-in">{{ t("challenge.in") }}</span>
        <span class="hero-time">{{ t("challenge.time") }}</span>
        <span class="hero-dash">—</span>
      </div>
      <div class="hero-free">
        {{ t("challenge.forFree") }}
      </div>
    </div>

    <div class="offer-block">
      <div class="time-panel">
        <div class="cashback-title">
          {{ t("challenge.cashback") }}
        </div>
        <div class="cashback-sub">
          {{ t("challenge.firstInvest") }}
        </div>
        <div class="cashback-sub">
          {{ t("challenge.from") }} <span class="cashback-bold">1 USDT</span>
        </div>
        <div class="date-limit">
          {{ t("challenge.dateLimit") }}
        </div>
        <MyTimer />
      </div>
    </div>

    <div class="btn-block">
      <MyButton class="start-btn-btn" width="100%">
        <div class="btn-inner">
          {{ t("challenge.button") }}
          <img src="/img/arrow.svg" alt="arrow">
        </div>
      </MyButton>
    </div>

    <div class="description-block">
      <div class="description-text">
        {{ t("challenge.understand") }}
      </div>
    </div>

    <div class="features-block">
      <MyTextMark
          v-for="(feature, index) in features"
          :key="index"
          :text="feature"
      />
    </div>
  </div>
</template>

<script setup>
import MyButton from "@/components/kit/MyButton.vue";
import MyTextMark from "@/components/kit/MyTextMark.vue";
import MyTimer from "@/components/kit/MyTimer.vue";
import i18n from "@/localization/localization.js";
import { computed } from "vue";

const t = (key) => i18n.global.t(key);
const features = computed(() => {
  return [
    t("challenge.feature1"),
    t("challenge.feature2"),
    t("challenge.feature3")
  ];
});
</script>

<style scoped>
.challenge-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "hero  offer"
    "desc  offer"
    "feat  btn";
  gap: 0 40px;
}

.hero-block      { grid-area: hero; display: flex; flex-direction: column; gap: 8px; }
.offer-block     { grid-area: offer; }
.btn-block       { grid-area: btn; display: flex; justify-content: center; align-items: flex-start; padding-top: 30px; }
.description-block { grid-area: desc; padding-top: 50px; }
.features-block  { grid-area: feat; display: flex; gap: 30px; padding-top: 40px; }

/* Hero typography */
.hero-title {
  font-size: 54px;
  font-weight: 600;
  line-height: 105%;
}
.hero-subtitle-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.hero-in,
.hero-dash {
  font-size: 54px;
  font-weight: 400;
}
.hero-time {
  font-size: 68px;
  font-weight: 800;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(164.28deg, #25C5F5 27.06%, #2958EC 88.45%);
}
.hero-free {
  font-size: 54px;
  font-weight: 600;
  text-align: center;
  width: 40%;
  background: linear-gradient(88.86deg, rgba(13, 30, 95, 0) 0.95%, #0D1E5F 26.7%, #3090F1 63.01%, rgba(48, 144, 241, 0) 94.41%);
  padding: 10px 0;
}

/* Offer card */
.time-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
  border: 1px solid #56576E;
  padding: 20px;
  gap: 6px;
}
.cashback-title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4px;
}
.cashback-sub {
  font-size: 24px;
  text-align: center;
}
.cashback-bold {
  font-weight: 600;
}
.date-limit {
  font-size: 18px;
  margin: 14px 0 6px;
}

/* Button */
.start-btn-btn {
  width: 50%;
}
.btn-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 27px;
}

/* Description */
.description-text {
  font-size: 20px;
  line-height: 1.5;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .challenge-layout {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .hero-block {
    align-items: center;
    text-align: center;
    order: 1;
  }
  .offer-block  { order: 2; }
  .btn-block    { order: 3; padding-top: 0; }
  .description-block { order: 4; padding-top: 0; }
  .features-block {
    order: 5;
    flex-direction: column;
    gap: 15px;
    padding-top: 0;
  }

  .hero-title {
    font-size: 32px;
  }
  .hero-in,
  .hero-dash {
    font-size: 32px;
  }
  .hero-time {
    font-size: 40px;
  }
  .hero-free {
    font-size: 32px;
    width: 100%;
  }

  .cashback-title {
    font-size: 24px;
  }
  .cashback-sub {
    font-size: 20px;
  }
  .date-limit {
    font-size: 16px;
  }

  .btn-inner {
    font-size: 24px;
  }

  .description-text {
    font-size: 18px;
  }
}
</style>
