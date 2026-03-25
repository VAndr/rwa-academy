<template>
  <div class="faq-page">
    <main class="faq-main">
      <div class="faq-container">

        <h1 class="faq-title">FAQ</h1>

        <ul class="faq-list">
          <li v-for="(item, index) in faqs" :key="index" class="faq-card">
            <h2 class="faq-question">{{ item.question }}</h2>
            <p class="faq-answer">{{ item.answer }}</p>
          </li>
        </ul>

        <div class="faq-cta">
          <a href="#" class="faq-chat-btn">
            Chat with us
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: 'What is this course about?',
    answer:
        'This course explains the basics of investment, blockchain, tokenization and RWA in simple language. It is designed for people with no prior technical background.',
  },
  {
    question: 'How long does it take?',
    answer:
        'The full course takes about 30 minutes. It consists of 14 short lessons with video and test format.',
  },
  {
    question: 'Do I need prior knowledge?',
    answer:
        'No. The course is made for beginners and uses simple examples instead of technical explanations.',
  },
  {
    question: 'Is it really free?',
    answer:
        'Yes. The course itself is free to complete. A separate $1 practice step is optional and comes after learning.',
  },
  {
    question: 'What happens after the course?',
    answer:
        'After finishing the lessons, the user can pass the final test and unlock the course achievement, or try the optional $1 practice step.',
  },
  {
    question: 'What is the $1 practice step?',
    answer:
        'It is a small practical action designed to reinforce understanding. It is presented as a learning step, not as pressure to invest.',
  },
]
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0e1117;
}

.faq-main {
  flex: 1;
}

.faq-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 25px 48px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.faq-title {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 5px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-card {
  border: 1px solid #1e2330;
  border-radius: 12px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #111520;
}

.faq-question {
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
}

.faq-answer {
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
}

.faq-cta {
  display: flex;
  padding-top: 10px;
}

.faq-chat-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 14px;
  background: linear-gradient(156deg, #1357db 73.82%, #53d3f7 108.58%);
  box-shadow:
      0 4.519px 38.972px 0 rgba(18, 86, 218, 0.5),
      0 -2.259px 4.519px 0 rgba(132, 241, 255, 0.54) inset,
      -2.259px 2.259px 5.422px 0 #55bbfe inset;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.1s;
}

.faq-chat-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

@media (max-width: 480px) {
  .faq-container {
    padding: 28px 20px 40px;
    gap: 20px;
  }

  .faq-title {
    font-size: 24px;
  }

  .faq-question {
    font-size: 16px;
  }

  .faq-card {
    padding: 18px;
  }
}

@media (min-width: 769px) {
  .faq-container {
    padding: 48px 40px 60px;
  }

  .faq-question {
    font-size: 18px;
  }
}
</style>
