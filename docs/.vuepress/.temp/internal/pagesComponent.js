import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/README.vue")),
  "/main/": defineAsyncComponent(() => import(/* webpackChunkName: "v-14f0b23d" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/main/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/404.html.vue")),
}
