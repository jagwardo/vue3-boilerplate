<template>
  <SideBar />
  <div class="container bg-gray-50" id="view-container">
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
