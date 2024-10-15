import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
  },
})
