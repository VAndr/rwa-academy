<template>
  <div class="footer">
    <div class="footer-copy">
      © 2026 Autentic Global
    </div>

    <button class="theme-toggle" @click="switchTheme()" :aria-label="isLight ? 'Switch to dark theme' : 'Switch to light theme'">
      <span class="theme-toggle__track">
        <span class="theme-toggle__thumb">
          <!-- Moon icon (dark mode indicator) -->
          <svg v-if="!isLight" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7.5A5.5 5.5 0 014.5 1a5.5 5.5 0 100 10 5.5 5.5 0 006.5-3.5z" fill="#B9C6F7"/>
          </svg>
          <!-- Sun icon (light mode indicator) -->
          <svg v-else width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="3" fill="#1357DB"/>
            <line x1="6" y1="0.5" x2="6" y2="2" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="6" y1="10" x2="6" y2="11.5" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="0.5" y1="6" x2="2" y2="6" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="10" y1="6" x2="11.5" y2="6" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="1.93" y1="1.93" x2="3" y2="3" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="9" y1="9" x2="10.07" y2="10.07" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="10.07" y1="1.93" x2="9" y2="3" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="3" y1="9" x2="1.93" y2="10.07" stroke="#1357DB" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
      </span>
      <span class="theme-toggle__label">{{ isLight ? t("footer.darkTheme") : t("footer.lightTheme") }}</span>
    </button>

    <div class="footer-links">
      <a href="#">{{ t("footer.legal") }}</a>
      <a href="#">{{ t("footer.disclaimer") }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import i18n from "@/localization/localization.js";
import { switchTheme } from "@/help/theme.js";

const t = (key) => i18n.global.t(key);
const store = useStore();
const isLight = computed(() => store.getters.theme === "light");
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--separator-line-color);
  padding: 30px 0;
  font-size: 18px;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copy {
  color: var(--text-color);
}

.footer-links {
  display: flex;
  gap: 30px;
}
.footer-links a {
  text-decoration: underline;
  color: #5992FF;
}

/* ── Theme toggle ── */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--text-color);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
}

.theme-toggle__track {
  display: flex;
  align-items: center;
  width: 42px;
  height: 24px;
  border-radius: 12px;
  background: var(--separator-line-color);
  border: 1px solid var(--card-border, #56576E);
  padding: 2px;
  transition: background 0.25s ease;
  flex-shrink: 0;
}

.theme-toggle__thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1357DB;
  transition: transform 0.25s ease;
  transform: translateX(0);
}

/* When light theme — thumb moves right */
html[data-theme='light'] .theme-toggle__track {
  background: #D8E4FF;
}
html[data-theme='light'] .theme-toggle__thumb {
  transform: translateX(18px);
  background: #1357DB;
}

.theme-toggle__label {
  white-space: nowrap;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 0;
    font-size: 12px;
    letter-spacing: 0.12px;
    gap: 12px;
  }
  .footer-links {
    gap: 20px;
  }
  .theme-toggle__label {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
}
</style>
