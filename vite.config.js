import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        menu: resolve(root, 'menu.html'),
        story: resolve(root, 'story.html'),
        contact: resolve(root, 'contact.html'),
      },
    },
  },
});
