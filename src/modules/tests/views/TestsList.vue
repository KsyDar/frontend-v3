<script setup lang="ts">
    import UIButton from "@/shared/components/ui/UIButton.vue";

    // Вариант структуры script setup
    //  Props, Emits

    // Store, composables

    // Остальная логика компонента

    // Экспорты
</script>

<template>
    <h1 class="ma-0">Tests</h1>
    <div class="example mt-10">Tests list</div>
    <UIButton />
</template>

<style scoped lang="scss">
.example {
    @include media('<sm') {
        color: red;
    }
}
</style>
