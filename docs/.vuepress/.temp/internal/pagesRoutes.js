import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from '/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes1 from '/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
