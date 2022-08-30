import { defineConfig } from 'dumi';

export default defineConfig({
  title: '个人资料平台',
  favicon: 'https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/mizutokilogo.png',
  logo: 'https://wonganber-picgo.oss-cn-hangzhou.aliyuncs.com/picgo/mizutokilogo.png',
  history: {
    type: 'hash'
  },
  mfsu : {},
  webpack5: {},
  dynamicImport: {},
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
