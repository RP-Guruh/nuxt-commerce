<template>
  <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
  <section
    id="bottom-navigation"
    class="fixed block inset-x-0 bottom-0 z-10 bg-white shadow-sm border-2 border-t-white"
  >
    <div id="tabs" class="flex justify-between">
      <a
        href="#"
        v-for="item in items"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <img :src="item.src" class="mx-auto" />
        <span class="tab tab-home block text-xs font-extrabold text-black">{{
          item.titleImage
        }}</span>
      </a>
    </div>
  </section>
</template>

<script>
import icon1 from "~/assets/home.png";
import icon2 from "~/assets/category.png";
import icon3 from "~/assets/cart.png";
import icon4 from "~/assets/account.png";

export default {
  data() {
    return {
      items: [
        {
          src: icon1,
          titleImage: "Home",
        },
        {
          src: icon2,
          titleImage: "Categories",
        },
        {
          src: icon3,
          titleImage: "Carts",
        },
        {
          src: icon4,
          titleImage: "Account",
        },
      ],
    };
  },
};
</script>
