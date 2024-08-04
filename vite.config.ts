import preact from '@preact/preset-vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

export default defineConfig({
      // plugins: [preact()], // does not work
      plugins: [react()], // works
});

