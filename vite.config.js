import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    /* host: '192.168.0.11' */
    host:'10.0.0.101'
  }
});




// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [react()],
}) */