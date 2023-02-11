// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    head: {
      title: "Nuxt Page",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
      ],
    },
    
  },
  
  modules: ["@nuxtjs/tailwindcss"],
  css:["@/assets/Styles/global.css"]
  
});
