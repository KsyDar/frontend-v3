<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "primevue";

interface Props extends /* @vue-ignore */ ButtonProps {}

defineProps<Props>()
// Вариант 1
const rootScheme = ref({
  borderRadius: '4px',
  gap: '6px',
  paddingX: '12px',
  paddingY: '6px',
  smPaddingX: '8px',
  smPaddingY: '4px',
  lg: {
    paddingX: '20px',
    paddingY: '8px',
    gap: '20px',
  },

  primary: {
    color: '{surface.0}',
    background: '{primary.600}',
    borderColor: '{primary.600}',
    hoverBackground: '{primary.700}',
    // hoverColor: '{primary.700}'
  },

  extend: {
    lgGap: '20px',
  },

  css: ({ dt }) => `
    .p-button.p-button-lg {
      gap: ${dt('button.lg.gap')};
    }
  `,
});
</script>

<template>
    <Button :dt="rootScheme" />
</template>

<style scoped>
/** Вариант 2
//.p-button {
//  --p-button-primary-background: #344DD3;
//} */

.p-button.p-button-lg {
  gap: 20px;
}
</style>
