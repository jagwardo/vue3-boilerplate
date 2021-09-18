<template>
  <div v-if="rowData" class="posts text-center">
    <PostsList v-bind:columnDefs="columnDefs" v-bind:rowData="rowData" v-bind:count="totalData" />
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
            { headerName: 'ID', field: 'ID' },
            { headerName: 'Title', field: 'Title' },
            { headerName: 'Author', field: 'Author.FirstName' }
        ],
        rowData: null,
        totalData: null,
      }
    },
    beforeMount() { 
      fetch(`${process.env.VUE_APP_API_BASE_URL}/posts/`)
          .then(result => result.json())
          .then(rowData => {this.rowData = rowData["Data"], this.totalData=rowData["TotalData"]});
    }
  }
</script>
