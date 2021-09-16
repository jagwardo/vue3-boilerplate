<template>
  <div class="posts text-center">
    <SinglePost
      v-bind:title="title"
      v-bind:author="author"
      v-bind:profile="profile"
      v-bind:published="published"
      v-bind:body="body"
    />
  </div>
</template>

<script lang="ts">
import SinglePost from './components/single-post.vue'
export default {
  name: 'Posts',
  components: {
    SinglePost,
  },
  data() {
    return {
      title: 'Before you start your next genius “totally original” business in Iraq, read this!',
      author: 'Salih Zain',
      profile: 'https://miro.medium.com/fit/c/512/512/2*4b7tChoTJ3c71hFbtJqPKg.jpeg',
      published: new Date().toDateString(),
      body: `<p>
                I came across this list (<a href="https://tinyurl.com/rkqtylz" class="dy ie" rel="noopener ugc nofollow">https://tinyurl.com/rkqtylz</a>)
                of e-commerce services in Iraq (not up to date). I have witnessed the launch of many of those businesses and it’s depressing to see that many of them are
                out of business today. It’s almost always the same story, Iraqis migrate back to Iraq from the U.S./Canada, having $200k+ in savings,
                and the desire to crush the market. Where do they start? E-commerce or delivery services! Done research? Absolutely not because they’re too smart for that!
                Within a few months, the $200k is wasted, and they’re out of business!
                </p>`,
    }
  },
}
</script>
