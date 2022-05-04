import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  title: '个人博客',
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
  },
  chainWebpack(memo) {
    // 修改less-loader的css-modules的配置，添加文件名作为前缀
    memo.module
      .rule('less')
      .oneOf('css-modules')
      .use('css-loader')
      .options({
        modules: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      });
  },
});
