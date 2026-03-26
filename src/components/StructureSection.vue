<template>
  <div class="structure-wrapper">
    <div class="structure-card">
      <div class="structure-title">
        {{ t("structure.title") }}
      </div>
      <div class="compounds-list">
        <MyTextMark
            v-for="(compound, index) in compounds"
            :key="index"
            :text="compound"
        />
      </div>

      <!-- Desktop: full lessons grid -->
      <div class="lessons-grid">
        <div
            v-for="(lesson, index) in lessons"
            :key="index"
            class="lesson-block"
        >
          <span class="lesson-index">{{ t("structure.lesson") }} {{ index }}</span>
          <span class="lesson-text">- {{ lesson }}</span>
        </div>
      </div>

      <!-- Mobile: collapsible lessons list -->
      <div class="lessons-dropdown">
        <button class="lessons-toggle" @click="lessonsOpen = !lessonsOpen">
          <span>{{ t("structure.lessonsBtn") }}</span>
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"
               :style="{ transform: lessonsOpen ? 'rotate(180deg)' : 'none' }">
            <path d="M0 0L5 5L10 0" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-if="lessonsOpen" class="lessons-expanded">
          <div
              v-for="(lesson, index) in lessons"
              :key="index"
              class="lesson-block"
          >
            <span class="lesson-index">{{ t("structure.lesson") }} {{ index }}</span>
            <span class="lesson-text">- {{ lesson }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyTextMark from "@/components/kit/MyTextMark.vue";
import { computed, ref } from "vue";
import i18n from "@/localization/localization.js";

const t = (key) => i18n.global.t(key);
const lessonsOpen = ref(false);

const compounds = computed(() => {
  return [
    t("structure.compound1"),
    t("structure.compound2"),
    t("structure.compound3"),
  ];
});
const lessons = computed(() => {
  return [
    t("structure.lesson1"),
    t("structure.lesson2"),
    t("structure.lesson3"),
    t("structure.lesson4"),
    t("structure.lesson5"),
    t("structure.lesson6"),
    t("structure.lesson7"),
    t("structure.lesson8"),
    t("structure.lesson9"),
    t("structure.lesson10"),
    t("structure.lesson11"),
    t("structure.lesson12"),
    t("structure.lesson13"),
    t("structure.lesson14"),
  ];
});
</script>

<style scoped>
.structure-wrapper {
  /* full-bleed card on mobile, plain on desktop */
}

.structure-title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
}

.compounds-list {
  display: flex;
  gap: 30px;
  margin-bottom: 35px;
}

/* Desktop lessons grid */
.lessons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, auto);
  grid-auto-flow: column;
  gap: 15px 70px;
}

.lesson-block {
  padding-bottom: 15px;
  border-bottom: 1px solid #1A1F2A;
  display: flex;
  align-items: center;
  gap: 5px;
}

.lesson-index {
  font-size: 16px;
  background-color: #2B79B8;
  padding: 5px 9px;
  white-space: nowrap;
}

.lesson-text {
  font-size: 18px;
}

/* Mobile dropdown — hidden on desktop */
.lessons-dropdown {
  display: none;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .structure-card {
    border: 1px solid #56576E;
    border-radius: 14px;
    padding: 23px;
  }

  .structure-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .compounds-list {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 24px;
  }

  /* Hide full grid, show dropdown */
  .lessons-grid {
    display: none;
  }

  .lessons-dropdown {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .lessons-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 18px 25px;
    border-radius: 10px;
    border: 1px solid #56576E;
    background: linear-gradient(180deg, #222435 0%, #111320 100%);
    color: #FBFCFF;
    font-size: 14px;
    cursor: pointer;
  }

  .lessons-toggle svg {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .lessons-expanded {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
  }

  .lessons-expanded .lesson-block {
    border-bottom: 1px solid #1A1F2A;
    padding-bottom: 10px;
  }

  .lesson-index {
    font-size: 13px;
  }

  .lesson-text {
    font-size: 15px;
  }
}
</style>
