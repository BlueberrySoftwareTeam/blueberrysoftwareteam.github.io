import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "蓝色应用",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页内容',
    lastUpdatedText: '更新时间',
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '规范', link: '/specifications.html' },
      { text: '蓝色软件', link: '/apps.html' },
      { text: '资源', link: '/resources.html' },
      { text: '关于', link: '/about.html' }
    ],

    sidebar: [
      /*{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }*/
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" t="1672577881896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1932" width="128" height="128"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" p-id="1933"></path></svg>'
        },
        link: 'https://gitee.com/BlueberrySoftwareTeam'
      },
      { icon: 'github', link: 'https://github.com/BlueberrySoftwareTeam' }
    ],

    editLink: {
      pattern: 'https://gitee.com/BlueberrySoftwareTeam/edit/master/:path',
      text: '在 Gitee 上编辑此页面',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索"
          },
          modal: {
            displayDetails: '显示具详情信息',
            resetButtonTitle: '清空内容',
            backButtonTitle: '关闭搜索',
            noResultsText: '未找到',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '进入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: '退出'
            }
          }
        }
      }
    },

    outline: {
      level: 'deep'
    }
  }
})
