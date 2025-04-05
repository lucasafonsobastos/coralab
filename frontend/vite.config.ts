import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root:'.',
    plugins: [react()],
    server: {
        port: 5173,
        host: '0.0.0.0',
        proxy: {
            '/api' : {
                target: 'http://localhost:8081/api/', //url do meu backend
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        },
        hmr: {
            overlay: false,
            clientPort: 5173,
            port: 5173
        },
        strictPort: true
    },
    base: '/',
    build: {
        outDir: 'dist',
        rollupOptions: {
        input: 'index.html',
        },
    },
    
    optimizeDeps: {
        include: ['@emotion/react', '@mui/material', '@mui/joy', '@mui/styled-engine'],
    },
});