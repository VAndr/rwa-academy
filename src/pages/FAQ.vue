<template>
  <div class="home-container">
    <!-- Section heading -->
    <h1 class="home-title">How It Works</h1>
    <p class="home-subtitle">A simple step-by-step learning flow</p>

    <!-- Steps cards -->
    <div class="steps-grid">
      <div
          v-for="step in steps"
          :key="step.number"
          class="step-card"
      >
        <!-- Watermark number -->
        <span class="step-number">{{ step.number }}</span>

        <!-- Step title -->
        <h2 class="step-title">{{ step.title }}</h2>

        <!-- Step description -->
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>

    <!-- Apply section -->
    <div class="apply-section">
      <h2 class="apply-title">Apply What You Learned</h2>
      <p class="apply-text">
        Take a small practical step starting from $1 and see how it works in reality.
      </p>
    </div>

    <!-- CTA Button -->
    <button class="cta-button">
      <span class="cta-text">Start Course</span>
      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7H20M20 7L14 1M20 7L14 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script setup>

const steps= [
  {
    number: '01',
    title: 'Watch Short Lessons',
    description: 'Each lesson takes 2–3 minutes and explains one idea in simple terms.',
  },
  {
    number: '02',
    title: 'Take a Quick Test',
    description: 'After each lesson, answer a few questions to confirm your understanding.',
  },
  {
    number: '03',
    title: 'Track Your Progress',
    description: "See how many lessons you've completed and how much is left.",
  },
  {
    number: '04',
    title: 'Unlock Your Achievement',
    description: 'Complete all tests to unlock your course achievement.',
  },
]
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home-container {
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.home-title {
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  margin-bottom: 16px;
}

.home-subtitle {
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 145%;
  margin-bottom: 16px;
}

/* Steps grid */
.steps-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  position: relative;
  border: 1px solid #1D6CE4;
  border-radius: 12px;
  padding: 36px 23px 23px 38px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-number {
  position: absolute;
  top: 12px;
  left: 16px;
  color: #36395E;
  font-size: 50px;
  font-weight: 800;
  line-height: 145%;
  user-select: none;
}

.step-title {
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
}

.step-description {
  color: #FBFCFF;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
}

/* Apply section */
.apply-section {
  margin-top: 16px;
}

.apply-title {
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  margin-bottom: 16px;
}

.apply-text {
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 145%;
}

/* CTA Button */
.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 40px;
  border-radius: 12px;
  background: linear-gradient(156deg, #1357DB 73.82%, #53D3F7 108.58%);
  box-shadow:
      0 4px 34.5px rgba(18, 86, 218, 0.5),
      0 -2px 4px rgba(132, 241, 255, 0.54) inset,
      -2px 2px 4.8px #55BBFE inset;
  border: none;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 135%;
  cursor: pointer;
  transition: opacity 200ms ease;
}

.cta-button:hover {
  opacity: 0.9;
}

.cta-button:active {
  opacity: 0.8;
}

.cta-text {
  font-weight: 500;
}

.cta-button svg {
  width: 21px;
  height: 14px;
  flex-shrink: 0;
}
</style>
