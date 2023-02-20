<template>
    
     <swiper :slidesPerView="4" :loop="true" :spaceBetween="10" :freeMode="true" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="product in products"
        class="rounded-xl md:w-32 w-24 mt-4 bg-white ml-4 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
        
        <div class="badgeOff -mx-3 rounded-tl-lg md:w-32 w-24">
            <p class="italic px-2 md:text-sm text-sm text-gray-100 font-semibold">50% OFF</p>
        </div>

        <div class="rounded-xl mt-4">
            <img :src="product.image" class="h-24 w-18 mx-auto" alt="Hotel Photo" />
        </div>
        <div class="mt-1 p-2">
            <p class="text-xs font-bold text-slate-700" v-if="product.title.length < 20">{{ product.title }}</p>
            <p class="text-xs font-bold text-slate-700" v-else>{{ product.title.substring(0, 20) + ".." }}</p>
            <p class="mt-1 text-xs text-slate-400">{{ product.category }}</p>

            <div class="mt-3 flex items-end justify-between">
                <p class="text-xs font-bold text-blue-500">$ {{ product.price }}</p>
            </div>
        </div>
    </swiper-slide>
    </swiper>
</template>

<style>

    .badgeOff {
        background-color: rgb(13,175,23);
    }

</style>

<script setup>
    const { data: products } = await useFetch(
    "https://fakestoreapi.com/products/category/electronics?limit=6"
);

</script>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode],
        };
    },
};
</script>
  