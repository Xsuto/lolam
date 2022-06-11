import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from "vite-plugin-eslint"
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        reactivityTransform: true
    },
    css: [
        "@/assets/style.css"
    ],
    ssr: false,
    buildModules: [
        '@nuxtjs/eslint-module'
    ]
})
