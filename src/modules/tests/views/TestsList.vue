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
  <div class="flex flex-col items-center justify-center w-full mt-20">
    <p class="font-medium text-2xl">Компоненты на Volt</p>

    <div class="example my-3">Кнопка</div>
    <UIButton label="Общий отчет" />

    <div class="example my-3">Тестовое поле</div>
    <UITextField placeholder="Поиск" />
  </div>
</template>

<style scoped lang="scss">
.example {
    @include media('<sm') {
        color: red;
    }
}
</style>
