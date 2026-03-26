<template>
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
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: 'What is this course about?',
    answer: 'This course explains the basics of investment, blockchain, tokenization and RWA in simple language. It is designed for people with no prior technical background.',
  },
  {
    question: 'How long does it take?',
    answer: 'The full course takes about 30 minutes. It consists of 14 short lessons with video and test format.',
  },
  {
    question: 'Do I need prior knowledge?',
    answer: 'No. The course is made for beginners and uses simple examples instead of technical explanations.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes. The course itself is free to complete. A separate $1 practice step is optional and comes after learning.',
  },
  {
    question: 'What happens after the course?',
    answer: 'After finishing the lessons, the user can pass the final test and unlock the course achievement, or try the optional $1 practice step.',
  },
  {
    question: 'What is the $1 practice step?',
    answer: 'It is a small practical action designed to reinforce understanding. It is presented as a learning step, not as pressure to invest.',
  },
]
</script>

<style scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 60px;
}

.faq-title {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.faq-card {
  border: 1px solid #1e2330;
  border-radius: 14px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #111520;
}

.faq-question {
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
}

.faq-answer {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.8;
}

.faq-cta {
  padding-top: 10px;
}

.faq-chat-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 14px;
  background: linear-gradient(156deg, #1357db 73.82%, #53d3f7 108.58%);
  box-shadow:
    0 4px 34.5px rgba(18, 86, 218, 0.5),
    0 -2px 4px rgba(132, 241, 255, 0.54) inset,
    -2px 2px 4.8px #55bbfe inset;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  font-family: inherit;
  text-decoration: none;
  transition: opacity 0.2s;
}

.faq-chat-btn:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
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
  .faq-question {
    font-size: 18px;
  }
  .faq-answer {
    font-size: 15px;
  }
}
</style>
