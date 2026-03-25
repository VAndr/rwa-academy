<template>
  <div class="header">
    <RouterLink to="/">
      <MyImg src="RWA-logo.svg" alt="logo" />
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

    <!-- Mobile top-bar controls -->
    <div class="mobile-controls">
      <MyLanguageSwitcher />
      <button class="burger-btn" aria-label="Menu" @click="menuOpen = true">
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.09998 8.5H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.09998 1.21428H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.09998 15.7857H21.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu overlay -->
  <Transition name="menu-slide">
    <div v-if="menuOpen" class="mobile-menu">
      <!-- Menu header -->
      <div class="mobile-menu__header">
        <RouterLink to="/" @click="menuOpen = false">
          <MyImg src="RWA-logo.svg" alt="logo" />
        </RouterLink>
        <div class="mobile-menu__header-right">
          <MyLanguageSwitcher />
          <button class="close-btn" aria-label="Close menu" @click="menuOpen = false">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu body -->
      <div class="mobile-menu__body">
        <p class="mobile-menu__title">{{ t("header.menu") }}</p>

        <nav class="mobile-menu__nav">
          <RouterLink
              v-for="(link, index) in mobileLinks"
              :key="index"
              :to="link.adr"
              class="mobile-menu__link"
              @click="menuOpen = false"
          >
            {{ link.text }}
          </RouterLink>
        </nav>

        <div class="mobile-menu__actions">
          <button class="mobile-menu__btn mobile-menu__btn--ghost">
            {{ t("header.signIn") }}
          </button>
          <button class="mobile-menu__btn mobile-menu__btn--ghost">
            {{ t("header.registration") }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import MyButton from "@/components/kit/MyButton.vue";
import MyImg from "@/components/kit/MyImg.vue";
import MyLanguageSwitcher from "@/components/kit/MyLanguageSwitcher.vue";
import i18n from "@/localization/localization.js";
import { switchTheme } from "@/help/theme.js";
import { computed, ref } from "vue";

const t = (key) => i18n.global.t(key);
const menuOpen = ref(false);

const links = computed(() => [
  { text: t("header.structure"), adr: "/course" },
  { text: t("header.howItWorks"), adr: "/how-it-works" },
  { text: t("header.faq"), adr: "/faq" },
  { text: t("header.myAccount"), adr: "/my-account" }
]);

const mobileLinks = computed(() => [
  { text: t("header.structure"), adr: "/course" },
  { text: t("header.howItWorks"), adr: "/how-it-works" },
  { text: t("header.faq"), adr: "/faq" },
]);
</script>

<style scoped>
/* ── Desktop header ── */
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

/* ── Mobile menu overlay ── */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: #0E1117;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  overflow-y: auto;
}

.mobile-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-bottom: 1px solid #1A1F2A;
  flex-shrink: 0;
}

.mobile-menu__header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.mobile-menu__body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 0;
}

.mobile-menu__title {
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
}

.mobile-menu__link {
  display: block;
  padding: 20px 0;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #1A1F2A;
}
.mobile-menu__link:first-child {
  border-top: 1px solid #1A1F2A;
}

.mobile-menu__actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-menu__btn {
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s;
}
.mobile-menu__btn:hover {
  opacity: 0.85;
}
.mobile-menu__btn--ghost {
  background: linear-gradient(180deg, #1A2040 0%, #111420 100%);
  border: 1px solid #2B3160;
}

/* ── Transition ── */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* ── Mobile breakpoint ── */
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
