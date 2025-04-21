import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@pages',
        replacement: '/src/pages',
      },
      {
        find: '@icons',
        replacement: '/src/assets/icons',
      },
      {
        find: '@images',
        replacement: '/src/assets/images',
      },
    ],
  },
});
