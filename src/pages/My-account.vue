<template>
  <div class="account-page">
    <main class="account-main">
      <div class="account-container">

        <h1 class="account-title">My Account</h1>

        <!-- Progress dots -->
        <div class="account-dots" role="progressbar" :aria-valuenow="completedCount" :aria-valuemax="totalCount">
          <span
              v-for="i in totalCount"
              :key="i"
              class="account-dot"
              :class="i <= completedCount ? 'account-dot--active' : 'account-dot--pending'"
          ></span>
        </div>

        <!-- Stats -->
        <div class="account-stats">
          <p class="account-stat-line">
            <span class="account-stat-num">{{ completedCount }}</span>
            <span class="account-stat-text"> lessons out of {{ totalCount }} completed</span>
          </p>
          <p class="account-stat-line">
            <span class="account-stat-num">{{ remainingCount }}</span>
            <span class="account-stat-text"> more to unlock what comes next</span>
          </p>
        </div>

        <!-- Locked reward -->
        <div class="account-locked-box">
          <span class="account-locked-text">Complete all tests to unlock the reward</span>
        </div>

        <!-- Achievement -->
        <div class="account-achievement">
          <h2 class="account-achievement-title">Your Achievement</h2>
          <p class="account-achievement-sub">Complete all tests to unlock your achievement</p>
        </div>

        <!-- CTA -->
        <div class="account-cta-wrap">
          <button class="account-cta-btn" @click="goToCourse">
            Go to Course Lessons
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const completedCount = 6
const totalCount = 14
const remainingCount = totalCount - completedCount

function goToCourse() {
  router.push('/course')
}
</script>

<style scoped>
.account-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0e1117;
}

.account-main {
  flex: 1;
}

.account-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 25px 48px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Title */
.account-title {
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.3;
}

/* Progress dots */
.account-dots {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.account-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  flex-shrink: 0;
}

.account-dot--active {
  background: linear-gradient(156deg, #1357db 30%, #53d3f7 100%);
  box-shadow:
      0 4px 35px rgba(18, 86, 218, 0.5),
      inset -2px 2px 5px rgba(85, 187, 254, 0.7),
      inset 0 -2px 4px rgba(131, 241, 255, 0.54);
}

.account-dot--pending {
  background: #36395e;
}

/* Stats */
.account-stats {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.account-stat-line {
  display: flex;
  align-items: baseline;
  gap: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.account-stat-num {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.account-stat-text {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

/* Locked reward box */
.account-locked-box {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
}

.account-locked-text {
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
}

/* Achievement section */
.account-achievement {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.account-achievement-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.account-achievement-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

/* CTA */
.account-cta-wrap {
  border-radius: 16px;
  background: #080d18;
  border: 1px solid rgba(19, 87, 219, 0.35);
  padding: 10px;
  box-shadow: 0 0 40px rgba(19, 87, 219, 0.2), 0 0 80px rgba(19, 87, 219, 0.08);
}

.account-cta-btn {
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(156deg, #1357db 73.82%, #53d3f7 108.58%);
  box-shadow:
      0 4px 32px rgba(18, 86, 218, 0.55),
      0 -2px 5px rgba(132, 241, 255, 0.54) inset,
      -2px 2px 5px #55bbfe inset;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.account-cta-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 480px) {
  .account-container {
    padding: 28px 20px 40px;
    gap: 24px;
  }

  .account-title {
    font-size: 24px;
  }

  .account-dot {
    width: 13px;
    height: 13px;
  }

  .account-stat-num {
    font-size: 20px;
  }

  .account-stat-text {
    font-size: 15px;
  }
}

@media (min-width: 769px) {
  .account-container {
    padding: 48px 40px 60px;
  }
}
</style>
