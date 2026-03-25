<template>
  <div>
    <div class="title">
      {{ t("structure.title") }}
    </div>
    <div class="check-marks-place">
      <MyTextMark
          v-for="(compound, index) in compounds"
          :key="index"
          :text="compound"
      />
    </div>
    <div class="lessons">
      <div
          v-for="(lesson, index) in lessons"
          :key="index"
          class="block"
      >
        <span class="index">{{ t("structure.lesson") }} {{ index }}</span>
        <span class="text">- {{ lesson }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyTextMark from "@/components/kit/MyTextMark.vue";
import { computed } from "vue";
import i18n from "@/localization/localization.js";

const t = (key) => i18n.global.t(key);
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
.check-marks-place {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}
.lessons {
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, auto);
  grid-auto-flow: column;
  gap: 15px 70px;
}
.block {
  padding-bottom: 15px;
  border-bottom: 1px solid #1A1F2A;
  display: flex;
  align-items: center;
  gap: 5px;
}
.index {
  font-size: 16px;
  background-color: #2B79B8;
  padding: 5px 9px;
}
.text {
  font-size: 18px;
}
</style>