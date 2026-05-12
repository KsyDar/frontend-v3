import { LayoutEnums } from "@/app/router/enums/LayoutEnums.ts";

export const createAppMeta = ({layout = LayoutEnums.Home}: {
  layout?: LayoutEnums
}) => {
  return {
    layout,
  }
}
