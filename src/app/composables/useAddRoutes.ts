import type { Router, RouteRecordName, RouteRecordRaw } from 'vue-router'

/**
 * Расширение по добавление динамический маршрутов
 * @param router роутер
 * @param routes список маршрутов
 * @param parent родитель для маршрутов
 */
export function useAddRoutes(
  router: Router,
  routes: Array<RouteRecordRaw>,
  parent?: RouteRecordName,
) {
  for (const route of routes) {
    if (parent) {
      router.addRoute(parent, route)
    } else {
      router.addRoute(route)
    }
  }
}
