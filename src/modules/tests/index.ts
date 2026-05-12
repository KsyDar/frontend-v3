import type { RouteRecordRaw } from "vue-router";
import { useModule } from "@/app/composables";
import { createAppMeta } from "@/app/router";

const TestsList = () => import('./views/TestsList.vue')
const TestEdit = () => import('./views/TestEdit.vue')

// Можно вынести в router.ts
export const testsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/tests',
    name: 'DefaultTests',
    meta: createAppMeta({}),
    children: [
      {
        path: '',
        name: 'Tests',
        component: TestsList,
      },
      {
        path: ':testId',
        name: 'Test',
        component: TestEdit,
        children: [],
      }
    ],
  }
]


export const testsModule = useModule({
  name: 'tests',
  routes: testsRoutes
})

export { useTestsStore } from './store/testsStore'
