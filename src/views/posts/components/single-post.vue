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
  // data() {
  //   return {
  //     title: 'Before you start your next genius “totally original” business in Iraq, read this!',
  //     author: 'Salih Zain',
  //     profile: 'https://miro.medium.com/fit/c/512/512/2*4b7tChoTJ3c71hFbtJqPKg.jpeg',
  //     published: new Date().toDateString(),
  //     body: `<p>
  //               I came across this list (<a href="https://tinyurl.com/rkqtylz" class="dy ie" rel="noopener ugc nofollow">https://tinyurl.com/rkqtylz</a>)
  //               of e-commerce services in Iraq (not up to date). I have witnessed the launch of many of those businesses and it’s depressing to see that many of them are
  //               out of business today. It’s almost always the same story, Iraqis migrate back to Iraq from the U.S./Canada, having $200k+ in savings,
  //               and the desire to crush the market. Where do they start? E-commerce or delivery services! Done research? Absolutely not because they’re too smart for that!
  //               Within a few months, the $200k is wasted, and they’re out of business!
  //               </p>`,
  //   }
  // },  
}
</script>
