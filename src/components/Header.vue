<template>
  <div class="header">
    <RouterLink to="/">
      <MyImg
          src="RWA-logo.svg"
          alt="logo"
      />
    </RouterLink>
    <nav class="links">
      <RouterLink
          v-for="(link, index) in links"
          :to="link.adr"
          :key="index"
      >
        {{ link.text }}
      </RouterLink>
      <MyLanguageSwitcher />
    </nav>
    <MyButton @click="switchTheme()">
      {{ t("header.button") }}
    </MyButton>
  </div>
</template>

<script setup>
import MyButton from "@/components/kit/MyButton.vue";
import MyImg from "@/components/kit/MyImg.vue";
import MyLanguageSwitcher from "@/components/kit/MyLanguageSwitcher.vue";
import i18n from "@/localization/localization.js";
import { switchTheme } from "@/help/theme.js";
import { computed } from "vue";

const t = (key) => i18n.global.t(key);
const links = computed(() => {
  return [
    { text: t("header.structure"), adr: "course" },
    { text: t("header.howItWorks"), adr: "how-it-works" },
    { text: t("header.faq"), adr: "faq" },
    { text: t("header.myAccount"), adr: "my-account" }
  ];
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid var(--separator-line-color);
}
.links {
  display: flex;
  gap: 40px;
  font-size: 16px;
}
</style>