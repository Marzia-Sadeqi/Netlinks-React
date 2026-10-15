import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: "/Netlinks-React/",  // <-- Set this to your exact GitHub repo name
})
