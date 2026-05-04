import { ref } from "vue";

export function useTests() {
  const tests = ref([])
  return { tests }
}
