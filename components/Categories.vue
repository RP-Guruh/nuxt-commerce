<template>
          
          <div class="flex mt-8 pl-7 pr-7">
      <swiper :slidesPerView="3" :loop="true" :spaceBetween="30" :freeMode="true" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
        <swiper-slide class="border-2 rounded-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium text-white text-lg">All</swiper-slide>
        <swiper-slide class="border-2 rounded-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium text-white text-lg">Man</swiper-slide>
        <swiper-slide class="border-2 rounded-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium text-white text-lg">Women</swiper-slide>
        <swiper-slide class="border-2 rounded-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium text-white text-lg">Kids</swiper-slide>
        <swiper-slide class="border-2 rounded-xl inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium text-white text-lg">Kids</swiper-slide>
     
      </swiper>
    </div>
</template>

<style>



.swiper-slide {
  min-width:100px; display: inline-block
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


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