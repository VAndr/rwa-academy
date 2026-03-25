<template>
  <div class="header">
    <RouterLink to="/">
      <MyImg
          src="RWA-logo.svg"
          alt="logo"
      />
    </RouterLink>
    <nav class="nav-links">
      <RouterLink
          v-for="(link, index) in links"
          :to="link.adr"
          :key="index"
      >
        {{ link.text }}
      </RouterLink>
      <MyLanguageSwitcher />
    </nav>
    <MyButton class="start-btn" @click="switchTheme()">
      {{ t("header.button") }}
    </MyButton>
    <div class="mobile-controls">
      <MyLanguageSwitcher />
      <button class="burger-btn" aria-label="Menu">
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.09998 8.5H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.09998 1.21428H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.09998 15.7857H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
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
.nav-links {
  display: flex;
  gap: 40px;
  font-size: 16px;
}
.mobile-controls {
  display: none;
  align-items: center;
  gap: 20px;
}
.burger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .header {
    height: 62px;
  }
  .nav-links,
  .start-btn {
    display: none;
  }
  .mobile-controls {
    display: flex;
  }
}
</style>
