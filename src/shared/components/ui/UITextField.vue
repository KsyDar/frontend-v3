<script setup lang="ts">
import type { InputTextProps } from "primevue";
import { ref } from "vue";

interface Props extends /* @vue-ignore */ InputTextProps {
  label?: string;
  icon?: string;
}

const props = defineProps<Props>();

const rootScheme = ref({
  borderRadius: '3px',
  background: '{surface.0}',
  color: '{surface.50}',
  focusBorderColor: '{surface.950}',
  sm: {
    paddingX: '16px',
    paddingY: '6px',
    fontSize: '14px',
  },

  // extend: {
  //   lgGap: '20px',
  // },
  //
  // css: ({ dt }) => `
  //   .p-button.p-button-lg {
  //     gap: ${dt('button.lg.gap')};
  //   }
  // `,
});

const floatScheme = ref({
  in: {
    inputPaddingTop: '22px',
    inputPaddingBottom: '6px',
  },
  activeColor: '{primary.700}',
});
</script>

<template>
  <FloatLabel variant="in" :dt="floatScheme">
    <IconField>
      <InputIcon v-if="props.icon" :class="props.icon" />
      <InputText
          id="username"
          v-bind="$attrs"
          :dt="rootScheme"
          size="small"
      />
    </IconField>

    <label for="username">{{ props.label }}</label>
  </FloatLabel>
</template>

<style scoped>

</style>
