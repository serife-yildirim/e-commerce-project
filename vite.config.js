import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Build çıktısı için hedef klasör
    sourcemap: true, // Debug için source map ekler
  }
});
