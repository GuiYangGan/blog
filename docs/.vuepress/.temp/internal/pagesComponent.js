import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/README.vue")),
  "/study/": defineAsyncComponent(() => import(/* webpackChunkName: "v-d7188082" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/study/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/Users/ganguiyang/Downloads/vuepress-starter/docs/.vuepress/.temp/pages/404.html.vue")),
}
