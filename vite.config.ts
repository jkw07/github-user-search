import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-jkw07-newapp-4hw5nxun57b.ws-eu117.gitpod.io"]
  }
})
