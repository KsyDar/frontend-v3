<script setup lang="ts">
    import UIButton from "@/shared/components/ui/UIButton.vue";
    import UITextField from "@/shared/components/ui/UITextField.vue";

    // Вариант структуры script setup
    //  Props, Emits

    // Store, composables

    // Остальная логика компонента

    // Экспорты
</script>

<template>
  <div class="page">
    <h1 class="my-0">Компоненты на PrimeVue unstyled mode</h1>

    <div class="example my-5">Кнопка</div>
    <div class="btns">
      <UIButton
          label="Общий отчет"
          icon="pi pi-search"
          size="small"
      />
      <UIButton
          label="Общий отчет"
          icon="pi pi-search"
          disabled
      />
      <UIButton icon="pi pi-search" />
      <UIButton icon="pi pi-search" rounded />
      <UIButton icon="pi pi-search" size="small" rounded />
    </div>

    <div class="example my-5">Тестовое поле</div>
    <UITextField label="Поиск" />
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.example {
  font-weight: 600;

    @include media('<sm') {
        color: red;
    }
}

.btns {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
