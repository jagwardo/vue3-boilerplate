<template>
  <div class="fixed h-screen w-56 px-4 pt-8 bg-white shadow-r shadow-lg">
    <div class="px-5 pb-8 mb-5 border-b">
      <img alt="company logo" src="../logo-transparent.png" />
    </div>
    <div class="h-3/4 flex flex-col gap-4 text-gray-500">
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
          font-bold
          text-gray-500
          rounded-lg
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
        </svg>
        <span class="hover:text-black transition duration-200 ease-linear ml-5">Dashboard</span>
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
          font-bold
          text-gray-500
          rounded-lg
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        <span class="hover:text-black transition duration-200 ease-linear ml-5">Posts</span>
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
          font-bold
          text-gray-500
          rounded-lg
        "
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
        <span class="hover:text-black transition duration-200 ease-linear ml-5">About</span>
      </router-link>
    </div>
  </div>
</template>
