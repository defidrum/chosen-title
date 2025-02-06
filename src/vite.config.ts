import {Alias, defineConfig, mergeConfig} from 'vite'
import {ViteEjsPlugin} from 'vite-plugin-ejs'
import tsconfigpaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

import path from "path"

import viteBaseConfig from './vitest.config'

export default mergeConfig(
  viteBaseConfig, 
  defineConfig({
    plugins: [
      react(),
      tsconfigpaths(),
      ViteEjsPlugin({
        VERSION: JSON.stringify(process.env.npm_package_version),
      })
  ],
  build: {
    sourcemap: true,
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      output: {
        manualChunks: {
          // if needed 
        }
      }
    }
  },
  define: {
    global: "window",
  },
  resolve: {
  },
  root: path.resolve(__dirname, "./src"),
  server: {
    proxy: {
      "/actuator": "http://localhost:8080",
      "/api": "http://localhost:8080"
    },
    port: 3000,
    strictPort: true
    }
  })
)