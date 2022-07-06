import { defineNuxtConfig } from "nuxt"
export default defineNuxtConfig({
  app: {
    head: {
      title: "Lolam",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Account manager for League of Legends",
        },
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
