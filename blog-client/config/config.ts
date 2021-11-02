import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
  title: '个人博客',
  favicon: '/favicon.ico',
});
