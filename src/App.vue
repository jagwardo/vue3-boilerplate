<template>
  <SideBar />
  <Navbar />
  <div class="container view-container bg-white shadow-lg">
    <router-view />
  </div>
</template>

<script lang="ts">
import SideBar from './components/shared/sidebar.vue'
import Navbar from './components/shared/navbar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    Navbar
  },
}
</script>
