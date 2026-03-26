<template>
  <div class="base">
    <BaseLightContent v-if="isLight" />
    <template v-else>
      <ChallengeSection />
      <BeliefSection />
      <StructureSection />
      <FinalSection />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import FinalSection from "@/components/FinalSection.vue";
import BeliefSection from "@/components/BeliefSection.vue";
import ChallengeSection from "@/components/ChallengeSection.vue";
import StructureSection from "@/components/StructureSection.vue";
import BaseLightContent from "@/components/BaseLightContent.vue";

const store = useStore();
const isLight = computed(() => store.getters.theme === "light");
</script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: 120px;
}

@media (max-width: 768px) {
  .base {
    gap: 50px;
    padding-top: 50px;
  }
}
</style>
