import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://diego-palacio.github.io/web-arg-mundial/",
  esbuild:{
    loader:'jsx',
  },
  optimizeDeps:{
    esbuildOptions:{
      loader:{
        '.js':'jsx',
      },
    },
  },
})  
