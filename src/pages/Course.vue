<template>
  <div class="page">
    <main class="main-content">
      <div class="container">

        <!-- Course Header -->
        <section class="course-header">
          <h1 class="course-title">Course Structure</h1>
          <p class="course-subtitle">
            14 short lessons. Watch in any order. Pass all the tests to unlock your achievement.
          </p>
        </section>

        <!-- Progress -->
        <section class="progress-section">
          <div class="progress-label">{{ watchedCount }} of {{ totalCount }} lessons watched</div>
          <div class="progress-dots" role="progressbar" :aria-valuenow="watchedCount" :aria-valuemax="totalCount">
            <span
                v-for="i in totalCount"
                :key="i"
                class="dot"
                :class="i <= watchedCount ? 'dot--watched' : 'dot--pending'"
            ></span>
          </div>
        </section>

        <!-- Lessons List -->
        <section class="lessons-section">
          <ul class="lessons-list">
            <li v-for="(lesson, index) in lessons" :key="lesson.id" class="lesson-item">
              <button
                  class="lesson-row"
                  :class="[
                  lesson.watched ? 'lesson-row--watched' : 'lesson-row--active',
                  expandedLessonId === lesson.id ? 'lesson-row--expanded' : ''
                ]"
                  @click="toggleLesson(lesson)"
                  :aria-label="'Open lesson ' + lesson.id + ': ' + lesson.title"
              >
                <span class="lesson-check-icon" v-if="lesson.watched">
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3L3.5 7L8.5 0" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="lesson-spacer" v-else></span>
                <span class="lesson-badge" :class="lesson.watched ? 'lesson-badge--watched' : ''">
                  Lesson {{ lesson.id }}
                </span>
                <span class="lesson-title-text" :class="lesson.watched ? 'lesson-title-text--watched' : ''">
                  — {{ lesson.title }}
                </span>
              </button>

              <!-- Expanded Content -->
              <transition
                  name="expand"
                  @enter="onEnter"
                  @leave="onLeave"
              >
                <div v-show="expandedLessonId === lesson.id" class="lesson-expanded">
                  <!-- Video -->
                  <div class="lesson-video-wrap">
                    <div class="lesson-video-inner">
                      <div class="lesson-video-overlay">
                        <span class="lesson-video-tag">ВИДЕОУРОК</span>
                        <div class="lesson-video-title">{{ lesson.title.toUpperCase() }}</div>
                        <button class="lesson-play-btn" aria-label="Play video">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="white" fill-opacity="0.2"/>
                            <circle cx="18" cy="18" r="17" stroke="white" stroke-opacity="0.4" stroke-width="1"/>
                            <path d="M14 11.5L26 18L14 24.5V11.5Z" fill="white"/>
                          </svg>
                        </button>
                        <span class="lesson-video-sub">ИЗУЧАЕМ ИСТОРИЮ И СВЯЗИ</span>
                      </div>
                    </div>
                  </div>

                  <!-- Quiz -->
                  <div class="lesson-quiz">
                    <div class="lesson-quiz-title">{{ lesson.question }}</div>
                    <div class="lesson-options">
                      <label
                          v-for="(option, optIdx) in lesson.options"
                          :key="optIdx"
                          class="lesson-option"
                          :class="{
                          'lesson-option--selected': selectedOption === optIdx,
                          'lesson-option--correct': checked && optIdx === lesson.correctAnswer,
                          'lesson-option--wrong': checked && selectedOption === optIdx && optIdx !== lesson.correctAnswer,
                        }"
                      >
                        <span class="lesson-radio-wrap">
                          <input
                              type="radio"
                              class="lesson-radio-input"
                              :name="'quiz-' + lesson.id"
                              :value="optIdx"
                              v-model="selectedOption"
                              :disabled="checked"
                          />
                          <span class="lesson-radio-dot">
                            <span class="lesson-radio-inner"></span>
                          </span>
                        </span>
                        <span class="lesson-option-letter">{{ String.fromCharCode(65 + optIdx) }}.</span>
                        <span class="lesson-option-text">{{ option }}</span>
                      </label>
                    </div>

                    <div v-if="checked" class="lesson-result">
                      <span v-if="selectedOption === lesson.correctAnswer" class="lesson-result--success">
                        Correct! Well done.
                      </span>
                      <span v-else class="lesson-result--error">
                        Incorrect. The correct answer is option {{ String.fromCharCode(65 + lesson.correctAnswer) }}.
                      </span>
                    </div>

                    <button
                        class="lesson-check-btn"
                        :class="{ 'lesson-check-btn--disabled': selectedOption === null || checked }"
                        @click="check"
                        :disabled="selectedOption === null || checked"
                    >
                      Check
                    </button>
                  </div>
                </div>
              </transition>

              <div v-if="index < lessons.length - 1 && expandedLessonId !== lesson.id" class="divider"></div>
            </li>
          </ul>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const lessons = [
  {
    id: 0,
    title: "What Investment Really Is",
    watched: true,
    question: "What is an investment?",
    options: [
      "Buying something you like",
      "Spending money on entertainment",
      "Participating in something that can create value",
      "Trying to guess future prices",
    ],
    correctAnswer: 2,
  },
  {
    id: 1,
    title: "Why Blockchain Was Created",
    watched: true,
    question: 'What fundamental problem did blockchain set out to solve?',
    options: [
      'Making internet connections faster',
      'Eliminating the need for trusted intermediaries',
      'Creating a new programming language',
      'Replacing physical money with digital coins',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    title: 'The Old System: Intermediaries and Trust',
    watched: true,
    question: 'What role do intermediaries play in traditional financial systems?',
    options: [
      'They create value independently',
      'They eliminate all financial risk',
      'They verify and facilitate transactions between parties',
      'They provide free services to users',
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    title: 'The Old System: Access and Limitations',
    watched: false,
    question: 'Which is a major limitation of traditional investment systems?',
    options: [
      'Too many investment options available',
      'High minimum thresholds that exclude most people',
      'Excessive transparency in pricing',
      'Lack of government regulation',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    title: 'What Blockchain Actually Is',
    watched: false,
    question: 'Which best describes a blockchain?',
    options: [
      'A centralized database run by one company',
      'A distributed ledger maintained by a network of nodes',
      'A new type of internet protocol',
      'An encrypted messaging system',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    title: 'What Blockchain Really Solves',
    watched: false,
    question: 'What does blockchain enable that was previously impossible digitally?',
    options: [
      'Sending emails without a server',
      'Storing data on a single secure server',
      'Proving ownership and transfer without a central authority',
      'Encrypting all internet traffic',
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    title: 'What is Real World Asset (RWA)?',
    watched: false,
    question: 'What does "Real World Asset" mean in the context of blockchain?',
    options: [
      'Assets that only exist in digital form',
      'Physical or traditional assets represented on a blockchain',
      'Gaming assets with real money value',
      'Cryptocurrency backed by nothing',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    title: 'How Asset Tokenization Works',
    watched: false,
    question: 'What is asset tokenization?',
    options: [
      'Converting physical assets into password-protected files',
      'Creating a digital representation of a real-world asset on a blockchain',
      'Scanning documents for archival purposes',
      'Replacing paper money with coins',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    title: 'RWA vs Traditional Assets',
    watched: false,
    question: 'What key advantage do tokenized RWAs have over traditional assets?',
    options: [
      'They are always higher in value',
      'They require more paperwork to transfer',
      'They offer fractional ownership and 24/7 transferability',
      'They are not subject to any regulations',
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    title: 'Regulatory Landscape of RWA',
    watched: false,
    question: 'Why does regulatory clarity matter for RWA adoption?',
    options: [
      'It eliminates all investment risk',
      'It provides legal certainty for investors and issuers',
      'It removes the need for smart contracts',
      'It makes all assets free to trade',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    title: 'Investment Opportunities in RWA',
    watched: false,
    question: 'Which asset class is commonly tokenized as an RWA?',
    options: [
      'Thoughts and ideas',
      'Real estate, bonds, and commodities',
      'Video game skins',
      'Internet domain names only',
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    title: 'Risk Management in Digital Assets',
    watched: false,
    question: 'What is smart contract risk in the context of RWA investing?',
    options: [
      'The risk that prices rise too fast',
      'The risk of bugs or vulnerabilities in the contract code',
      'The risk of losing your private keys',
      'The risk of regulatory approval taking too long',
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    title: 'DeFi and RWA Integration',
    watched: false,
    question: 'How can DeFi protocols benefit from RWA integration?',
    options: [
      'By removing the need for stablecoins',
      'By providing real-world yield and collateral backed by physical assets',
      'By eliminating all lending activity',
      'By making all tokens non-transferable',
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    title: 'The Future of Real World Assets',
    watched: false,
    question: 'What is a likely long-term impact of RWA tokenization on global finance?',
    options: [
      'Reduction in the number of assets available to invest in',
      'Greater accessibility and liquidity for previously illiquid assets',
      'Elimination of all traditional financial institutions',
      'A single global currency replacing all others',
    ],
    correctAnswer: 1,
  },
]

const watchedCount = lessons.filter((l) => l.watched).length
const totalCount = lessons.length

const expandedLessonId = ref(null)
const selectedOption = ref(null)
const checked = ref(false)

function toggleLesson(lesson) {
  if (expandedLessonId.value === lesson.id) {
    // Close the expanded lesson
    expandedLessonId.value = null
    selectedOption.value = null
    checked.value = false
  } else {
    // Open the expanded lesson
    expandedLessonId.value = lesson.id
    selectedOption.value = null
    checked.value = false
  }
}

function check() {
  if (selectedOption.value !== null) {
    checked.value = true
  }
}

const expandedLesson = computed(() => {
  if (expandedLessonId.value === null) return null
  return lessons.find((l) => l.id === expandedLessonId.value) || null
})

function onEnter(el) {
  el.style.height = "auto"
  el.style.overflow = "hidden"
  const height = el.offsetHeight
  el.style.height = "0"
  el.offsetHeight // Trigger reflow
  el.style.height = height + "px"
}

function onLeave(el) {
  el.style.height = "0"
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0e1117;
}

.main-content {
  flex: 1;
}

.container {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 25px;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

/* Course Header */
.course-header {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.course-title {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.35;
}

.course-subtitle {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.45;
}

/* Progress Section */
.progress-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.progress-label {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
}

.progress-dots {
  display: flex;
  align-items: center;
  gap: 0;
  justify-content: space-between;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot--watched {
  background: linear-gradient(156deg, #1357db 30%, #53d3f7 100%);
  box-shadow:
      0 4px 35px rgba(18, 86, 218, 0.5),
      inset -2px 2px 5px rgba(85, 187, 254, 0.7),
      inset 0 -2px 4px rgba(131, 241, 255, 0.54);
}

.dot--pending {
  background: #36395e;
}

/* Lessons Section */
.lessons-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.lessons-list {
  display: flex;
  flex-direction: column;
}

.lesson-item {
  position: relative;
}

.lesson-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 15px 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: opacity 0.15s;
}

.lesson-row:hover {
  opacity: 0.75;
}

.lesson-row--watched {
  opacity: 1;
}

.lesson-row--active {
  opacity: 1;
}

.lesson-row--expanded {
  opacity: 1;
}

.lesson-check-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 9px;
}

.lesson-spacer {
  display: inline-block;
  width: 9px;
  flex-shrink: 0;
}

.lesson-badge {
  display: inline-flex;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #1d6ce4;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.12px;
  white-space: nowrap;
  flex-shrink: 0;
}

.lesson-badge--watched {
  opacity: 0.5;
}

.lesson-title-text {
  color: #fbfcff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
}

.lesson-title-text--watched {
  opacity: 0.5;
}

.divider {
  width: 100%;
  height: 1px;
  background: #1a1f2a;
}

/* Expanded Content */
.lesson-expanded {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  overflow: hidden;
}

.lesson-video-wrap {
  border-radius: 12px;
  border: 1.5px solid #1357db;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #080c14;
  position: relative;
}

.lesson-video-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0c1530 0%, #0a0e1a 40%, #060a12 100%);
}

.lesson-video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  text-align: center;
}

.lesson-video-tag {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  white-space: nowrap;
}

.lesson-video-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  max-width: 280px;
  text-shadow: 0 2px 20px rgba(19, 87, 219, 0.5);
}

.lesson-play-btn {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.lesson-play-btn:hover {
  transform: scale(1.1);
}

.lesson-video-sub {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 9px;
  letter-spacing: 0.18em;
  white-space: nowrap;
}

.lesson-quiz {
  border: 1px solid #56576e;
  border-radius: 12px;
  padding: 23px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lesson-quiz-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
}

.lesson-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 15px;
}

.lesson-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.lesson-option--correct .lesson-option-text,
.lesson-option--correct .lesson-option-letter {
  color: #4ade80;
}

.lesson-option--wrong .lesson-option-text,
.lesson-option--wrong .lesson-option-letter {
  color: #f87171;
}

.lesson-radio-wrap {
  position: relative;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.lesson-radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.lesson-radio-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  flex-shrink: 0;
  transition: background 0.15s;
}

.lesson-option--selected .lesson-radio-dot {
  background: #fff;
}

.lesson-radio-inner {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.15s;
}

.lesson-option--selected .lesson-radio-inner {
  background: #1d6ce4;
}

.lesson-option-letter {
  color: #fbfcff;
  font-size: 12px;
  line-height: 1.4;
  flex-shrink: 0;
}

.lesson-option-text {
  color: #fbfcff;
  font-size: 12px;
  line-height: 1.4;
}

.lesson-result {
  font-size: 13px;
  line-height: 1.4;
}

.lesson-result--success {
  color: #4ade80;
  background: rgba(74, 222, 128, 0.08);
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
}

.lesson-result--error {
  color: #f87171;
  background: rgba(248, 113, 113, 0.08);
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
}

.lesson-check-btn {
  display: flex;
  height: 46px;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: linear-gradient(156deg, #1357db 73.82%, #53d3f7 108.58%);
  box-shadow:
      0 4.519px 38.972px 0 rgba(18, 86, 218, 0.5),
      0 -2.259px 4.519px 0 rgba(132, 241, 255, 0.54) inset,
      -2.259px 2.259px 5.422px 0 #55bbfe inset;
  color: #fbfcff;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  transition: opacity 0.2s, transform 0.1s;
  width: 100%;
  border: none;
  cursor: pointer;
}

.lesson-check-btn:hover:not(.lesson-check-btn--disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.lesson-check-btn--disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}

/* Expansion Transition */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}

/* Responsive */
@media (max-width: 480px) {
  .container {
    padding: 28px 20px;
    gap: 36px;
  }

  .course-title {
    font-size: 22px;
  }

  .course-subtitle {
    font-size: 16px;
  }

  .progress-label {
    font-size: 16px;
  }

  .dot {
    width: 13px;
    height: 13px;
  }

  .lesson-video-title {
    font-size: 16px;
  }

  .lesson-quiz-title {
    font-size: 16px;
  }
}

@media (min-width: 769px) {
  .container {
    padding: 48px 40px;
  }

  .lesson-row {
    padding: 18px 0;
  }
}
</style>
