import path from 'path'
import postcss from './postcss.config.js'
import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
  css: {
    postcss,
  },
  // build: {
  //   commonjsOptions: {
  //     include: ['tailwind-config.cjs', 'node_modules/**'],
  //   },
  // },
  // optimizeDeps: {
  //   include: ['tailwind-config'],
  // },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     'tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),
  //   },
  // },
})
