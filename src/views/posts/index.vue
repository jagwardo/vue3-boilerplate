<template>
  <div class="posts text-center">
    <PostsList v-bind:columnDefs="columnDefs" v-bind:rowData="rowData" v-bind:count="rowData.length" />
  </div>
</template>

<script lang="ts">
import PostsList from './components/posts-list.vue';
  export default {
    name: 'Posts',
    components: {
      PostsList,
    },
    data() {
      return {
        columnDefs: [
            { field: 'make' },
            { field: 'model' },
            { field: 'price' }
        ],
        rowData: null
      }
    },
    beforeMount() { 
      fetch('https://www.ag-grid.com/example-assets/row-data.json')
          .then(result => result.json())
          .then(rowData => this.rowData = rowData);
    }
  }
</script>
