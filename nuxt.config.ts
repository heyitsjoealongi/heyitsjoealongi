// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "nuxt-schema-org",
    "@nuxtjs/google-fonts",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          RobotoMono: true,
        },
      },
    ],
    "nuxt-gtag",
    "nuxt-clarity-analytics",
    "nuxt-svgo",
  ],
  css: ["~/assets/css/main.css"],
  gtag: {
    id: "G-1MEPB6W87X",
  },
});
