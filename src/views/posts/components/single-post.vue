<template>
  <div class="singlepost">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <div class="flex justify-between">
      <div class="flex py-2">
        <img alt="Vue logo" v-href="profile" />
        <h3>{{ author }}</h3>
      </div>
    </div>
    <div v-html="body"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SinglePost',
  props: {
    id: Number,
    title: String,
    author: String,
    profile: URL,
    body: Text,
  },
}
</script>
