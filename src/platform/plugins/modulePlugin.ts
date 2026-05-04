import type { Module } from '@/platform/composables/useModule'
import type { Router } from 'vue-router'
import type { App } from 'vue'

export const createModules = (modules: Array<Module>, router?: Router) => {
  const install = (_: App) => {
    if (router) {
      for (const module of modules) {
        module.initRouter(router)
      }
    }
  }
  return { install }
}
