import type { Router, RouteRecordName, RouteRecordRaw } from 'vue-router'

import { useAddRoutes } from '@/platform/composables/useAddRoutes'

export interface ModuleOptions {
  name: string
  /** маршруты модуля */
  routes?: Array<RouteRecordRaw>
  /** родитель маршрутов модуля */
  routesParent?: RouteRecordName
}

export interface Module {
  initRouter: (router: Router) => void
}

export function useModule(module: ModuleOptions): Module {
  const initRouter = (router: Router) => {
    if (module.routes) {
      useAddRoutes(router, module.routes, module.routesParent)
    }
  }

  return {
    initRouter,
  }
}
