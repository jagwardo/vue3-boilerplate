<template>

</template>

<script lang="ts">
import { useRoute } from 'vue-router'

export default {
  
  name: 'CreatePost',
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
