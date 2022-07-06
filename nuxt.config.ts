import { defineNuxtConfig } from "nuxt"
export default defineNuxtConfig({
  app: {
    head: {
      title: "Lolam",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  experimental: {
    reactivityTransform: true,
  },
  css: ["@/assets/style.css"],
  ssr: true,
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
