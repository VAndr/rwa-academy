<template>
  <div class="layout">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initTheme } from "@/help/theme.js";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

onMounted(initTheme)
</script>

<style scoped>
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: clamp(16px, 4vw, 40px);
}
</style>
