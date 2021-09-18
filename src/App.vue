<template>
  <SideBar />
  <div class="container view-container bg-white shadow-lg">
    <router-view />
  </div>
</template>

<script lang="ts">
import SideBar from './components/shared/sidebar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  },
}
</script>
