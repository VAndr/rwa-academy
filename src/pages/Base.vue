<template>
  <div class="base">
    <ChallengeSection />
    <BeliefSection />
    <StructureSection />
    <FinalSection />
  </div>
</template>
<script setup>

import FinalSection from "@/components/FinalSection.vue";
import BeliefSection from "@/components/BeliefSection.vue";
import ChallengeSection from "@/components/ChallengeSection.vue";
import StructureSection from "@/components/StructureSection.vue";
</script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: 120px;
}
</style>