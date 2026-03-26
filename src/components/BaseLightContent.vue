<template>
  <div class="lp">

    <!-- ── HERO ── -->
    <section class="lp-hero">
      <div class="lp-hero__left">
        <h1 class="lp-hero__title">{{ t("challenge.complete") }}</h1>
        <div class="lp-hero__time-row">
          <span class="lp-hero__in">{{ t("challenge.in") }}</span>
          <span class="lp-hero__time">30 Minutes</span>
          <span class="lp-hero__dash"> —</span>
        </div>
        <div class="lp-hero__free-wrap">
          <div class="lp-hero__free">{{ t("challenge.forFree") }}</div>
        </div>
        <p class="lp-hero__subtitle">{{ t("light.heroSubtitle") }}</p>
      </div>
      <div class="lp-hero__right" aria-hidden="true">
        <svg class="lp-hero__svg" viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Large glow blobs (background) -->
          <ellipse cx="280" cy="310" rx="200" ry="18" fill="#D8DDEE" opacity="0.5"/>
          <ellipse cx="120" cy="290" rx="80" ry="10" fill="#D8DDEE" opacity="0.3"/>

          <!-- === MAIN LARGE ISOMETRIC BLOCK === -->
          <!-- Top face -->
          <path d="M160 180 L260 210 L360 180 L260 150 Z" fill="#EEF1FB"/>
          <path d="M160 180 L260 210 L360 180 L260 150 Z" stroke="#C8CEEA" stroke-width="1"/>
          <!-- Left face -->
          <path d="M160 100 L160 180 L260 210 L260 130 Z" fill="#C8CEEA"/>
          <path d="M160 100 L160 180 L260 210 L260 130 Z" stroke="#B8C0E0" stroke-width="1"/>
          <!-- Right face -->
          <path d="M360 100 L360 180 L260 210 L260 130 Z" fill="#DFE4F2"/>
          <path d="M360 100 L360 180 L260 210 L260 130 Z" stroke="#C8CEEA" stroke-width="1"/>
          <!-- Top face (top) -->
          <path d="M160 100 L260 70 L360 100 L260 130 Z" fill="#F2F4FB"/>
          <path d="M160 100 L260 70 L360 100 L260 130 Z" stroke="#C8CEEA" stroke-width="1"/>

          <!-- === SECOND BLOCK (lower right) === -->
          <path d="M300 260 L370 284 L440 260 L370 236 Z" fill="#EEF1FB"/>
          <path d="M300 260 L370 284 L440 260 L370 236 Z" stroke="#C8CEEA" stroke-width="0.8"/>
          <path d="M300 205 L300 260 L370 284 L370 229 Z" fill="#C8CEEA"/>
          <path d="M300 205 L300 260 L370 284 L370 229 Z" stroke="#B8C0E0" stroke-width="0.8"/>
          <path d="M440 205 L440 260 L370 284 L370 229 Z" fill="#DFE4F2"/>
          <path d="M440 205 L440 260 L370 284 L370 229 Z" stroke="#C8CEEA" stroke-width="0.8"/>
          <path d="M300 205 L370 181 L440 205 L370 229 Z" fill="#F0F3FC"/>
          <path d="M300 205 L370 181 L440 205 L370 229 Z" stroke="#C8CEEA" stroke-width="0.8"/>

          <!-- === THIRD SMALL BLOCK (left side) === -->
          <path d="M60 240 L120 262 L180 240 L120 218 Z" fill="#EEF1FB"/>
          <path d="M60 240 L120 262 L180 240 L120 218 Z" stroke="#C8CEEA" stroke-width="0.8"/>
          <path d="M60 195 L60 240 L120 262 L120 217 Z" fill="#C8CEEA"/>
          <path d="M60 195 L60 240 L120 262 L120 217 Z" stroke="#B8C0E0" stroke-width="0.8"/>
          <path d="M180 195 L180 240 L120 262 L120 217 Z" fill="#DFE4F2"/>
          <path d="M180 195 L180 240 L120 262 L120 217 Z" stroke="#C8CEEA" stroke-width="0.8"/>
          <path d="M60 195 L120 173 L180 195 L120 217 Z" fill="#F0F3FC"/>
          <path d="M60 195 L120 173 L180 195 L120 217 Z" stroke="#C8CEEA" stroke-width="0.8"/>

          <!-- === FOURTH SMALL BLOCK (top right floating) === -->
          <path d="M385 120 L425 136 L465 120 L425 104 Z" fill="#EEF1FB"/>
          <path d="M385 120 L425 136 L465 120 L425 104 Z" stroke="#C8CEEA" stroke-width="0.7"/>
          <path d="M385 88 L385 120 L425 136 L425 104 Z" fill="#D0D6EC"/>
          <path d="M385 88 L385 120 L425 136 L425 104 Z" stroke="#B8C0E0" stroke-width="0.7"/>
          <path d="M465 88 L465 120 L425 136 L425 104 Z" fill="#DFE4F2"/>
          <path d="M465 88 L465 120 L425 136 L425 104 Z" stroke="#C8CEEA" stroke-width="0.7"/>
          <path d="M385 88 L425 72 L465 88 L425 104 Z" fill="#F2F4FB"/>
          <path d="M385 88 L425 72 L465 88 L425 104 Z" stroke="#C8CEEA" stroke-width="0.7"/>

          <!-- Floating circle left -->
          <circle cx="48" cy="100" r="28" fill="#EEF1FB" stroke="#C8CEEA" stroke-width="1.2"/>
          <circle cx="48" cy="100" r="16" fill="#F4F6FC" stroke="#D0D6EC" stroke-width="1"/>
          <circle cx="48" cy="100" r="6" fill="#C8CEEA"/>

          <!-- Diamond top-center -->
          <path d="M260 30 L278 46 L260 62 L242 46 Z" fill="#EEF1FB" stroke="#C8CEEA" stroke-width="1"/>

          <!-- Small square accents -->
          <rect x="50" y="298" width="24" height="24" rx="6" fill="#EEF1FB" stroke="#C8CEEA" stroke-width="1"/>
          <rect x="482" y="150" width="20" height="20" rx="5" fill="#EEF1FB" stroke="#C8CEEA" stroke-width="1"/>
          <rect x="195" y="48" width="16" height="16" rx="4" fill="#E0E4F4" stroke="#D0D6EC" stroke-width="1"/>
          <rect x="468" y="82" width="14" height="14" rx="3" fill="#EEF1FB" stroke="#C8CEEA" stroke-width="1"/>

          <!-- Dashed connection lines -->
          <line x1="74" y1="116" x2="160" y2="118" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="180" y1="200" x2="160" y2="185" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="360" y1="140" x2="385" y2="108" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="465" y1="90" x2="482" y2="158" stroke="#C8CEEA" stroke-width="1" stroke-dasharray="3 3"/>
        </svg>
      </div>
    </section>

    <!-- ── FEATURES STRIP ── -->
    <div class="lp-features">
      <div class="lp-feature">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#1D6CE4"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>{{ t("challenge.understand") }}</span>
      </div>
      <div class="lp-feature">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#1D6CE4"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
      <button class="lp-offer__btn">
        {{ t("challenge.button") }}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)"/>
          <path d="M7 10H13M13 10L10.5 7.5M13 10L10.5 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- ── BELIEF: Most People Confuse ── -->
    <section class="lp-belief">
      <div class="lp-belief__row">
        <div class="lp-belief__card">
          <h3 class="lp-belief__card-title">{{ t("belief.title") }}</h3>
          <div class="lp-belief__tags">
            <div class="lp-belief__tag" v-for="tag in ['belief.scare1','belief.scare2','belief.scare3','belief.scare4']" :key="tag">
              {{ t(tag) }}
            </div>
          </div>
        </div>
        <div class="lp-belief__divider">
          <p class="lp-belief__not-smart">{{ t("belief.notSmart") }}</p>
        </div>
        <div class="lp-belief__card">
          <h3 class="lp-belief__card-title">{{ t("belief.youGet") }}</h3>
          <div class="lp-belief__knows">
            <div class="lp-belief__know" v-for="know in ['belief.know1','belief.know2','belief.know3']" :key="know">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#1D6CE4"/><path d="M5 9.5L7.5 12L13 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>{{ t(know) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS ── -->
    <section class="lp-how">
      <h2 class="lp-section-title">{{ t("light.howTitle") }}</h2>
      <div class="lp-how__grid">

        <!-- 14 short lessons -->
        <div class="lp-how-card">
          <div class="lp-how-card__icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Stack of pages -->
              <rect x="14" y="54" width="52" height="9" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <rect x="14" y="44" width="52" height="12" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <rect x="14" y="33" width="52" height="13" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <rect x="14" y="22" width="52" height="13" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <rect x="14" y="11" width="52" height="13" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Blue bookmark tab (on 2nd from top book) -->
              <rect x="52" y="5" width="8" height="22" rx="1.5" fill="#1357DB"/>
              <path d="M52 24 L56 29 L60 24" fill="#1357DB"/>
            </svg>
          </div>
          <span class="lp-how-card__label">{{ t("light.how1") }}</span>
        </div>

        <!-- Separator -->
        <div class="lp-how-sep" aria-hidden="true"></div>

        <!-- Video + Test -->
        <div class="lp-how-card">
          <div class="lp-how-card__icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Monitor/TV frame -->
              <rect x="6" y="10" width="48" height="36" rx="6" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Play button -->
              <path d="M22 20 L22 36 L36 28 Z" fill="#1357DB"/>
              <!-- Checklist card (overlapping bottom-right) -->
              <rect x="34" y="34" width="38" height="36" rx="5" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Checklist rows -->
              <line x1="47" y1="45" x2="65" y2="45" stroke="#23243A" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="47" y1="52" x2="65" y2="52" stroke="#23243A" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="47" y1="59" x2="58" y2="59" stroke="#23243A" stroke-width="1.5" stroke-linecap="round"/>
              <!-- Check marks -->
              <path d="M39 41 L42 44 L46 40" stroke="#1357DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M39 48 L42 51 L46 47" stroke="#1357DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="lp-how-card__label">{{ t("light.how2") }}</span>
        </div>

        <!-- Separator -->
        <div class="lp-how-sep" aria-hidden="true"></div>

        <!-- Step-by-step logic -->
        <div class="lp-how-card">
          <div class="lp-how-card__icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Rounded square -->
              <rect x="10" y="10" width="60" height="60" rx="15" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Bold right arrow -->
              <path d="M22 40 H52" stroke="#1357DB" stroke-width="4.5" stroke-linecap="round"/>
              <path d="M44 30 L56 40 L44 50" stroke="#1357DB" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="lp-how-card__label">{{ t("light.how3") }}</span>
        </div>

        <!-- Separator -->
        <div class="lp-how-sep" aria-hidden="true"></div>

        <!-- ~2 hour total -->
        <div class="lp-how-card">
          <div class="lp-how-card__icon">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Stopwatch body circle -->
              <circle cx="40" cy="46" r="26" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Blue arc (progress) -->
              <path d="M40 20 A26 26 0 0 1 62.5 53" stroke="#1357DB" stroke-width="3" stroke-linecap="round"/>
              <!-- Crown cap / stem -->
              <rect x="34" y="12" width="12" height="9" rx="3" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Button on crown -->
              <rect x="36" y="7" width="8" height="7" rx="2.5" fill="#F5F7FE" stroke="#23243A" stroke-width="1.5"/>
              <!-- Side lugs -->
              <line x1="27" y1="24" x2="21" y2="30" stroke="#23243A" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="53" y1="24" x2="59" y2="30" stroke="#23243A" stroke-width="1.5" stroke-linecap="round"/>
              <!-- Hour hand (12→ 1 o'clock) -->
              <line x1="40" y1="46" x2="40" y2="28" stroke="#23243A" stroke-width="2" stroke-linecap="round"/>
              <!-- Minute hand -->
              <line x1="40" y1="46" x2="53" y2="46" stroke="#23243A" stroke-width="2" stroke-linecap="round"/>
              <!-- Center dot -->
              <circle cx="40" cy="46" r="2.5" fill="#1357DB"/>
            </svg>
          </div>
          <span class="lp-how-card__label">{{ t("light.how4") }}</span>
        </div>

      </div>
    </section>

    <!-- ── WHAT THIS COURSE IS ABOUT ── -->
    <section class="lp-about">
      <h2 class="lp-section-title">{{ t("light.aboutTitle") }}</h2>
      <p class="lp-about__desc">{{ t("light.aboutDesc") }}</p>
      <div class="lp-about__flow">
        <div class="lp-flow-item">
          <div class="lp-illus lp-illus--sm">
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

    <!-- ── COURSE STRUCTURE ── -->
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
        </div>
      </div>
      <p class="lp-final__disclaimer">{{ t("light.disclaimer") }}</p>
    </section>

  </div>
</template>

<script setup>
import { computed } from "vue";
import i18n from "@/localization/localization.js";
import MyTimer from "@/components/kit/MyTimer.vue";
import StructureSection from "@/components/StructureSection.vue";
import { getFormattedDeadline } from "@/config/timer.js";

const t = (key) => i18n.global.t(key);
const formattedDeadline = computed(() => getFormattedDeadline());

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
  min-height: 300px;
}

.lp-hero__left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lp-hero__title {
  font-size: 52px;
  font-weight: 600;
  line-height: 1.05;
  color: #1A1A2E;
  margin: 0;
}

.lp-hero__time-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: nowrap;
}

.lp-hero__in,
.lp-hero__dash {
  font-size: 52px;
  font-weight: 400;
  color: #1A1A2E;
  white-space: nowrap;
}

.lp-hero__time {
  font-size: 64px;
  font-weight: 800;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(164deg, #25C5F5 27.06%, #2958EC 88.45%);
  white-space: nowrap;
}

.lp-hero__free-wrap {
  margin: 6px 0;
}

.lp-hero__free {
  display: inline-block;
  font-size: 52px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(89deg, rgba(13, 30, 95, 0.00) 4.49%, #0D1E5F 26.7%, #3090F1 63.01%, rgba(48, 144, 241, 0.00) 94.41%);
  padding: 12px 32px;
  min-width: 280px;
}

.lp-hero__subtitle {
  font-size: 20px;
  font-weight: 500;
  color: #1A1A2E;
  margin: 6px 0 0;
  opacity: 0.75;
  line-height: 1.4;
}

.lp-hero__right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lp-hero__svg {
  width: 100%;
  max-width: 520px;
  height: auto;
}

/* ── FEATURES STRIP ── */
.lp-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 22px 28px;
  background: #FFFFFF;
  border: 1px solid #E4E8F4;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  color: #1A1A2E;
  line-height: 1.55;
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
  border: 1px solid #E4E8F4;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-offer__left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.lp-offer__cashback {
  font-size: 16px;
  font-weight: 600;
  color: #1A1A2E;
}

.lp-offer__detail {
  font-size: 14px;
  color: #1A1A2E;
  opacity: 0.7;
}

.lp-offer__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.lp-offer__date {
  font-size: 13px;
  color: #1A1A2E;
  opacity: 0.6;
  white-space: nowrap;
}

/* Override timer inside offer bar */
.lp-offer__center :deep(.timer) {
  width: 100%;
  min-width: 200px;
  max-width: 280px;
  background: #F0F3FC;
  border-color: #D8DCF0;
}

.lp-offer__center :deep(.indicator) {
  color: #1357DB;
  font-size: 28px;
}

.lp-offer__center :deep(.digit-label) {
  color: #666;
  font-size: 10px;
}

.lp-offer__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: linear-gradient(156deg, #1357DB 73.82%, #53D3F7 108.58%);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(19, 87, 219, 0.35);
  transition: opacity 0.15s;
}

.lp-offer__btn:hover {
  opacity: 0.88;
}

/* ── SHARED SECTION TITLE ── */
.lp-section-title {
  font-size: 30px;
  font-weight: 700;
  color: #1A1A2E;
  margin: 0 0 32px;
  line-height: 1.25;
}

/* ── BELIEF SECTION ── */
.lp-belief__row {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.lp-belief__card {
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #E4E8F4;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-belief__card-title {
  font-size: 22px;
  font-weight: 600;
  color: #1A1A2E;
  line-height: 1.35;
  margin: 0 0 22px;
}

.lp-belief__tags {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.lp-belief__tag {
  padding: 16px 14px;
  background: #F0F3FC;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  color: #1A1A2E;
  font-weight: 400;
}

.lp-belief__knows {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lp-belief__know {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: #F0F3FC;
  border-radius: 10px;
  font-size: 14px;
  color: #1A1A2E;
  line-height: 1.5;
}

.lp-belief__know svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.lp-belief__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  align-self: center;
}

.lp-belief__not-smart {
  font-size: 16px;
  color: #1A1A2E;
  opacity: 0.65;
  text-align: center;
  font-style: italic;
  margin: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  white-space: nowrap;
}

/* ── HOW IT WORKS ── */
.lp-how__grid {
  display: flex;
  align-items: stretch;
  background: #FFFFFF;
  border: 1px solid #E4E8F4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-how-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 36px 24px 28px;
  text-align: center;
}

.lp-how-sep {
  width: 1px;
  background: #E4E8F4;
  flex-shrink: 0;
  align-self: stretch;
  margin: 24px 0;
}

.lp-how-card__icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lp-how-card__icon svg {
  width: 80px;
  height: 80px;
}

.lp-how-card__label {
  font-size: 14px;
  font-weight: 500;
  color: #1A1A2E;
  line-height: 1.4;
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
  line-height: 1.65;
  color: #1A1A2E;
  opacity: 0.75;
  margin: -14px 0 36px;
  max-width: 640px;
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
  color: #1A1A2E;
  text-align: center;
}

.lp-about__arrow {
  flex-shrink: 0;
  opacity: 0.5;
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
  gap: 0;
  border: 1px solid #E4E8F4;
  border-radius: 14px;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-get-card__label {
  font-size: 14px;
  font-weight: 500;
  color: #1A1A2E;
  padding: 14px 16px 18px;
  text-align: center;
  line-height: 1.45;
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
  border: 1px solid #E4E8F4;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(20, 40, 100, 0.04);
}

.lp-final__label {
  font-size: 15px;
  font-weight: 500;
  color: #1A1A2E;
  text-align: center;
  margin: 0;
}

.lp-final__disclaimer {
  margin-top: 20px;
  font-size: 13px;
  color: #1A1A2E;
  opacity: 0.5;
  text-align: center;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .lp-how-card__icon {
    width: 64px;
    height: 64px;
  }
  .lp-how-card__icon svg {
    width: 64px;
    height: 64px;
  }
  .lp-how-card {
    padding: 28px 16px 22px;
    gap: 14px;
  }
  .lp-how-sep {
    margin: 18px 0;
  }
}

@media (max-width: 768px) {
  .lp {
    gap: 48px;
  }

  .lp-hero {
    grid-template-columns: 1fr;
    gap: 20px;
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
    min-width: 0;
    padding: 10px 24px;
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

  .lp-offer__center :deep(.timer) {
    max-width: 100%;
  }

  .lp-offer__btn {
    width: 100%;
    justify-content: center;
  }

  .lp-section-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .lp-belief__row {
    flex-direction: column;
  }

  .lp-belief__divider {
    width: 100%;
    padding: 0;
  }

  .lp-belief__not-smart {
    writing-mode: horizontal-tb;
    transform: none;
    white-space: normal;
  }

  .lp-how__grid {
    flex-direction: column;
  }

  .lp-how-sep {
    width: auto;
    height: 1px;
    margin: 0 24px;
  }

  .lp-how-card {
    padding: 24px;
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

  .lp-get__grid {
    grid-template-columns: 1fr;
  }

  .lp-final__grid {
    grid-template-columns: 1fr;
  }
}
</style>
