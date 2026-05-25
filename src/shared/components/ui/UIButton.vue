<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "primevue";

interface Props extends /* @vue-ignore */ ButtonProps {
  disabled?: boolean
  size?: 'small' | 'middle' | 'large',
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'middle',
  rounded: false,
})

const rootClass = computed(() => [
  'ui-button',
  `ui-button--${props.size}`,
  {
    'ui-button--disabled': props.disabled,
    'ui-button--rounded': props.rounded
  }
])
</script>

<template>
  <Button
      unstyled
      :pt:root="rootClass"
      pt:label="ui-button__label"
      pt:icon="ui-button__icon"
  />
</template>

<style scoped lang="scss">
.ui-button {
  --ui-button-rounded-padding: 8px;
  --ui-button-size: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: #344dd3;
  border: none;
  border-radius: 3px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;

  &:not(:disabled):hover {
    background-color: #2d43ba;
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }

  &--disabled {
    background-color: #9aa6e9;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }

  &--small {
    --ui-button-rounded-padding: 4px;
    --ui-button-size: 32px;

    min-height: var(--ui-button-size);
    padding: 4px 12px;
    font-size: 12px;
    line-height: 18px;
    gap: 4px;

    .ui-button__icon {
      font-size: 14px;
    }
  }

  &--middle {
    --ui-button-rounded-padding: 8px;
    --ui-button-size: 40px;

    min-height: var(--ui-button-size);
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
    gap: 6px;

    .ui-button__icon {
      font-size: 16px;
    }
  }

  &--large {
    --ui-button-rounded-padding: 10px;
    --ui-button-size: 40px;

    min-height: var(--ui-button-size);
    padding: 10px 20px;
    font-size: 16px;
    line-height: 24px;
    gap: 8px;

    .ui-button__icon {
      font-size: 20px;
    }
  }

  &--rounded {
    min-width: var(--ui-button-size);
    padding: var(--ui-button-rounded-padding);
    border-radius: 50%;
  }

  &__label,
  &__icon {
    color: inherit;
  }
}
</style>
