<template>
  <div class="fixed h-screen w-56 px-4 bg-white shadow-r shadow-lg">
    <div class="h-3/4 flex flex-col gap-4 text-gray-500 py-14">
      <router-link
        to="/"
        exact
        class="
          pl-5
          text-sm
          flex
          items-center
          py-4
          mb-2
          hover:bg-blue-100 hover:text-gray-700
          transition
          duration-200
          ease-in
        "
      >
        <span>Home</span>
      </router-link>
      <router-link
        to="posts"
        class="
          pl-5
          text-sm
          flex
          items-center
          py-4
          mb-2
          hover:bg-blue-100 hover:text-gray-700
          transition
          duration-200
          ease-in
        "
      >
        <span class="hover:text-black transition duration-200 ease-linear">Posts</span>
      </router-link>
      <router-link
        to="about"
        class="
          pl-5
          text-sm
          flex
          items-center
          py-4
          mb-2
          hover:bg-blue-100 hover:text-gray-700
          transition
          duration-200
          ease-in
        "
      >
        <span class="hover:text-black transition duration-200 ease-linear">About</span>
      </router-link>
    </div>
  </div>
</template>
