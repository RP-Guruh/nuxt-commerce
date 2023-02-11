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

p {
  color: rgb(155,155,155);
  font-family: 'Poppins', sans-serif;
}

.screenLayout {
  background-color: rgba(255, 255, 255);
}

.headerLayout {
  background-color: rgba(255, 255, 255);
}

</style>
