<template>
  <!-- create h-screen -->
  <div class="min-h-screen screenLayout">
    <div class="">
      <div class="headerLayout rounded-b-xl h-52 shadow-lg">
        <div class="flex py-7 px-7">
          <img src="https://i.pravatar.cc/50" class="rounded-full" />
          <div class="grid grid-cols-2 px-4 w-full">
            <div class="">
              <p class="text-sm font-mono text-gray-400">Deliver to</p>
              <p class="text-sm font-mono text-white">Home</p>
            </div>
            <div class="grid grid-cols-2 px-4 absolute right-4">
              <img src="~/assets/notification.png" alt="notif" />
              <img src="~/assets/shopping-bag.png" alt="notif" />
            </div>
          </div>
        </div>
        <div class="flex px-7">
          <input style="background-color:#4D4639;"
            class="w-full rounded-xl h-8 px-4 placeholder:px-auto placeholder:text-grey-200 placeholder:font-bold"
            placeholder="Search" type="text" name="" id="" />
        </div>


        <!-- <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">All
            Categories</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Man</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Girl</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Kids</span> -->

        <div class="flex px-7 pt-7 gap-2">

          <swiper :slidesPerView="4" :spaceBetween="30" :freeMode="true" :pagination="{
            clickable: true,
          }" :modules="modules" class="mySwiper">
            <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Man</swiper-slide>
            <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Girl</swiper-slide>
              <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Girl</swiper-slide>
              <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Girl</swiper-slide>
              <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Girl</swiper-slide>
              <swiper-slide
              class="text-sm font-bold rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">Girl</swiper-slide>
            
          </swiper>

        </div>


      </div>

    </div>

  </div>
</template>

<style>
.screenLayout {
  background-color: rgba(28, 25, 20, 255);
}

.headerLayout {
  background-color: rgba(30, 27, 22, 255);
}


.swiper-slide {
  /* Center slide text vertically */
  
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 10%;
  height: 100%;
  object-fit: cover;
}
</style>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
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

