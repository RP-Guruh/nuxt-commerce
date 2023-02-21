<template>
  <div class="flex mt-8 pl-7 pr-7">
    <swiper
      :slidesPerView="3"
      :loop="true"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >All</swiper-slide
      >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >Man</swiper-slide
      >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >Women</swiper-slide
      >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >Kids</swiper-slide
      >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >Shoes</swiper-slide
      >
      <swiper-slide
        class="border-2 rounded-xl inline-block py-2 px-auto leading-none text-center whitespace-nowrap align-baseline font-medium text-base"
        >Electronics</swiper-slide
      >
    </swiper>
  </div>
</template>

<style>
.swiper-slide {
  min-width: 100px;
  display: inline-block;
  border-color: rgb(3, 172, 14);
  color: rgb(13, 175, 23);
  font-family: "Poppins", sans-serif;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  bottom: 2px;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";

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
