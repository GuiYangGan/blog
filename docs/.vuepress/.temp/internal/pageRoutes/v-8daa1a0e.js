import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-8daa1a0e",
    path: "/",
    component: Vuepress,
    meta: { title: "首页" },
  },
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/README.md",
    redirect: "/",
  },
]
