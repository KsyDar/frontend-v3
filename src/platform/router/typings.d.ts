import type { LayoutEnums } from './enums/LayoutEnums'

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout: LayoutEnums
  }
}
