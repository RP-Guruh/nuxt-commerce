<template>
  <!-- create h-screen -->
  <div class="min-h-screen min-w-screen screenLayout">

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
      <SearchBar></SearchBar>

      <Categories></Categories>

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
