import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @protobufjs/inquire uses eval()/dynamic require detection which causes
      // warnings during bundling. Provide a safe browser shim that returns
      // undefined so protobufjs falls back to the browser-safe code path.
      '@protobufjs/inquire': path.resolve(__dirname, 'shims/inquire.ts'),
    },
  },
  plugins: [react(), tailwind()],
  build: {
    outDir: '../../dist/client',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        sourcemapFileNames: '[name].js.map',
      },
    },
  },
});
