<template>
  <div v-if="rowData" class="posts text-center py-5">
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
            { headerName: 'Author', field: 'Author.FirstName' },
            {
              headerName: 'Action',
              field: 'ID',
              cellRenderer: function(params) {
                    let postID = params.data.ID;
                    let postLink = 
                    `<a href="/#/posts/${postID}" class="p-4 bg-company-primary text-white rounded-lg">View</a>`;
                    return postLink;
                }
              },
        ],
        rowData: null,
        totalData: null
      }
    },
    beforeMount() { 
      fetch(`${process.env.VUE_APP_API_BASE_URL}/posts/`)
          .then(result => result.json())
          .then(rowData => {this.rowData = rowData["Data"], this.totalData=rowData["TotalData"]});
    }
  }
</script>
