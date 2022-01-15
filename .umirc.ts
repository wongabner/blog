import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cn.abner.wong✨',
  favicon: 'https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/mizutokilogo.png?download=true',
  logo: 'https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/mizutokilogo.png?download=true',
  history: {
    type: 'hash'
  },
  hash: true,
  base: '/blog/',
  publicPath: '/blog/',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/wongabner',
    },
  ],
  // more config: https://d.umijs.org/config
});
