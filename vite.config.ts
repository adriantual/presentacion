import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Para GitHub Pages: si el repo es "usuario/repo", la base será "/repo/"
    // Si el repo es "usuario/usuario.github.io", la base será "/"
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    const base = repoName && !repoName.includes('.github.io') 
      ? `/${repoName}/` 
      : '/';
    
    return {
      base: mode === 'production' && process.env.GITHUB_REPOSITORY ? base : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
