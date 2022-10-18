import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ fastRefresh: true }),
    tsconfigPaths(),
    EnvironmentPlugin('all'),
  ],
  server: {
    port: 3000,
    hmr: true,
  },
});
