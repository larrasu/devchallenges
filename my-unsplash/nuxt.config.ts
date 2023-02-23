// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
  ],
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  googleFonts: {
    families: {
      "Noto+Sans": [500, 700, 800],
    },
  },
});
