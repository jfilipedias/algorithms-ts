/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  test: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
