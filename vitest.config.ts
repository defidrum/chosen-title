import { defineConfig, mergeConfig, UserConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import tsconfigpaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const vitestConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
};

const mainConfig: UserConfig = {
  plugins: [
    react(),
    tsconfigpaths(),
    ViteEjsPlugin({
      VERSION: JSON.stringify(process.env.npm_package_version),
    }),
  ],
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, "dist"),
  },
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  root: resolve(__dirname, "./src"),
  server: {
    port: 3000,
    strictPort: true,
  },
};

const isLocal = process.env.NODE_ENV === 'local';
const isDev = process.env.NODE_ENV === 'dev';
const isTest = process.env.NODE_ENV === 'test';
const isProd = process.env.NODE_ENV === 'prod';

const config = 
  (isLocal || isDev || isTest || isProd) 
    ? mergeConfig(mainConfig, vitestConfig)
    : mainConfig;

export default defineConfig(config);