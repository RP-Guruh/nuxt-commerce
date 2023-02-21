<template>
  <swiper
    :slidesPerView="3"
    :loop="true"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper bg-white"
  >
    <swiper-slide
      v-for="product in products"
      class="rounded-xl md:w-44 w-40 mt-4 bg-white ml-4 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
    >
      <!-- <div class="badgeOff -mx-3 rounded-tl-lg md:w-32 w-24">
        <p class="italic px-2 md:text-sm text-sm text-gray-100 font-semibold">
          50% OFF
        </p>
      </div> -->

      <img
        :src="product.image"
        class="image-product mx-auto pt-4"
        alt="Hotel Photo"
      />

      <div class="mt-8">
        <p
          class="text-xs font-bold text-slate-700"
          v-if="product.title.length < 15"
        >
          {{ product.title }}
        </p>
        <p class="text-xs font-bold text-slate-700" v-else>
          {{ product.title.substring(0, 15) + ".." }}
        </p>
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
  background-color: rgb(13, 175, 23);
}

.swiper-slide {
  font-family: "Poppins", sans-serif;
  width: auto;
}

.swiper-slide img {
  margin-top: 10px;
  width: 100px;
  height: 100px;
}

.mySwiper {
  margin-bottom: 60px;
}
</style>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

//women's clothing

const { data: products } = await useFetch(
  "https://fakestoreapi.com/products/category/electronics?limit=5"
);

const modules = [FreeMode];
</script>
