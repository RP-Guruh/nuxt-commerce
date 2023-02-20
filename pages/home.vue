<template>
  <!-- create h-screen -->
  <div class="min-h-screen min-w-screen screenLayout mobile-view mx-auto">
    <div class="headerLayout rounded-b-lg h-56 shadow-xl">
      <div class="flex py-7 px-7">
        <img src="https://i.pravatar.cc/50" class="rounded-full" />
        <div class="grid grid-cols-2 px-4 w-full">
          <div class="">
            <p class="text-sm font-normal">Deliver to</p>
            <p class="text-sm">Home</p>
            
          </div>

        </div>
        <div class="grid grid-cols-2">
            <img src="~/assets/icon_shopping.png" alt="shopping" />
            <img src="~/assets/icon_notif.png" alt="notif" />
          </div>
      </div>
      <SearchBar></SearchBar>
      <Categories></Categories>
    </div>

    <!-- CARD ADVERTISING -->

    <div class="p-4 w-full hover:scale-105 duration-500">
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

    <div class="px-4">
      <p>Popular Products</p>
    </div>

    <article
      class="rounded-xl w-52 bg-white ml-4 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
    >
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Hotel Photo"
          />
          <div
            class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <button class="text-sm">Add to cart</button>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
          <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold text-blue-500">$850</p>

            <div
              class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <button class="text-sm">Add to cart</button>
            </div>
          </div>
        </div>
      </a>
    </article>
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
