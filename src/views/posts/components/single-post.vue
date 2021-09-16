<template>
  <div class="block text-center max-w-2xl mx-auto">
    <h1 v-if="title" class="text-3xl font-bold text-left max-w-2xl">{{ title }}</h1>
    <div class="flex justify-between mt-5">
      <div class="flex py-2 items-center gap-2">
        <img class="h-6 w-6 rounded-full" v-if="profile" alt="Vue logo" v-bind:src="profile" />
        <a class="text-green-400 text-sm" v-if="author" href="https://medium.com/@salihzain" target="_blank"> {{ author }}</a>
        <p class="text-gray-400 text-sm">{{ published }}</p>
      </div>
    </div>
    <div class="mt-4 text-lg text-left text-gray-700 leading-8" v-if="body" v-html="body"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SinglePost',
  props: {
    id: Number,
    title: String,
    author: String,
    profile: String,
    published: Date,
    body: String,
  },
}
</script>
