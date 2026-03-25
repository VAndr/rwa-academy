<template>
  <div class="switcher">
    <button
        class="switcher__button"
        @click="showMenu = !showMenu"
    >
       {{ currentLanguage }}
      <MyImg
          :src="arrow"
          alt="arrow"
      />
    </button>
    <div
        v-if="showMenu"
        class="switcher__menu"
    >
      <button
          v-for="(lang, index) in allLanguage"
          :key="index"
          class="switcher__button switcher__item"
          @click="setLanguage(lang)"
      >
        {{ lang }}
      </button>
    </div>
  </div>
</template>

<script setup>
import MyImg from "@/components/kit/MyImg.vue";
import { computed, onMounted, ref } from "vue";
import { getLocale, setLocale } from "@/help/language.js";

const currentLanguage = ref("");
const allLanguage = ref(["EN", "RU"])
const showMenu = ref(false);

const arrow = computed(() => {
  return showMenu.value ? "drop_up.svg" : "drop_down.svg";
});

const setLanguage = lang => {
  currentLanguage.value = lang;
  showMenu.value = false;
  setLocale(lang.toLowerCase());
};

onMounted(() => {
  currentLanguage.value = getLocale().toUpperCase();
})
</script>

<style scoped>
.switcher {
  position: relative;
}
.switcher__button {
  font-size: 16px;
  background-color: var(--background-color);
  color: var(--text-color);

  border: none;
  text-shadow: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.switcher__item {
  padding: 10px 20px;
  border-radius: 12px;
}
.switcher__menu {
  position: absolute;
  left: 10px;
  top: 30px;

  display: flex;
  flex-direction: column;
  border: 1px solid #56576E;
  border-radius: 12px;
  background: var(--background-color);
}
</style>