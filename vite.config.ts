import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html'),
      },
    },
    outDir: 'build',
  },
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@lib': path.resolve(__dirname, 'src/shared/lib'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@modules': path.resolve(__dirname, 'src/modules'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData:
          '@use "@assets/styles/global.scss";',
      }
    },
  }
});
