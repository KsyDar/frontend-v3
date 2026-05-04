<script setup lang="ts">
    import { ref } from "vue";
    import { useTestsStore } from "@/modules/tests";
    import { useTests } from "../composables/useTests.ts";

    // Вариант структуры script setup
    //  Props, Emits
    type PropType = {
        userId: string
    }
    const props = defineProps<PropType>()

    type EmitType = {
        updated: []
    }
    const emits = defineEmits<EmitType>()

    // Store, composables
    const testsStore = useTestsStore()
    const { tests } = useTests()

    // Остальная логика компонента
    const counter = ref(0);
    const addNumToCounter = (num: number) => counter.value += num;

    // Экспорты
    defineExpose({ counter })
</script>

<template>
    <h1 class="ma-0">Tests</h1>
    <div class="example mt-10">Tests list</div>
</template>

<style scoped lang="scss">
.example {
    @include media('<sm') {
        color: red;
    }
}
</style>
