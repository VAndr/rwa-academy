<template>
  <div class="belief-main">
    <div class="left">
      <div class="title">
        {{ t("belief.title") }}
      </div>
      <div class="scare">
        <div
            v-for="(scare, index) in scares"
            :key="index"
            class="panel center"
        >
          {{ scare }}
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">
        {{ t("belief.youGet") }}
      </div>
      <div class="know">
        <div
            v-for="(know, index) in knows"
            :key="index"
            class="panel"
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
.belief-main {
  display: flex;
}
.left {
  width: 50%;
  border: 1px solid #56576E;
  border-radius: 14px;
  padding: 30px;
}
.scare {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px
}
.center {
  text-align: center;
}
.panel {
  padding: 25px;
  background-color: #1F202D;
  border-radius: 15px;
  font-size: 20px;
}
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.know {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>