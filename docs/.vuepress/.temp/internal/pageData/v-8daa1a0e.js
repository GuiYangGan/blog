export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "actions": [
      {
        "text": "进入 →",
        "link": "/main/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "知识整理",
        "details": "前端知识点整理"
      },
      {
        "title": "CSS",
        "details": "一些CSS样式小技巧"
      },
      {
        "title": "算法",
        "details": "常见的算法"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present GanGuiyang"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1615456935000,
    "contributors": [
      {
        "name": "GanGuiYang",
        "email": "150938420@qq.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
