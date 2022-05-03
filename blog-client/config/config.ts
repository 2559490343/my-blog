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
});
