<template>
  <div class="lp">

    <!-- ── HERO ── -->
    <section class="lp-hero">
      <div class="lp-hero__left">
        <h1 class="lp-hero__title">{{ t("challenge.complete") }}</h1>
        <div class="lp-hero__time-row">
          <span class="lp-hero__in">{{ t("challenge.in") }}</span>
          <span class="lp-hero__time">{{ t("challenge.time") }}</span>
          <span class="lp-hero__dash"> —</span>
        </div>
        <div class="lp-hero__free">{{ t("challenge.forFree") }}</div>
        <p class="lp-hero__subtitle">{{ t("light.heroSubtitle") }}</p>
      </div>
      <div class="lp-hero__right" aria-hidden="true">
        <!-- Isometric geometric illustration -->
        <svg class="lp-hero__svg" viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Shadow ellipses -->
          <ellipse cx="210" cy="275" rx="170" ry="16" fill="#E0E4F0" opacity="0.5"/>
          <!-- Main large isometric block -->
          <path d="M130 210 L210 242 L290 210 L210 178 Z" fill="#DFE4F2"/>
          <path d="M130 125 L130 210 L210 242 L210 157 Z" fill="#C8CEEA"/>
          <path d="M290 125 L290 210 L210 242 L210 157 Z" fill="#DFE4F2"/>
          <path d="M130 125 L210 93 L290 125 L210 157 Z" fill="#EEF1FB"/>
          <!-- Inner detail on top face -->
          <path d="M160 133 L210 109 L260 133 L210 157 Z" fill="#E4E8F8" opacity="0.7"/>
          <!-- Medium block top-right -->
          <path d="M295 175 L340 193 L385 175 L340 157 Z" fill="#DFE4F2"/>
          <path d="M295 130 L295 175 L340 193 L340 148 Z" fill="#C8CEEA"/>
          <path d="M385 130 L385 175 L340 193 L340 148 Z" fill="#DFE4F2"/>
          <path d="M295 130 L340 112 L385 130 L340 148 Z" fill="#F0F3FC"/>
          <!-- Small block bottom-left -->
          <path d="M48 220 L84 236 L120 220 L84 204 Z" fill="#DFE4F2"/>
          <path d="M48 185 L48 220 L84 236 L84 201 Z" fill="#C8CEEA"/>
          <path d="M120 185 L120 220 L84 236 L84 201 Z" fill="#DFE4F2"/>
          <path d="M48 185 L84 169 L120 185 L84 201 Z" fill="#EEF1FB"/>
          <!-- Floating circle left -->
          <circle cx="68" cy="100" r="24" fill="#E8ECF8" stroke="#D0D6EC" stroke-width="1.2"/>
          <circle cx="68" cy="100" r="13" fill="#F0F3FC" stroke="#D0D6EC" stroke-width="1"/>
          <circle cx="68" cy="100" r="5" fill="#C8CEEA"/>
          <!-- Floating circle right -->
          <circle cx="400" cy="218" r="18" fill="#E8ECF8" stroke="#D0D6EC" stroke-width="1.2"/>
          <circle cx="400" cy="218" r="9" fill="#F0F3FC"/>
          <!-- Diamond top-right -->
          <path d="M370 68 L394 48 L418 68 L394 88 Z" fill="#E8ECF8" stroke="#D0D6EC" stroke-width="1"/>
          <!-- Small square accents -->
          <rect x="42" y="248" width="22" height="22" rx="5" fill="#EEF1FB" stroke="#D0D6EC" stroke-width="1"/>
          <rect x="395" y="138" width="18" height="18" rx="4" fill="#EEF1FB" stroke="#D0D6EC" stroke-width="1"/>
          <rect x="178" y="52" width="14" height="14" rx="3" fill="#E0E4F4" stroke="#D0D6EC" stroke-width="1"/>
          <!-- Dashed connection lines -->
          <line x1="90" y1="120" x2="130" y2="135" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="292" y1="148" x2="290" y2="148" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="120" y1="200" x2="130" y2="195" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="3 3"/>
          <line x1="385" y1="150" x2="395" y2="145" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="3 3"/>
        </svg>
      </div>
    </section>

    <!-- ── FEATURES STRIP ── -->
    <div class="lp-features">
      <div class="lp-feature">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1D6CE4"/><path d="M6 10.5L8.5 13L14 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>{{ t("challenge.understand") }}</span>
      </div>
      <div class="lp-feature">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1D6CE4"/><path d="M6 10.5L8.5 13L14 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>{{ t("light.noFeatures") }}</span>
      </div>
    </div>

    <!-- ── OFFER BAR ── -->
    <div class="lp-offer">
      <div class="lp-offer__left">
        <span class="lp-offer__cashback">{{ t("challenge.cashback") }}</span>
        <span class="lp-offer__detail">{{ t("challenge.firstInvest") }} {{ t("challenge.from") }} <strong>1 USDT</strong></span>
      </div>
      <div class="lp-offer__center">
        <span class="lp-offer__date">{{ t("challenge.dateLimit") }} {{ formattedDeadline }}</span>
        <MyTimer />
      </div>
      <MyButton width="160px">
        <div class="lp-offer__btn-inner">
          {{ t("challenge.button") }}
          <img src="/img/arrow.svg" alt="→">
        </div>
      </MyButton>
    </div>

    <!-- ── WHAT THIS COURSE IS ABOUT ── -->
    <section class="lp-about">
      <h2 class="lp-section-title">{{ t("light.aboutTitle") }}</h2>
      <p class="lp-about__desc">{{ t("light.aboutDesc") }}</p>
      <div class="lp-about__flow">
        <div class="lp-flow-item">
          <div class="lp-illus lp-illus--sm">
            <!-- Consumption: book/wallet SVG -->
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="20" width="50" height="40" rx="6" fill="#E8ECF8" stroke="#C8D0E8" stroke-width="1.5"/>
              <rect x="22" y="28" width="36" height="4" rx="2" fill="#B0BCE4"/>
              <rect x="22" y="36" width="28" height="4" rx="2" fill="#C8D0E8"/>
              <rect x="22" y="44" width="32" height="4" rx="2" fill="#C8D0E8"/>
              <rect x="10" y="18" width="6" height="44" rx="3" fill="#C8D0E8"/>
            </svg>
          </div>
          <span class="lp-flow-item__label">{{ t("light.step1") }}</span>
        </div>
        <svg class="lp-about__arrow" width="40" height="20" viewBox="0 0 40 20" fill="none">
          <path d="M0 10H36M36 10L28 3M36 10L28 17" stroke="#C0C8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="lp-flow-item">
          <div class="lp-illus lp-illus--sm">
            <!-- Investment: chart/telescope SVG -->
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="50" height="50" rx="25" fill="#E8ECF8" stroke="#C8D0E8" stroke-width="1.5"/>
              <path d="M25 50 L33 38 L42 44 L52 28" stroke="#7B9EDE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="52" cy="28" r="4" fill="#1357DB"/>
            </svg>
          </div>
          <span class="lp-flow-item__label">{{ t("light.step2") }}</span>
        </div>
        <svg class="lp-about__arrow" width="40" height="20" viewBox="0 0 40 20" fill="none">
          <path d="M0 10H36M36 10L28 3M36 10L28 17" stroke="#C0C8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="lp-flow-item">
          <div class="lp-illus lp-illus--sm">
            <!-- Participation: connected network SVG -->
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="10" fill="#B8C6E8" stroke="#9AAEE0" stroke-width="1.5"/>
              <circle cx="18" cy="22" r="7" fill="#D0D8F0" stroke="#C0CBE8" stroke-width="1"/>
              <circle cx="62" cy="22" r="7" fill="#D0D8F0" stroke="#C0CBE8" stroke-width="1"/>
              <circle cx="18" cy="58" r="7" fill="#D0D8F0" stroke="#C0CBE8" stroke-width="1"/>
              <circle cx="62" cy="58" r="7" fill="#D0D8F0" stroke="#C0CBE8" stroke-width="1"/>
              <line x1="23" y1="27" x2="34" y2="34" stroke="#B8C6E8" stroke-width="1.5"/>
              <line x1="57" y1="27" x2="46" y2="34" stroke="#B8C6E8" stroke-width="1.5"/>
              <line x1="23" y1="53" x2="34" y2="46" stroke="#B8C6E8" stroke-width="1.5"/>
              <line x1="57" y1="53" x2="46" y2="46" stroke="#B8C6E8" stroke-width="1.5"/>
            </svg>
          </div>
          <span class="lp-flow-item__label">{{ t("light.step3") }}</span>
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS ── -->
    <section class="lp-how">
      <h2 class="lp-section-title">{{ t("light.howTitle") }}</h2>
      <div class="lp-how__items">
        <div class="lp-how-item" v-for="item in howItems" :key="item.key">
          <div class="lp-how-item__icon" v-html="item.svg"></div>
          <span class="lp-how-item__label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── WHAT YOU GET ── -->
    <section class="lp-get">
      <h2 class="lp-section-title">{{ t("light.getTitle") }}</h2>
      <div class="lp-get__grid">
        <div class="lp-get-card" v-for="item in getItems" :key="item.key">
          <div class="lp-illus lp-illus--md" v-html="item.svg"></div>
          <span class="lp-get-card__label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── COURSE STRUCTURE (reuse existing) ── -->
    <StructureSection />

    <!-- ── FINAL STEP ── -->
    <section class="lp-final">
      <div class="lp-final__grid">
        <div class="lp-final__option">
          <div class="lp-illus lp-illus--lg">
            <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="20" width="100" height="120" rx="10" fill="#EEF1FB" stroke="#D0D8F0" stroke-width="1.5"/>
              <rect x="45" y="38" width="70" height="6" rx="3" fill="#C8D0E8"/>
              <rect x="45" y="52" width="55" height="4" rx="2" fill="#D8E0F0"/>
              <rect x="45" y="64" width="62" height="4" rx="2" fill="#D8E0F0"/>
              <rect x="45" y="76" width="48" height="4" rx="2" fill="#D8E0F0"/>
              <circle cx="120" cy="112" r="24" fill="#1357DB" opacity="0.12" stroke="#1357DB" stroke-width="1.5"/>
              <circle cx="120" cy="112" r="16" fill="#1357DB" opacity="0.2"/>
              <path d="M112 112L118 118L130 106" stroke="#1357DB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="lp-final__label">{{ t("light.optionA") }}</p>
          <button class="lp-final__btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1357DB"/><path d="M7 10H13M13 10L10.5 7.5M13 10L10.5 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="lp-final__option">
          <div class="lp-illus lp-illus--lg">
            <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="75" r="52" fill="#EEF1FB" stroke="#D0D8F0" stroke-width="1.5"/>
              <circle cx="80" cy="75" r="36" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1"/>
              <path d="M80 50 L80 75 L98 75" stroke="#9AAEE0" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="80" cy="75" r="5" fill="#1357DB"/>
              <path d="M68 100 L76 116 L80 112 L84 116 L92 100" stroke="#C8D0E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M72 97 L88 97" stroke="#1357DB" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="lp-final__label">{{ t("light.optionB") }}</p>
          <button class="lp-final__btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1357DB"/><path d="M7 10H13M13 10L10.5 7.5M13 10L10.5 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
      <p class="lp-final__disclaimer">{{ t("light.disclaimer") }}</p>
    </section>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import i18n from "@/localization/localization.js";
import MyTimer from "@/components/kit/MyTimer.vue";
import MyButton from "@/components/kit/MyButton.vue";
import StructureSection from "@/components/StructureSection.vue";
import { getFormattedDeadline } from "@/config/timer.js";

const t = (key) => i18n.global.t(key);
const formattedDeadline = computed(() => getFormattedDeadline());

const howItems = computed(() => [
  {
    key: "lessons",
    label: t("light.how1"),
    svg: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="40" height="44" rx="5" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="8" y="12" width="40" height="44" rx="5" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="6" y="16" width="40" height="44" rx="5" fill="#F0F3FC" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="18" y="26" width="20" height="2.5" rx="1.25" fill="#B0BCE4"/>
      <rect x="18" y="32" width="15" height="2.5" rx="1.25" fill="#C8D0E8"/>
      <rect x="18" y="38" width="18" height="2.5" rx="1.25" fill="#C8D0E8"/>
    </svg>`
  },
  {
    key: "video",
    label: t("light.how2"),
    svg: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="36" height="28" rx="5" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <path d="M20 22 L20 32 L28 27 Z" fill="#9AAEE0"/>
      <rect x="28" y="42" width="20" height="14" rx="4" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="32" y="46" width="12" height="2" rx="1" fill="#C8D0E8"/>
      <rect x="32" y="50" width="8" height="2" rx="1" fill="#D0D8F0"/>
    </svg>`
  },
  {
    key: "logic",
    label: t("light.how3"),
    svg: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="40" height="40" rx="8" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <path d="M18 30 H42 M42 30 L34 22 M42 30 L34 38" stroke="#7B9EDE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    key: "time",
    label: t("light.how4"),
    svg: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="32" r="20" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <path d="M30 20 L30 32 L38 32" stroke="#9AAEE0" stroke-width="2" stroke-linecap="round"/>
      <circle cx="30" cy="32" r="2.5" fill="#1357DB"/>
      <rect x="27" y="6" width="6" height="4" rx="2" fill="#D0D8F0"/>
      <rect x="14" y="9" width="6" height="3" rx="1.5" fill="#D0D8F0" transform="rotate(-30 14 9)"/>
    </svg>`
  },
]);

const getItems = computed(() => [
  {
    key: "invest",
    label: t("light.get1"),
    svg: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="65" rx="44" ry="14" fill="#D8E0F0"/>
      <ellipse cx="60" cy="52" rx="44" ry="14" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1"/>
      <path d="M16 52 L60 38 L104 52" stroke="#C8D0E8" stroke-width="1"/>
      <path d="M60 38 L60 52" stroke="#B8C6E8" stroke-width="1"/>
      <path d="M80 30 L80 52 M80 30 L60 38" stroke="#9AAEE0" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M80 22 L80 30 M78 24 L80 22 L82 24" stroke="#7B9EDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    key: "blockchain",
    label: t("light.get2"),
    svg: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="30" width="28" height="28" rx="6" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="46" y="14" width="28" height="28" rx="6" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="76" y="30" width="28" height="28" rx="6" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <rect x="46" y="58" width="28" height="28" rx="6" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1.5"/>
      <line x1="44" y1="44" x2="46" y2="44" stroke="#B8C6E8" stroke-width="1.5"/>
      <line x1="74" y1="44" x2="76" y2="44" stroke="#B8C6E8" stroke-width="1.5"/>
      <line x1="60" y1="42" x2="60" y2="58" stroke="#B8C6E8" stroke-width="1.5"/>
    </svg>`
  },
  {
    key: "step",
    label: t("light.get3"),
    svg: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 75 L100 75 L100 65 L80 65 L80 55 L60 55 L60 45 L40 45 L40 35 L20 35 Z" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5" stroke-linejoin="round"/>
      <line x1="20" y1="35" x2="100" y2="35" stroke="#D0D8F0" stroke-width="0.8" stroke-dasharray="3 2"/>
      <line x1="20" y1="45" x2="100" y2="45" stroke="#D0D8F0" stroke-width="0.8" stroke-dasharray="3 2"/>
      <line x1="20" y1="55" x2="100" y2="55" stroke="#D0D8F0" stroke-width="0.8" stroke-dasharray="3 2"/>
      <line x1="20" y1="65" x2="100" y2="65" stroke="#D0D8F0" stroke-width="0.8" stroke-dasharray="3 2"/>
      <circle cx="86" cy="44" r="8" fill="#1357DB" opacity="0.15" stroke="#1357DB" stroke-width="1"/>
      <path d="M83 44 L85.5 46.5 L90 42" stroke="#1357DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    key: "specul",
    label: t("light.get4"),
    svg: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="46" r="30" fill="#EEF1FB" stroke="#C8D0E8" stroke-width="1.5"/>
      <circle cx="50" cy="46" r="20" fill="#E4E8F8" stroke="#C8D0E8" stroke-width="1"/>
      <path d="M30 56 L38 44 L46 50 L54 36" stroke="#7B9EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="72" y1="68" x2="96" y2="90" stroke="#9AAEE0" stroke-width="4" stroke-linecap="round"/>
      <circle cx="72" cy="66" r="6" fill="#C8D0E8" stroke="#B0BCE4" stroke-width="1.5"/>
    </svg>`
  },
]);
</script>

<style scoped>
.lp {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* ── HERO ── */
.lp-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  min-height: 280px;
}

.lp-hero__left {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lp-hero__title {
  font-size: 52px;
  font-weight: 600;
  line-height: 1.05;
  color: var(--text-color);
  margin: 0;
}

.lp-hero__time-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.lp-hero__in,
.lp-hero__dash {
  font-size: 52px;
  font-weight: 400;
  color: var(--text-color);
}

.lp-hero__time {
  font-size: 64px;
  font-weight: 800;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(164deg, #25C5F5 27.06%, #2958EC 88.45%);
}

.lp-hero__free {
  display: inline-block;
  font-size: 52px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(89deg, rgba(13, 30, 95, 0) 4.49%, #0D1E5F 26.7%, #3090F1 63.01%, rgba(48, 144, 241, 0) 94.41%);
  padding: 10px 28px;
  width: fit-content;
}

.lp-hero__subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-color);
  margin: 4px 0 0;
  opacity: 0.75;
}

.lp-hero__right {
  display: flex;
  justify-content: center;
}

.lp-hero__svg {
  width: 100%;
  max-width: 440px;
  height: auto;
}

/* ── FEATURES STRIP ── */
.lp-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 28px;
  background: #FFFFFF;
  border: 1px solid #E0E4F0;
  border-radius: 14px;
}

.lp-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  color: var(--text-color);
  line-height: 1.5;
}

.lp-feature svg {
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── OFFER BAR ── */
.lp-offer {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 28px;
  background: #FFFFFF;
  border: 1px solid #E0E4F0;
  border-radius: 14px;
}

.lp-offer__left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.lp-offer__cashback {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color);
}

.lp-offer__detail {
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.75;
}

.lp-offer__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
}

.lp-offer__date {
  font-size: 13px;
  color: var(--text-color);
  opacity: 0.65;
}

/* Override timer inside offer bar */
.lp-offer__center :deep(.timer) {
  width: 100%;
  min-width: 220px;
  background: #F0F3FC;
  border-color: #D8DCE8;
}

.lp-offer__center :deep(.digits) {
  color: #1357DB;
}

.lp-offer__center :deep(.indicator) {
  font-size: 32px;
}

.lp-offer__btn-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
}

/* ── SHARED SECTION TITLE ── */
.lp-section-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 28px;
  line-height: 1.3;
}

/* ── ILLUSTRATIONS ── */
.lp-illus {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F7FC;
  border: 1px solid #E0E4F0;
  border-radius: 12px;
  overflow: hidden;
}

.lp-illus--sm {
  width: 130px;
  height: 130px;
  padding: 16px;
}

.lp-illus--sm svg {
  width: 100%;
  height: 100%;
}

.lp-illus--md {
  width: 100%;
  height: 180px;
  padding: 20px;
}

.lp-illus--md svg {
  width: 100%;
  height: 100%;
}

.lp-illus--lg {
  width: 100%;
  height: 200px;
  padding: 20px;
}

.lp-illus--lg svg {
  width: 100%;
  height: 100%;
}

/* ── ABOUT SECTION ── */
.lp-about__desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.8;
  margin: -10px 0 32px;
  max-width: 620px;
}

.lp-about__flow {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lp-flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex: 1;
}

.lp-flow-item__label {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-color);
  text-align: center;
}

.lp-about__arrow {
  flex-shrink: 0;
  opacity: 0.5;
}

/* ── HOW IT WORKS ── */
.lp-how__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.lp-how-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.lp-how-item__icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lp-how-item__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  line-height: 1.4;
}

/* ── WHAT YOU GET ── */
.lp-get__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.lp-get-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid #E0E4F0;
  border-radius: 14px;
  overflow: hidden;
  background: #FFFFFF;
}

.lp-get-card__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  padding: 0 16px 18px;
  text-align: center;
  line-height: 1.4;
}

/* ── FINAL STEP ── */
.lp-final__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.lp-final__option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #FFFFFF;
  border: 1px solid #E0E4F0;
  border-radius: 14px;
  padding: 24px;
}

.lp-final__label {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-color);
  text-align: center;
  margin: 0;
}

.lp-final__btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease;
}

.lp-final__btn:hover {
  transform: scale(1.1);
}

.lp-final__disclaimer {
  margin-top: 16px;
  font-size: 13px;
  color: var(--text-color);
  opacity: 0.55;
  text-align: center;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .lp-how__items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .lp {
    gap: 50px;
  }

  .lp-hero {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .lp-hero__right {
    display: none;
  }

  .lp-hero__title,
  .lp-hero__in,
  .lp-hero__dash {
    font-size: 32px;
  }

  .lp-hero__time {
    font-size: 40px;
  }

  .lp-hero__free {
    font-size: 32px;
  }

  .lp-hero__subtitle {
    font-size: 16px;
  }

  .lp-features {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .lp-offer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .lp-offer__center {
    align-items: flex-start;
    width: 100%;
  }

  .lp-section-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .lp-about__flow {
    flex-direction: column;
    gap: 12px;
  }

  .lp-about__arrow {
    transform: rotate(90deg);
  }

  .lp-illus--sm {
    width: 100%;
    height: 120px;
  }

  .lp-how__items {
    grid-template-columns: repeat(2, 1fr);
  }

  .lp-get__grid {
    grid-template-columns: 1fr;
  }

  .lp-final__grid {
    grid-template-columns: 1fr;
  }
}
</style>
