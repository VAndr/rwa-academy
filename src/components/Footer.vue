<template>
  <div class="footer">
    <div>
      © 2026 Autentic Global
    </div>
    <div class="links">
      <a href="#">{{ t("footer.legal") }}</a>
      <a href="#">{{ t("footer.disclaimer") }}</a>
    </div>
  </div>
</template>

<script setup>
import i18n from "@/localization/localization.js";

const t = (key) => i18n.global.t(key);
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--separator-line-color);
  padding: 50px 0;
  font-size: 18px;
}
.links {
  display: flex;
  gap: 30px;
}
.links a {
  text-decoration: underline;
  color: #55BBFE;
}

@media (max-width: 768px) {
  .footer {
    padding: 25px 0;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
  .links {
    gap: 20px;
  }
}
</style>
