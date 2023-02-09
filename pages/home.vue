<template>
  <!-- create h-screen -->
  <div class="min-h-screen screenLayout">
    <div class="grid grid-rows-4 grid-flow-col gap-4">
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

        <div class="flex mt-6 px-7 gap-4">
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-600 text-white border-white">All
            Categories</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Man</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Girl</span>
          <span
            class="rounded-full inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white">Kids</span>
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
</style>

