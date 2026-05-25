<script setup lang="ts">
import type { ButtonProps } from "primevue";

interface Props extends /* @vue-ignore */ ButtonProps {}

// const props = withDefaults(defineProps<Props>(), {
//   disabled: false,
//   size: 'middle',
//   rounded: false,
// })

const value = defineModel<string>()
</script>

<template>
  <FloatLabel pt:root="ui-textfield">
    <InputText id="username" v-model="value" placeholder=" " />
    <label for="username">Username</label>
  </FloatLabel>
</template>

<style scoped lang="scss">
.ui-textfield {
  position: relative;
  display: inline-block;

  input {
    padding: 1.25rem 0.75rem 0.5rem;
  }

  label {
    position: absolute;
    left: 0.75rem;
    top: 1rem;
    transition: 0.2s ease;
    pointer-events: none;
    color: #777;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 0.25rem;
    font-size: 0.75rem;
  }
}
</style>
