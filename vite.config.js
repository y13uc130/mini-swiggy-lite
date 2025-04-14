import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  esbuild: {
    loader: 'jsx', // 🛠 Force JSX support in `.js` files
    include: /src\/.*\.(js|jsx)$/, // only apply to files in your `src/` folder
  },
});
