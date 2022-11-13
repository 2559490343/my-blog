import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/blog-server': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
  title: '皮皮博客',
  favicon: '/favicon.ico',
  dva: {
    immer: true,
    hmr: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '~': '/src/ppComponents',
    '~icons': '/src/ppComponents/Icon/icons',
  },
  chainWebpack(config) {
    // 修改less-loader的css-modules的配置，添加文件名作为前缀
    config.module
      .rule('less')
      .oneOf('css-modules')
      .use('css-loader')
      .options({
        modules: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      });
    // 配置自定义鼠标图标cur文件引入loader
    config.module
      .rule('url-loader')
      .test(/\.(cur)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end();
  },
  // dynamicImport: {
  //   loading: '@/components/Loading',
  // },
});
