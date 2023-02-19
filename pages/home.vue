<template>
  <!-- create h-screen -->
  <div class="min-h-screen min-w-screen screenLayout">
    <div class="headerLayout rounded-b-lg h-56 shadow-xl">
      <div class="flex py-7 px-7">
        <img src="https://i.pravatar.cc/50" class="rounded-full" />
        <div class="grid grid-cols-2 px-4 w-full">
          <div class="">
            <p class="text-sm font-normal">Deliver to</p>
            <p class="text-sm">Home</p>
          </div>
          <div class="grid grid-cols-2 px-4 absolute right-4">
            <img src="~/assets/icon_shopping.png" alt="shopping" />
            <img src="~/assets/icon_notif.png" alt="notif" />
          </div>
        </div>
      </div>
      <SearchBar></SearchBar>
      <Categories></Categories>
    </div>

    <!-- CARD ADVERTISING -->

    <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
      <div
        class="flex items-center justify-between p-4 rounded-lg bg-white shadow-indigo-50 shadow-xl"
      >
        <div>
          <h1 class="mt-2 text-2xl font-bold text-yellow-500 text-left">New</h1>
          <h1 class="text-2xl font-bold text-yellow-500 text-left">Arrival</h1>
          <p class="pt-4 text-sm font-semibold text-gray-500">
            With Free Shipping
          </p>
          <button
            class="text-sm mt-6 px-4 py-2 font-bold bg-green-600 text-white rounded-lg tracking-wider hover:bg-yellow-300 outline-none"
          >
            Shop Now
          </button>
        </div>
        <div class="flex justify-center items-center">
          <img src="~/assets/ads1.png" class="w-32" />
        </div>
      </div>
    </div>

    <!-- END OF CARD -->
  </div>
</template>

<style>
p {
  color: rgb(155, 155, 155);
  font-family: "Poppins", sans-serif;
}

.screenLayout {
  background-color: rgba(255, 255, 255);
}

.headerLayout {
  background-color: rgba(255, 255, 255);
}
</style>
