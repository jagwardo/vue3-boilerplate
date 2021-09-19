<template>
  <div class="block text-center max-w-2xl mx-auto py-12">
    <h1 v-if="post.Title" class="text-4xl font-bold text-left max-w-2xl">{{ post.Title }}</h1>
    <div class="flex justify-between mt-5">
      <div class="flex py-2 items-center gap-2">
        <img class="h-12 w-12 rounded-full" v-if="post.Author.Image" alt="Vue logo" v-bind:src="post.Author.Image" />
        <a class="text-green-400 text-sm" v-if="post.Author" href="https://medium.com/@salihzain" target="_blank"> {{ post.Author.FirstName }} {{ post.Author.LastName }}</a>
        <p class="text-gray-400 text-sm">{{ new Date(post.CreatedAt) }}</p>
      </div>
    </div>
    <div class="mt-4 text-lg text-left text-gray-700 leading-8" v-if="post.Content" v-html="post.Content"></div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'

export default {
  
  name: 'SinglePost',
  data() {
    return {
      post: null,
    }
  },
  beforeMount() { 
    const route = useRoute()
    const postID = route.params.id
    fetch(`${process.env.VUE_APP_API_BASE_URL}/posts/${postID}`)
        .then(result => result.json())
        .then(postData => {this.post = postData});
    }
}
</script>
