<template>
  <div class="main-challenge">
    <div class="side">
      <div class="great">
        {{ t("challenge.complete") }}
      </div>
      <div class="great">
        {{ t("challenge.in") }} <span class="colored">{{ t("challenge.time") }}</span>
      </div>
      <div class="great colored-background">
        {{ t("challenge.forFree") }}
      </div>
      <div class="medium">
        {{ t("challenge.understand") }}
      </div>
      <div class="check-marks-place">
        <MyTextMark
            v-for="(feature, index) in features"
            :key="index"
            :text="feature"
        />
      </div>
    </div>
    <div class="side">
      <div class="time-panel">
        <div class="big">
          {{ t("challenge.cashback") }}
        </div>
        <div class="medium">
          {{ t("challenge.firstInvest") }}
        </div>
        <div class="medium">
          {{ t("challenge.from") }} <span class="fat">1 USDT</span>
        </div>
        <div class="tiny">
          {{ t("challenge.dateLimit") }}
        </div>
        <MyTimer />
      </div>
      <div class="btn-outside">
        <MyButton
            class="indent"
            width="50%"
        >
          <div class="btn-inside">
            {{ t("challenge.button") }}
            <img
                src="/img/arrow.svg"
                alt="arrow"
            >
          </div>
        </MyButton>
      </div>
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
.main-challenge {
  display: flex;
}
.side {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.great {
  font-size: 54px;
}
.big {
  font-size: 30px;
  margin-bottom: 10px;
}
.medium {
  font-size: 24px;
}
.tiny {
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: 20px;
}
.colored {
  font-size: 68px;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(164.28deg, #25C5F5 27.06%, #2958EC 88.45%);
}
.colored-background {
  text-align: center;
  width: 40%;
  background: linear-gradient(88.86deg, #0D1E5F 0.95%, #3090F1 31.85%, rgba(48, 144, 241, 0) 93.28%);
  margin-bottom: 50px;
}
.check-marks-place {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}
.time-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
  border: 1px solid #56576E;
  padding: 20px 0;
}
.indent {
  margin-top: 30px;
}
.btn-outside {
  display: flex;
  justify-content: center;
}
.btn-inside {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 27px;
}
.fat {
  font-weight: 600;
}
</style>