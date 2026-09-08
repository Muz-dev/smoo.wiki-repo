// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  vite: {
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
      ],
    },
    server: {
      allowedHosts: true,
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
});
