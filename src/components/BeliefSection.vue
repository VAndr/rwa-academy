<template>
  <div class="belief-layout">
    <div class="confuse-card">
      <div class="card-title">
        {{ t("belief.title") }}
      </div>
      <div class="scares-grid">
        <div
            v-for="(scare, index) in scares"
            :key="index"
            class="scare-item"
        >
          {{ scare }}
        </div>
      </div>
    </div>

    <div class="not-smart-text">
      {{ t("belief.notSmart") }}
    </div>

    <div class="you-get-card">
      <div class="card-title">
        {{ t("belief.youGet") }}
      </div>
      <div class="knows-list">
        <div
            v-for="(know, index) in knows"
            :key="index"
            class="know-item"
        >
          {{ know }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import i18n from "@/localization/localization.js";

const t = (key) => i18n.global.t(key);
const scares = computed(() => {
  return [
    t("belief.scare1"),
    t("belief.scare2"),
    t("belief.scare3"),
    t("belief.scare4"),
  ]
});
const knows = computed(() => {
  return [
    t("belief.know1"),
    t("belief.know2"),
    t("belief.know3"),
  ];
})
</script>

<style scoped>
.belief-layout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Left column — confuse card */
.confuse-card {
  width: 50%;
  border: 1px solid #56576E;
  border-radius: 14px;
  padding: 30px;
}

/* Right column — you-get card */
.you-get-card {
  width: 50%;
  border: 1px solid #56576E;
  border-radius: 14px;
  padding: 30px;
}

.card-title {
  font-size: 30px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 24px;
}

.scares-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.scare-item {
  padding: 18px;
  background: #12161F;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  color: #FBFCFF;
}

.knows-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.know-item {
  padding: 18px;
  background: #12161F;
  border-radius: 10px;
  font-size: 14px;
  color: #FBFCFF;
}

/* Hidden on desktop */
.not-smart-text {
  display: none;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .belief-layout {
    flex-direction: column;
    gap: 25px;
  }

  .confuse-card,
  .you-get-card {
    width: 100%;
  }

  .not-smart-text {
    display: block;
    font-size: 20px;
    letter-spacing: 0.2px;
    line-height: 1.35;
  }

  .card-title {
    font-size: 24px;
  }
}
</style>
