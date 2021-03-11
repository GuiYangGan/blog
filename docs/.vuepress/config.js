module.exports = {
  base: '/blog/',
  title: 'GanGuiyang个人网站',
  description: 'GanGuiyang 的个人网站',
  serviceWorker: true,
  head: [
    ["meta", { name: "description", content: "技术文章" }]
  ],
  themeConfig: {
    sidebar: false,
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/GuiYangGan/blog',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新'
          }
        },
        navbar: [
          { text: '首页', link: '/' },
          { text: '关于我', link: 'https://github.com/GuiYangGan' }
        ]
      }
    }
  }
}