<template>
  <article
    v-for="product in products"
    class="rounded-xl md:w-52 w-40 mt-4 bg-white ml-4 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
  >
    <div class="rounded-xl">
      <img :src="product.image" class="w-28 object-center" alt="Hotel Photo" />
    </div>
    <div class="mt-1 p-2">
      <h2 class="text-slate-700">{{ product.title }}</h2>
      <p class="mt-1 text-sm text-slate-400">{{ product.category }}</p>

      <div class="mt-3 flex items-end justify-between">
        <p class="text-sm font-bold text-blue-500">$ {{ product.price }}</p>
      </div>
      <div class="mt-3 flex justify-center items-center">
        <div
          class="rounded-lg bg-blue-500 px-2 py-1.5 text-white duration-100 hover:bg-blue-600"
        >
          <button class="text-sm">Add to cart</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=6"
);
</script>
