<template>
  <article
    v-for="product in products"
    class="rounded-xl md:w-52 w-40 mt-4 bg-white ml-4 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
  >
    <div class="rounded-xl">
      <img :src="product.image" class="h-24 w-18 mx-auto" alt="Hotel Photo" />
    </div>
    <div class="mt-1 p-2">
      <p class="text-xs font-bold text-slate-700" v-if="product.title.length < 53">{{ product.title }}</p>
      <p class="text-xs font-bold text-slate-700" v-else>{{ product.title.substring(0,53)+".." }}</p>
      <p class="mt-1 text-xs text-slate-400">{{ product.category }}</p>

      <div class="mt-3 flex items-end justify-between">
        <p class="text-xs font-bold text-blue-500">$ {{ product.price }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=8"
);
</script>
