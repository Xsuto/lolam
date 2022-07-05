import { defineNuxtConfig } from "nuxt"
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: true,
  },
  css: ["@/assets/style.css"],
  ssr: false,
  buildModules: ["@nuxtjs/eslint-module"],
  runtimeConfig: {
    public: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      messagingSenderId: "",
      appId: "",
    },
  },
})
